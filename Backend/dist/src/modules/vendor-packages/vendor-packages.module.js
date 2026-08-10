"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorPackagesModule = void 0;
const common_1 = require("@nestjs/common");
const vendor_packages_service_1 = require("./vendor-packages.service");
const vendor_packages_controller_1 = require("./vendor-packages.controller");
const auth_module_1 = require("../auth/auth.module");
let VendorPackagesModule = class VendorPackagesModule {
};
exports.VendorPackagesModule = VendorPackagesModule;
exports.VendorPackagesModule = VendorPackagesModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule],
        providers: [vendor_packages_service_1.VendorPackagesService],
        controllers: [vendor_packages_controller_1.VendorPackagesController]
    })
], VendorPackagesModule);
//# sourceMappingURL=vendor-packages.module.js.map