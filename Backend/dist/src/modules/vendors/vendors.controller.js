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
exports.VendorsController = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("./vendors.service");
const create_vendor_dto_1 = require("./dto/create-vendor.dto");
const update_vendor_dto_1 = require("./dto/update-vendor.dto");
const update_vendor_status_dto_1 = require("./dto/update-vendor-status.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const search_vendor_dto_1 = require("./dto/search-vendor.dto");
const add_vendor_field_dto_1 = require("./dto/add-vendor-field.dto");
const update_vendor_field_dto_1 = require("./dto/update-vendor-field.dto");
const update_field_order_dto_1 = require("./dto/update-field-order.dto");
const create_vendor_media_dto_1 = require("./dto/create-vendor-media.dto");
const create_review_dto_1 = require("./dto/create-review.dto");
let VendorsController = class VendorsController {
    vendorsService;
    constructor(vendorsService) {
        this.vendorsService = vendorsService;
    }
    create(dto, user) {
        return this.vendorsService.create(dto, user.id ?? user.sub);
    }
    findAll() {
        return this.vendorsService.findAll();
    }
    search(dto) {
        return this.vendorsService.search(dto);
    }
    findOne(id) {
        return this.vendorsService.findOne(id);
    }
    updateStatus(id, dto, user) {
        return this.vendorsService.updateStatus(id, dto, user.id ?? user.sub);
    }
    getStatusHistory(id) {
        return this.vendorsService.getStatusHistory(id);
    }
    update(id, dto) {
        return this.vendorsService.update(id, dto);
    }
    addCustomField(id, dto) {
        return this.vendorsService.addCustomField(id, dto);
    }
    updateCustomField(vendorId, fieldId, dto) {
        return this.vendorsService.updateCustomField(vendorId, fieldId, dto);
    }
    deleteCustomField(vendorId, fieldId) {
        return this.vendorsService.deleteCustomField(vendorId, fieldId);
    }
    updateFieldOrder(vendorId, fieldId, dto) {
        return this.vendorsService.updateFieldOrder(vendorId, fieldId, dto.displayOrder);
    }
    addMedia(id, dto) {
        return this.vendorsService.addMedia(id, dto);
    }
    deleteMedia(mediaId) {
        return this.vendorsService.deleteMedia(mediaId);
    }
    createReview(id, user, dto) {
        return this.vendorsService.createReview(id, user.id ?? user.sub, dto);
    }
    getReviews(id) {
        return this.vendorsService.getReviews(id);
    }
};
exports.VendorsController = VendorsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vendor_dto_1.CreateVendorDto, Object]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_vendor_dto_1.SearchVendorDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vendor_status_dto_1.UpdateVendorStatusDto, Object]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)(':id/status-history'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "getStatusHistory", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vendor_dto_1.UpdateVendorDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/custom-fields'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_vendor_field_dto_1.AddVendorFieldDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "addCustomField", null);
__decorate([
    (0, common_1.Patch)(':id/custom-fields/:fieldId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('fieldId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_vendor_field_dto_1.UpdateVendorFieldDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "updateCustomField", null);
__decorate([
    (0, common_1.Delete)(':id/custom-fields/:fieldId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('fieldId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "deleteCustomField", null);
__decorate([
    (0, common_1.Patch)(':id/custom-fields/:fieldId/order'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('fieldId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_field_order_dto_1.UpdateFieldOrderDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "updateFieldOrder", null);
__decorate([
    (0, common_1.Post)(':id/media'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_vendor_media_dto_1.CreateVendorMediaDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "addMedia", null);
__decorate([
    (0, common_1.Delete)('media/:mediaId'),
    __param(0, (0, common_1.Param)('mediaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "deleteMedia", null);
__decorate([
    (0, common_1.Post)(':id/reviews'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "createReview", null);
__decorate([
    (0, common_1.Get)(':id/reviews'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "getReviews", null);
exports.VendorsController = VendorsController = __decorate([
    (0, common_1.Controller)('vendors'),
    __metadata("design:paramtypes", [vendors_service_1.VendorsService])
], VendorsController);
//# sourceMappingURL=vendors.controller.js.map