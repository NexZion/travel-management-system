"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let DestinationsService = class DestinationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371000;
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a = Math.sin(dLat / 2) *
            Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
                Math.cos((lat2 * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
    async findAll(filters) {
        return this.prisma.destination.findMany({
            where: {
                isActive: true,
                ...(filters.category && {
                    category: filters.category,
                }),
                ...(filters.district && {
                    district: filters.district,
                }),
                ...(filters.province && {
                    province: filters.province,
                }),
            },
            orderBy: {
                name: 'asc',
            },
        });
    }
    async findOne(id) {
        const destination = await this.prisma.destination.findUnique({
            where: {
                id,
            },
        });
        if (!destination) {
            throw new common_1.NotFoundException('Destination not found');
        }
        return destination;
    }
    async nearby(lat, lng, radius) {
        const destinations = await this.prisma.destination.findMany({
            where: {
                isActive: true,
            },
        });
        const results = destinations
            .map((destination) => {
            const distance = this.calculateDistance(lat, lng, destination.latitude, destination.longitude);
            return {
                ...destination,
                distanceMeters: Math.round(distance),
            };
        })
            .filter((d) => d.distanceMeters <= radius)
            .sort((a, b) => a.distanceMeters -
            b.distanceMeters);
        return results;
    }
};
exports.DestinationsService = DestinationsService;
exports.DestinationsService = DestinationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DestinationsService);
//# sourceMappingURL=destinations.service.js.map