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
exports.VibesController = void 0;
const common_1 = require("@nestjs/common");
const vibes_service_1 = require("./vibes.service");
const create_vibe_dto_1 = require("./dto/create-vibe.dto");
const update_vibe_dto_1 = require("./dto/update-vibe.dto");
let VibesController = class VibesController {
    vibesService;
    constructor(vibesService) {
        this.vibesService = vibesService;
    }
    create(dto) {
        return this.vibesService.create(dto);
    }
    findAll() {
        return this.vibesService.findAll();
    }
    findOne(id) {
        return this.vibesService.findOne(id);
    }
    update(id, dto) {
        return this.vibesService.update(id, dto);
    }
    remove(id) {
        return this.vibesService.remove(id);
    }
};
exports.VibesController = VibesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vibe_dto_1.CreateVibeDto]),
    __metadata("design:returntype", void 0)
], VibesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VibesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VibesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vibe_dto_1.UpdateVibeDto]),
    __metadata("design:returntype", void 0)
], VibesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VibesController.prototype, "remove", null);
exports.VibesController = VibesController = __decorate([
    (0, common_1.Controller)('vibes'),
    __metadata("design:paramtypes", [vibes_service_1.VibesService])
], VibesController);
//# sourceMappingURL=vibes.controller.js.map