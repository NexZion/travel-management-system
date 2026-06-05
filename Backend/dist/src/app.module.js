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
const jwt_config_1 = __importDefault(require("./config/jwt.config"));
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
            trips_module_1.TripsModule,
            redis_module_1.RedisModule,
            bullmq_1.BullModule.forRoot({
                connection: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT || '6379'),
                },
            }), queues_module_1.QueuesModule, destinations_module_1.DestinationsModule
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
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map