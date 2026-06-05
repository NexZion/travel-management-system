export class TripResponse {
  id!: string;
  title!: string;
  description?: string;

  status!: string;
  travelStyle!: string;
  vibe!: string;
  budgetRange!: string;

  startDate?: Date;
  endDate?: Date;
  totalDays?: number;

  travelerCount!: number;

  isPublic!: boolean;

  createdAt!: Date;
  updatedAt!: Date;
}