import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { server } from '../server.js';
import { executeFileSystemDemo } from '../file-system.js';
import { generateRandomPassword } from '../password-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Node.js Checkpoint Full Validation Suite', async (t) => {
  await t.test('1. hello-world.js should exist and contain HELLO WORLD', () => {
    const hwPath = path.join(__dirname, '../hello-world.js');
    assert.ok(fs.existsSync(hwPath));
    const content = fs.readFileSync(hwPath, 'utf-8');
    assert.ok(content.includes('HELLO WORLD'));
  });

  await t.test('2. server.js should be an instance of http.Server', () => {
    assert.ok(server);
    assert.strictEqual(typeof server.listen, 'function');
  });

  await t.test('3. file-system.js should create and read welcome.txt with "Hello Node"', () => {
    const res = executeFileSystemDemo();
    assert.strictEqual(res.welcomeData, 'Hello Node');
  });

  await t.test('4. password-generator.js should generate passwords of requested length', () => {
    const pwd12 = generateRandomPassword({ length: 12 });
    assert.strictEqual(pwd12.length, 12);
    const pwd24 = generateRandomPassword({ length: 24 });
    assert.strictEqual(pwd24.length, 24);
  });
});
