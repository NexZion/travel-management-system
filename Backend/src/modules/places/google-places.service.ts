import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class GooglePlacesService {

  constructor( private readonly prisma: PrismaService,) {}

  private loadMockData() {
    const filePath = path.join(
      process.cwd(),
      'src/common/mock/google-places.mock.json',
    );

    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
  }

  async searchPlaces(query: string) {
    const data = this.loadMockData();

    if (!query) return data;

    return data.filter((place) =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.district.toLowerCase().includes(query.toLowerCase()) ||
      place.province.toLowerCase().includes(query.toLowerCase()),
    );
  }

  async getPlaceById(placeId: string) {
    const data = this.loadMockData();
    return data.find((p) => p.place_id === placeId);
  }

  async importPlaces() {
    const places = this.loadMockData();

    for (const place of places) {
      const existing = await this.prisma.destination.findUnique({
        where: {
          placeId: place.place_id,
        },
      });

      if (existing) continue;

      const destination =
        await this.prisma.destination.create({
          data: {
            name: place.name,
            slug: place.name
              .toLowerCase()
              .replace(/\s+/g, '-'),

            district: place.district,
            province: place.province,
            description: place.description,

            latitude: place.latitude,
            longitude: place.longitude,

            placeId: place.place_id,
            address: place.address,

            rating: place.rating,
            reviewCount: place.reviewCount,

            source: 'google_places',
          },
        });

      for (const image of place.images) {
        await this.prisma.destinationImage.create({
          data: {
            destinationId: destination.id,
            url: image,
          },
        });
      }
    }

    return {
      message: 'Import completed',
    };
  }
}