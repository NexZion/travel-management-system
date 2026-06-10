"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVibeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vibe_dto_1 = require("./create-vibe.dto");
class UpdateVibeDto extends (0, mapped_types_1.PartialType)(create_vibe_dto_1.CreateVibeDto) {
}
exports.UpdateVibeDto = UpdateVibeDto;
//# sourceMappingURL=update-vibe.dto.js.map