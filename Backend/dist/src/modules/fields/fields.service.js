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
exports.FieldsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let FieldsService = class FieldsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.field.create({
            data: {
                name: dto.name,
                label: dto.label,
                dataType: dto.dataType,
                placeholder: dto.placeholder,
                helpText: dto.helpText,
                defaultValue: dto.defaultValue,
            },
        });
    }
    async findAll() {
        return this.prisma.field.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        return this.prisma.field.findUnique({
            where: { id },
        });
    }
    async createOption(dto) {
        const field = await this.prisma.field.findUnique({
            where: {
                id: dto.fieldId,
            },
        });
        if (!field) {
            throw new Error('Field not found');
        }
        return this.prisma.fieldOption.create({
            data: {
                fieldId: dto.fieldId,
                label: dto.label,
                value: dto.value,
                displayOrder: dto.displayOrder ?? 0,
            },
        });
    }
};
exports.FieldsService = FieldsService;
exports.FieldsService = FieldsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FieldsService);
//# sourceMappingURL=fields.service.js.map