"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GooglePlacesService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const prisma_service_1 = require("../../database/prisma/prisma.service");
let GooglePlacesService = class GooglePlacesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    loadMockData() {
        const filePath = path.join(process.cwd(), 'src/common/mock/google-places.mock.json');
        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData);
    }
    async searchPlaces(query) {
        const data = this.loadMockData();
        if (!query)
            return data;
        return data.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()) ||
            place.district.toLowerCase().includes(query.toLowerCase()) ||
            place.province.toLowerCase().includes(query.toLowerCase()));
    }
    async getPlaceById(placeId) {
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
            if (existing)
                continue;
            const destination = await this.prisma.destination.create({
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
};
exports.GooglePlacesService = GooglePlacesService;
exports.GooglePlacesService = GooglePlacesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GooglePlacesService);
//# sourceMappingURL=google-places.service.js.map