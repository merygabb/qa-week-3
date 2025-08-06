//prueba de la función resta

import { test, expect } from 'vitest';
import { resta } from '../src/resta';

test('resta(5, 2) debe ser 3', () => {
  expect(resta(5, 2)).toBe(3);
});

test('resta(0, 0) debe ser 0', () => {
  expect(resta(0, 0)).toBe(0);
});
