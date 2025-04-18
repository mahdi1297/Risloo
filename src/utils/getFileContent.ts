import fs from 'fs/promises';
import { getDirectoryPath } from './getDirectoryPath';

export async function getFileContent(filePaths: string[]) {
    const jsonPath = getDirectoryPath(filePaths);
    const fileContents = await fs.readFile(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);

    return data
}