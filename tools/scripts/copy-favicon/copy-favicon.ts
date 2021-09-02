import fsExtra from 'fs-extra';
import path from 'path';

fsExtra.ensureDirSync('public');

fsExtra.copySync(
  path.resolve(process.cwd(), 'src/assets/favicons'),
  path.resolve(process.cwd(), 'public')
);
