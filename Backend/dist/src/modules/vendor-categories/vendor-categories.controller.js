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
exports.VendorCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const vendor_categories_service_1 = require("./vendor-categories.service");
const create_vendor_category_dto_1 = require("./dto/create-vendor-category.dto");
let VendorCategoriesController = class VendorCategoriesController {
    vendorService;
    constructor(vendorService) {
        this.vendorService = vendorService;
    }
    create(dto) {
        return this.vendorService.create(dto);
    }
    findAll() {
        return this.vendorService.findAll();
    }
    getForm(id) {
        return this.vendorService.getForm(id);
    }
    findOne(id) {
        return this.vendorService.findOne(id);
    }
};
exports.VendorCategoriesController = VendorCategoriesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vendor_category_dto_1.CreateVendorCategoryDto]),
    __metadata("design:returntype", void 0)
], VendorCategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendorCategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/form'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorCategoriesController.prototype, "getForm", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VendorCategoriesController.prototype, "findOne", null);
exports.VendorCategoriesController = VendorCategoriesController = __decorate([
    (0, common_1.Controller)('vendor-categories'),
    __metadata("design:paramtypes", [vendor_categories_service_1.VendorCategoriesService])
], VendorCategoriesController);
//# sourceMappingURL=vendor-categories.controller.js.map