const test = require('node:test');
const assert = require('node:assert/strict');

const { createApp } = require('../index');

test('GET / returns healthy status', async () => {
  const app = createApp();

  await new Promise((resolve) => {
    app.listen(0, resolve);
  });

  const { port } = app.address();
  const response = await fetch(`http://127.0.0.1:${port}/`);
  const payload = await response.json();

  assert.equal(response.status, 200);
  assert.equal(payload.status, 'Secure Node Service Running');

  await new Promise((resolve, reject) => {
    app.close((err) => (err ? reject(err) : resolve()));
  });
});
