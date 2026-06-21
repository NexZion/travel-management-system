"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePackageFields = validatePackageFields;
const common_1 = require("@nestjs/common");
function validatePackageFields(schemaFields, submittedFields) {
    const submittedMap = new Map();
    const validFieldIds = new Set();
    for (const schemaField of schemaFields) {
        const fieldId = schemaField.field.id;
        validFieldIds.add(fieldId);
    }
    for (const field of submittedFields) {
        submittedMap.set(field.fieldId, field.value);
        if (!validFieldIds.has(field.fieldId)) {
            throw new common_1.BadRequestException(`Field ID ${field.fieldId} is not valid for this package type`);
        }
    }
    for (const schemaField of schemaFields) {
        const fieldId = schemaField.field.id;
        const value = submittedMap.get(fieldId);
        if (schemaField.isRequired &&
            (value === undefined || value === null || value === '')) {
            throw new common_1.BadRequestException(`${schemaField.field.label} is required`);
        }
        if (value !== undefined) {
            validateDataType(schemaField.field.dataType, value, schemaField.field.label);
        }
    }
    function validateDataType(type, value, label) {
        switch (type) {
            case 'NUMBER':
                if (isNaN(Number(value))) {
                    throw new common_1.BadRequestException(`${label} must be a number`);
                }
                break;
            case 'BOOLEAN':
                if (value !== 'true' && value !== 'false') {
                    throw new common_1.BadRequestException(`${label} must be true or false`);
                }
                break;
            case 'SELECT':
                if (!value) {
                    throw new common_1.BadRequestException(`${label} is invalid`);
                }
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=package-field-validator.js.map