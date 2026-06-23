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
exports.PackageFieldsController = void 0;
const common_1 = require("@nestjs/common");
const package_fields_service_1 = require("./package-fields.service");
const create_package_field_dto_1 = require("./dto/create-package-field.dto");
const assign_package_field_dto_1 = require("./dto/assign-package-field.dto");
let PackageFieldsController = class PackageFieldsController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    assignFields(id, dto) {
        return this.service.assignFields(id, dto);
    }
};
exports.PackageFieldsController = PackageFieldsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_package_field_dto_1.CreatePackageFieldDto]),
    __metadata("design:returntype", void 0)
], PackageFieldsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id/fields'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assign_package_field_dto_1.AssignPackageFieldsDto]),
    __metadata("design:returntype", void 0)
], PackageFieldsController.prototype, "assignFields", null);
exports.PackageFieldsController = PackageFieldsController = __decorate([
    (0, common_1.Controller)('package-fields'),
    __metadata("design:paramtypes", [package_fields_service_1.PackageFieldsService])
], PackageFieldsController);
//# sourceMappingURL=package-fields.controller.js.map