"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const trips_module_1 = require("./modules/trips/trips.module");
const config_1 = require("@nestjs/config");
const redis_module_1 = require("./redis/redis.module");
const bullmq_1 = require("@nestjs/bullmq");
const queues_module_1 = require("./queues/queues.module");
const env_validation_1 = require("./config/env.validation");
const prisma_module_1 = require("./database/prisma/prisma.module");
const constants_1 = require("@nestjs/core/constants");
const jwt_auth_guard_1 = require("./modules/auth/guards/jwt-auth.guard");
const roles_guard_1 = require("./modules/auth/guards/roles.guard");
const throttler_1 = require("@nestjs/throttler");
const destinations_service_1 = require("./modules/destinations/destinations.service");
const destinations_controller_1 = require("./modules/destinations/destinations.controller");
const destinations_module_1 = require("./modules/destinations/destinations.module");
const travel_styles_module_1 = require("./modules/travel-styles/travel-styles.module");
const vibes_service_1 = require("./modules/vibes/vibes.service");
const vibes_module_1 = require("./modules/vibes/vibes.module");
const destination_categories_module_1 = require("./modules/destination-categories/destination-categories.module");
const jwt_config_1 = __importDefault(require("./config/jwt.config"));
const places_module_1 = require("./modules/places/places.module");
const vendor_categories_module_1 = require("./modules/vendor-categories/vendor-categories.module");
const field_sets_module_1 = require("./modules/field-sets/field-sets.module");
const fields_module_1 = require("./modules/fields/fields.module");
const vendors_module_1 = require("./modules/vendors/vendors.module");
const package_types_module_1 = require("./modules/package-types/package-types.module");
const vendor_packages_module_1 = require("./modules/vendor-packages/vendor-packages.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: env_validation_1.envValidationSchema,
                load: [jwt_config_1.default],
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 10,
                },
            ]),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            places_module_1.PlacesModule,
            trips_module_1.TripsModule,
            redis_module_1.RedisModule,
            bullmq_1.BullModule.forRoot({
                connection: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT || '6379'),
                },
            }), queues_module_1.QueuesModule, destinations_module_1.DestinationsModule, travel_styles_module_1.TravelStylesModule, vibes_module_1.VibesModule, destination_categories_module_1.DestinationCategoriesModule, vendor_categories_module_1.VendorCategoriesModule, field_sets_module_1.FieldSetsModule, fields_module_1.FieldsModule, vendors_module_1.VendorsModule, package_types_module_1.PackageTypesModule, vendor_packages_module_1.VendorPackagesModule
        ],
        controllers: [app_controller_1.AppController, destinations_controller_1.DestinationsController],
        providers: [app_service_1.AppService, roles_guard_1.RolesGuard, {
                provide: constants_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: constants_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            destinations_service_1.DestinationsService,
            vibes_service_1.VibesService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map