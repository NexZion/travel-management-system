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
exports.TripsController = void 0;
const common_1 = require("@nestjs/common");
const trips_service_1 = require("./trips.service");
const create_trip_dto_1 = require("./dto/create-trip.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const public_decorator_1 = require("../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const common_2 = require("@nestjs/common");
const filter_trips_dto_1 = require("./dto/filter-trips.dto");
const add_destinations_dto_1 = require("./dto/add-destinations.dto");
const update_trip_dto_1 = require("./dto/update-trip.dto");
const update_trip_destination_dto_1 = require("./dto/update-trip-destination.dto");
let TripsController = class TripsController {
    tripsService;
    constructor(tripsService) {
        this.tripsService = tripsService;
    }
    createTrip(dto, req, user) {
        return this.tripsService.create(dto, req.user);
    }
    getUserTrips(user, filters) {
        return this.tripsService.findAll(user.sub, filters);
    }
    getTripById(id, user) {
        return this.tripsService.findOne(id, user.sub);
    }
    addDestination(tripId, dto, user) {
        return this.tripsService.addDestination(tripId, user.sub, dto);
    }
    reorder(tripId, body, user) {
        return this.tripsService.reorder(tripId, body.orderedIds, user.sub);
    }
    duplicate(tripId, user) {
        return this.tripsService.duplicateTrip(tripId, user.sub);
    }
    shareTrip(tripId, user) {
        return this.tripsService.generateShareLink(tripId, user.sub);
    }
    getSharedTrip(token) {
        return this.tripsService.getSharedTrip(token);
    }
    updateTrip(tripId, dto, user) {
        return this.tripsService.updateTrip(tripId, dto, user.sub);
    }
    deleteTrip(tripId, user) {
        return this.tripsService.deleteTrip(tripId, user.sub);
    }
    updateTripDestination(tripId, stopId, dto, user) {
        return this.tripsService.updateTripDestination(tripId, stopId, dto, user.sub);
    }
    removeTripDestination(tripId, stopId, user) {
        return this.tripsService.removeTripDestination(tripId, stopId, user.sub);
    }
};
exports.TripsController = TripsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trip_dto_1.CreateTripDto, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "createTrip", null);
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, filter_trips_dto_1.FilterTripsDto]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "getUserTrips", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "getTripById", null);
__decorate([
    (0, common_1.Post)(':id/destinations'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_destinations_dto_1.AddTripDestinationDto, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "addDestination", null);
__decorate([
    (0, common_1.Post)(':id/destinations/reorder'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "reorder", null);
__decorate([
    (0, common_1.Post)(':id/duplicate'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "duplicate", null);
__decorate([
    (0, common_1.Post)(':id/share'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "shareTrip", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_2.Get)('share/:token'),
    __param(0, (0, common_2.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "getSharedTrip", null);
__decorate([
    (0, common_2.Put)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_trip_dto_1.UpdateTripDto, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "updateTrip", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "deleteTrip", null);
__decorate([
    (0, common_2.Put)(':tripId/destinations/:stopId'),
    __param(0, (0, common_2.Param)('tripId')),
    __param(1, (0, common_2.Param)('stopId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_trip_destination_dto_1.UpdateTripDestinationDto, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "updateTripDestination", null);
__decorate([
    (0, common_1.Delete)(':tripId/destinations/:stopId'),
    __param(0, (0, common_2.Param)('tripId')),
    __param(1, (0, common_2.Param)('stopId')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], TripsController.prototype, "removeTripDestination", null);
exports.TripsController = TripsController = __decorate([
    (0, common_1.Controller)('trips'),
    __metadata("design:paramtypes", [trips_service_1.TripsService])
], TripsController);
//# sourceMappingURL=trips.controller.js.map