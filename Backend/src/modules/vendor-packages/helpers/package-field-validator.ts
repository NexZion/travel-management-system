import { BadRequestException } from '@nestjs/common';

export function validatePackageFields(
  schemaFields: any[],
  submittedFields: any[],
) {
  const submittedMap = new Map();
  const validFieldIds = new Set();

  // Build set of valid field IDs from schema
  for (const schemaField of schemaFields) {
    const fieldId = schemaField.field.id;
    validFieldIds.add(fieldId);
  }

  for (const field of submittedFields) {
    submittedMap.set(field.fieldId, field.value);

    // Validate that submitted fieldId is in the schema
    if (!validFieldIds.has(field.fieldId)) {
      throw new BadRequestException(
        `Field ID ${field.fieldId} is not valid for this package type`,
      );
    }
  }

  for (const schemaField of schemaFields) {
    const fieldId = schemaField.field.id;

    const value = submittedMap.get(fieldId);

    // Required validation

    if (
      schemaField.isRequired &&
      (value === undefined || value === null || value === '')
    ) {
      throw new BadRequestException(`${schemaField.field.label} is required`);
    }

    if (value !== undefined) {
      validateDataType(
        schemaField.field.dataType,
        value,
        schemaField.field.label,
      );
    }
  }

  function validateDataType(type: string, value: string, label: string) {
    switch (type) {
      case 'NUMBER':
        if (isNaN(Number(value))) {
          throw new BadRequestException(`${label} must be a number`);
        }

        break;

      case 'BOOLEAN':
        if (value !== 'true' && value !== 'false') {
          throw new BadRequestException(`${label} must be true or false`);
        }

        break;

      case 'SELECT':
        if (!value) {
          throw new BadRequestException(`${label} is invalid`);
        }

        break;

      default:
        break;
    }
  }
}
