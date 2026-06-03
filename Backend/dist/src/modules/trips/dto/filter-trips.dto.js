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
exports.FilterTripsDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class FilterTripsDto {
    status;
    travelStyle;
    vibe;
    budgetRange;
}
exports.FilterTripsDto = FilterTripsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.TripStatus),
    __metadata("design:type", String)
], FilterTripsDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.TravelStyle),
    __metadata("design:type", String)
], FilterTripsDto.prototype, "travelStyle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.Vibe),
    __metadata("design:type", String)
], FilterTripsDto.prototype, "vibe", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.BudgetRange),
    __metadata("design:type", String)
], FilterTripsDto.prototype, "budgetRange", void 0);
//# sourceMappingURL=filter-trips.dto.js.map