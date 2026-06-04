import { TripResponse } from './trip.response';

export function mapTrip(trip: any): TripResponse {
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