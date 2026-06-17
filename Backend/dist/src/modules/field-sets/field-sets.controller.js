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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldSetsController = void 0;
const common_1 = require("@nestjs/common");
const create_field_set_dto_1 = require("./dto/create-field-set.dto");
const field_sets_service_1 = require("./field-sets.service");
const create_field_set_field_dto_1 = require("./dto/create-field-set-field.dto");
let FieldSetsController = class FieldSetsController {
    fieldSetsService;
    constructor(fieldSetsService) {
        this.fieldSetsService = fieldSetsService;
    }
    create(dto) {
        return this.fieldSetsService.create(dto);
    }
    findAll() {
        return this.fieldSetsService.findAll();
    }
    findOne(id) {
        return this.fieldSetsService.findOne(id);
    }
    attachField(dto) {
        return this.fieldSetsService.attachField(dto);
    }
    getForm(id) {
        return this.fieldSetsService.getForm(id);
    }
};
exports.FieldSetsController = FieldSetsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_field_set_dto_1.CreateFieldSetDto]),
    __metadata("design:returntype", void 0)
], FieldSetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FieldSetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FieldSetsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('attach-field'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_field_set_field_dto_1.CreateFieldSetFieldDto]),
    __metadata("design:returntype", void 0)
], FieldSetsController.prototype, "attachField", null);
__decorate([
    (0, common_1.Get)(':id/form'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FieldSetsController.prototype, "getForm", null);
exports.FieldSetsController = FieldSetsController = __decorate([
    (0, common_1.Controller)('field-sets'),
    __metadata("design:paramtypes", [field_sets_service_1.FieldSetsService])
], FieldSetsController);
//# sourceMappingURL=field-sets.controller.js.map