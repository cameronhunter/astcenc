#!/usr/bin/env node

const astcenc = require('./lib');
const childProcess = require('child_process');

try {
  const result = childProcess.spawnSync(astcenc.executable(), process.argv.slice(2), { stdio: 'inherit' });
  if (result.status !== null) {
    process.exit(result.status);
  }
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
