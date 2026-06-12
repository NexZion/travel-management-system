"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTravelStyleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_travel_style_dto_1 = require("./create-travel-style.dto");
class UpdateTravelStyleDto extends (0, mapped_types_1.PartialType)(create_travel_style_dto_1.CreateTravelStyleDto) {
}
exports.UpdateTravelStyleDto = UpdateTravelStyleDto;
//# sourceMappingURL=update-travel-style.dto.js.map