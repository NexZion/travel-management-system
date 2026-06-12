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
exports.FieldSetsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let FieldSetsService = class FieldSetsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.fieldSet.create({
            data: dto,
        });
    }
    async findAll() {
        return this.prisma.fieldSet.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        return this.prisma.fieldSet.findUnique({
            where: { id },
        });
    }
    async attachField(dto) {
        return this.prisma.fieldSetField.create({
            data: {
                fieldSetId: dto.fieldSetId,
                fieldId: dto.fieldId,
                displayOrder: dto.displayOrder,
                isRequired: dto.isRequired,
                readOnly: dto.readOnly,
            },
        });
    }
};
exports.FieldSetsService = FieldSetsService;
exports.FieldSetsService = FieldSetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FieldSetsService);
//# sourceMappingURL=field-sets.service.js.map