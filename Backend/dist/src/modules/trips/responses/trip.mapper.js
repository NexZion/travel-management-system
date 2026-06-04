"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTrip = mapTrip;
function mapTrip(trip) {
    return {
        id: trip.id,
        title: trip.title,
        description: trip.description,
        status: trip.status,
        travelStyle: trip.travelStyle,
        vibe: trip.vibe,
        budgetRange: trip.budgetRange,
        startDate: trip.startDate,
        endDate: trip.endDate,
        totalDays: trip.totalDays,
        travelerCount: trip.travelerCount,
        isPublic: trip.isPublic,
        createdAt: trip.createdAt,
        updatedAt: trip.updatedAt,
    };
}
//# sourceMappingURL=trip.mapper.js.map