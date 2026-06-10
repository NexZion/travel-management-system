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
exports.TravelStylesController = void 0;
const common_1 = require("@nestjs/common");
const travel_styles_service_1 = require("./travel-styles.service");
const create_travel_style_dto_1 = require("./dto/create-travel-style.dto");
const update_travel_style_dto_1 = require("./dto/update-travel-style.dto");
let TravelStylesController = class TravelStylesController {
    travelStylesService;
    constructor(travelStylesService) {
        this.travelStylesService = travelStylesService;
    }
    create(dto) {
        return this.travelStylesService.create(dto);
    }
    findAll() {
        return this.travelStylesService.findAll();
    }
    findOne(id) {
        return this.travelStylesService.findOne(id);
    }
    update(id, dto) {
        return this.travelStylesService.update(id, dto);
    }
    remove(id) {
        return this.travelStylesService.remove(id);
    }
};
exports.TravelStylesController = TravelStylesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_travel_style_dto_1.CreateTravelStyleDto]),
    __metadata("design:returntype", void 0)
], TravelStylesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TravelStylesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelStylesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_travel_style_dto_1.UpdateTravelStyleDto]),
    __metadata("design:returntype", void 0)
], TravelStylesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TravelStylesController.prototype, "remove", null);
exports.TravelStylesController = TravelStylesController = __decorate([
    (0, common_1.Controller)('travel-styles'),
    __metadata("design:paramtypes", [travel_styles_service_1.TravelStylesService])
], TravelStylesController);
//# sourceMappingURL=travel-styles.controller.js.map