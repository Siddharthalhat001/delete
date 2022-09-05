import {
  expect, test, describe,
} from '@jest/globals';
import { getDateInMediumFormat } from '../../utils/methods';

describe('UtilMethods', () => {
  test('Should return date in medium format', () => {
    expect.assertions(1);

    const comparatorDate = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const date = getDateInMediumFormat(new Date());

    expect(date).toEqual(comparatorDate);
  });
});
