"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePackageFields = validatePackageFields;
const common_1 = require("@nestjs/common");
function validatePackageFields(schemaFields, submittedFields) {
    if (!submittedFields || submittedFields.length === 0) {
        throw new common_1.BadRequestException('Package fields are required');
    }
    const submittedMap = new Map();
    const validFieldIds = new Set();
    const submittedIds = new Set();
    for (const schemaField of schemaFields) {
        validFieldIds.add(schemaField.packageField.id);
    }
    for (const field of submittedFields) {
        if (submittedIds.has(field.fieldId)) {
            throw new common_1.BadRequestException(`Duplicate field ${field.fieldId}`);
        }
        submittedIds.add(field.fieldId);
        if (!validFieldIds.has(field.fieldId)) {
            throw new common_1.BadRequestException(`Field ID ${field.fieldId} is not valid for this package type`);
        }
        submittedMap.set(field.fieldId, field.value);
    }
    for (const schemaField of schemaFields) {
        const packageField = schemaField.packageField;
        const value = submittedMap.get(packageField.id);
        if (schemaField.isRequired && (!value || value.trim() === '')) {
            throw new common_1.BadRequestException(`${packageField.label} is required`);
        }
        if (value !== undefined) {
            validateDataType(packageField.dataType, value, packageField.label);
        }
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
            if (!value.trim()) {
                throw new common_1.BadRequestException(`${label} is invalid`);
            }
            break;
        default:
            break;
    }
}
//# sourceMappingURL=package-field-validator.js.map