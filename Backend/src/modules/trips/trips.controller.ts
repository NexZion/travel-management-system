import { Controller, Post, Body, UseGuards, Req, Delete } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from 'src/common/decorators/public.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Get, Query, Param, Put } from '@nestjs/common';
import { FilterTripsDto } from './dto/filter-trips.dto';
import { AddTripDestinationDto } from './dto/add-destinations.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { UpdateTripDestinationDto } from './dto/update-trip-destination.dto';

@Controller('trips')
export class TripsController {

  constructor(private readonly tripsService: TripsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createTrip(@Body() dto: CreateTripDto, @Req() req: any, 
  @CurrentUser() user: any,) {
    return this.tripsService.create(dto, req.user);
  }

  @Get()
  getUserTrips(
  @CurrentUser() user: any,
  @Query() filters: FilterTripsDto,
  ) {
    return this.tripsService.findAll(user.sub, filters);
  }

  @Get(':id')
  getTripById(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.findOne(id, user.sub);
  }

  @Post(':id/destinations')
  addDestination(
    @Param('id') tripId: string,
    @Body() dto: AddTripDestinationDto,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.addDestination(tripId, user.sub, dto);
  }

  @Post(':id/destinations/reorder')
  reorder(
    @Param('id') tripId: string,
    @Body() body: { orderedIds: string[] },
    @CurrentUser() user: any,
  ) {
    return this.tripsService.reorder(
      tripId,
      body.orderedIds,
      user.sub, // or user.id depending on your JWT
    );
  }

  @Post(':id/duplicate')
  duplicate(
    @Param('id') tripId: string,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.duplicateTrip(tripId, user.sub);
  }

  @Post(':id/share')
  shareTrip(
    @Param('id') tripId: string,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.generateShareLink(
      tripId,
      user.sub,
    );
  }

  @Public()
  @Get('share/:token')
  getSharedTrip(
    @Param('token') token: string,
  ) {
    return this.tripsService.getSharedTrip(token);
  }

  @Put(':id')
  updateTrip(
    @Param('id') tripId: string,
    @Body() dto: UpdateTripDto,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.updateTrip(
      tripId,
      dto,
      user.sub,
    );
  }

  @Delete(':id')
  deleteTrip(
    @Param('id') tripId: string,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.deleteTrip(
      tripId,
      user.sub,
    );
  }

  @Put(':tripId/destinations/:stopId')
  updateTripDestination(
    @Param('tripId') tripId: string,
    @Param('stopId') stopId: string,
    @Body() dto: UpdateTripDestinationDto,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.updateTripDestination(
      tripId,
      stopId,
      dto,
      user.sub,
    );
  }

  @Delete(':tripId/destinations/:stopId')
  removeTripDestination(
    @Param('tripId') tripId: string,
    @Param('stopId') stopId: string,
    @CurrentUser() user: any,
  ) {
    return this.tripsService.removeTripDestination(
      tripId,
      stopId,
      user.sub,
    );
  }
}