import { sum } from '../src/index';

describe('sum function', () => {
    test('must return three the sum function', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
