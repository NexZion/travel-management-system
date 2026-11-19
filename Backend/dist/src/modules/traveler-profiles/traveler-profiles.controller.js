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
exports.TravelerProfilesController = void 0;
const common_1 = require("@nestjs/common");
const traveler_profiles_service_1 = require("./traveler-profiles.service");
const update_traveler_profile_dto_1 = require("./dto/update-traveler-profile.dto");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let TravelerProfilesController = class TravelerProfilesController {
    travelerProfilesService;
    constructor(travelerProfilesService) {
        this.travelerProfilesService = travelerProfilesService;
    }
    getMyProfile(user) {
        return this.travelerProfilesService.getMyProfile(user.id ?? user.sub);
    }
    updateMyProfile(user, dto) {
        return this.travelerProfilesService.updateMyProfile(user.id ?? user.sub, dto);
    }
    completeOnboarding(user) {
        return this.travelerProfilesService.completeOnboarding(user.id ?? user.sub);
    }
};
exports.TravelerProfilesController = TravelerProfilesController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TravelerProfilesController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.Put)('me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_traveler_profile_dto_1.UpdateTravelerProfileDto]),
    __metadata("design:returntype", void 0)
], TravelerProfilesController.prototype, "updateMyProfile", null);
__decorate([
    (0, common_1.Patch)('me/onboarding'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TravelerProfilesController.prototype, "completeOnboarding", null);
exports.TravelerProfilesController = TravelerProfilesController = __decorate([
    (0, common_1.Controller)('traveler-profiles'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [traveler_profiles_service_1.TravelerProfilesService])
], TravelerProfilesController);
//# sourceMappingURL=traveler-profiles.controller.js.map