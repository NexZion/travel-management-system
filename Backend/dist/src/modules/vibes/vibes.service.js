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
exports.VibesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let VibesService = class VibesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.vibe.findUnique({
            where: { name: dto.name },
        });
        if (exists) {
            throw new common_1.ConflictException('Vibe already exists');
        }
        return this.prisma.vibe.create({
            data: dto,
        });
    }
    async findAll() {
        return this.prisma.vibe.findMany({
            orderBy: {
                name: 'asc',
            },
        });
    }
    async findOne(id) {
        const vibe = await this.prisma.vibe.findUnique({
            where: { id },
        });
        if (!vibe) {
            throw new common_1.NotFoundException('Vibe not found');
        }
        return vibe;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.vibe.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        const tripCount = await this.prisma.trip.count({
            where: {
                vibeId: id,
            },
        });
        if (tripCount > 0) {
            throw new common_1.ConflictException('Cannot delete vibe used by trips');
        }
        return this.prisma.vibe.delete({
            where: { id },
        });
    }
};
exports.VibesService = VibesService;
exports.VibesService = VibesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VibesService);
//# sourceMappingURL=vibes.service.js.map