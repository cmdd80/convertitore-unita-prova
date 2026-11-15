import { test } from 'node:test';
import assert from 'node:assert/strict';
import { convert } from '../src/conversions.js';

test('converte pollici in millimetri', () => {
  assert.equal(convert(1, 'in', 'mm'), 25.4);
});

test('converte metri in centimetri', () => {
  assert.equal(convert(2, 'm', 'cm'), 200);
});

test('rifiuta unità sconosciute', () => {
  assert.throws(() => convert(1, 'mm', 'parsec'), /non supportata/);
});
