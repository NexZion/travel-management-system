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
exports.VendorPackagesController = void 0;
const common_1 = require("@nestjs/common");
const create_vendor_package_dto_1 = require("./dto/create-vendor-package.dto");
const vendor_packages_service_1 = require("./vendor-packages.service");
let VendorPackagesController = class VendorPackagesController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findByVendor(vendorId) {
        return this.service.findByVendor(vendorId);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
};
exports.VendorPackagesController = VendorPackagesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vendor_package_dto_1.CreateVendorPackageDto]),
    __metadata("design:returntype", void 0)
], VendorPackagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('vendor/:vendorId'),
    __param(0, (0, common_1.Param)('vendorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorPackagesController.prototype, "findByVendor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorPackagesController.prototype, "findOne", null);
exports.VendorPackagesController = VendorPackagesController = __decorate([
    (0, common_1.Controller)('vendor-packages'),
    __metadata("design:paramtypes", [vendor_packages_service_1.VendorPackagesService])
], VendorPackagesController);
//# sourceMappingURL=vendor-packages.controller.js.map