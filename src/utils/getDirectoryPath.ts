import path from 'path'

export function getDirectoryPath(paths: string[]) {
  return path.join(process.cwd(), ...paths)
}
