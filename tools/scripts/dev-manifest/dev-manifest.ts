import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';

fsExtra.ensureDirSync('public');

fs.writeFileSync(
  path.resolve(process.cwd(), 'public/webpack-assets.json'),
  '{ "js": "/main.js" }',
  'utf8'
);
