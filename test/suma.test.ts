//prueba de la función suma

import { test, expect } from 'vitest';
import { suma } from '../src/suma';

test('suma(2, 3) debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('suma(-1, 1) debe ser 0', () => {
  expect(suma(-1, 1)).toBe(0);
});
