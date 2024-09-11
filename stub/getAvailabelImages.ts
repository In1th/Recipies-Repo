import * as fs from 'fs';
import * as path from 'path';

const imagesDirectory = './../resources/images';

export function getAvailableImages(): string[] {
    const files = fs.readdirSync(imagesDirectory);
    const jpgFiles = files.filter(file => path.extname(file).toLowerCase() === '.jpg');
    return jpgFiles;
}