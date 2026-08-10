import { BadRequestException } from '@nestjs/common';
import {
  PackageSchemaField,
  SubmittedPackageField,
} from '../interfaces/package-field.interface';

export function validatePackageFields(
  schemaFields: PackageSchemaField[],

  submittedFields: SubmittedPackageField[],
) {
  if (!submittedFields || submittedFields.length === 0) {
    throw new BadRequestException('Package fields are required');
  }

  const submittedMap = new Map<string, string>();

  const validFieldIds = new Set<string>();

  const submittedIds = new Set<string>();

  // Build valid schema fields

  for (const schemaField of schemaFields) {
    validFieldIds.add(schemaField.packageField.id);
  }

  // Validate submitted fields

  for (const field of submittedFields) {
    // Duplicate check

    if (submittedIds.has(field.fieldId)) {
      throw new BadRequestException(`Duplicate field ${field.fieldId}`);
    }

    submittedIds.add(field.fieldId);

    // Unknown field check

    if (!validFieldIds.has(field.fieldId)) {
      throw new BadRequestException(
        `Field ID ${field.fieldId} is not valid for this package type`,
      );
    }

    submittedMap.set(field.fieldId, field.value);
  }

  // Required + datatype validation

  for (const schemaField of schemaFields) {
    const packageField = schemaField.packageField;

    const value = submittedMap.get(packageField.id);

    if (schemaField.isRequired && (!value || value.trim() === '')) {
      throw new BadRequestException(`${packageField.label} is required`);
    }

    if (value !== undefined) {
      validateDataType(
        packageField.dataType,

        value,

        packageField.label,
      );
    }
  }
}

function validateDataType(
  type: string,

  value: string,

  label: string,
) {
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
      if (!value.trim()) {
        throw new BadRequestException(`${label} is invalid`);
      }

      break;

    default:
      break;
  }
}
