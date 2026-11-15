import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { app } from '../src/app.js';

let server;
let baseUrl;

before(() => {
  server = app.listen(0);
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => {
  server.close();
});

test('GET /health risponde ok', async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { status: 'ok' });
});

test('GET /convert restituisce il valore convertito', async () => {
  const res = await fetch(`${baseUrl}/convert?value=1&from=in&to=mm`);
  assert.equal(res.status, 200);
  assert.equal(await res.json(), 25.4);
});

test('GET /convert rifiuta un valore non numerico', async () => {
  const res = await fetch(`${baseUrl}/convert?value=abc&from=in&to=mm`);
  assert.equal(res.status, 400);
});