import fs from 'fs'
import path from 'path'

const LOG_DIR = path.join(process.cwd(), 'logs')
const LOG_FILE = path.join(LOG_DIR, 'errors.log')

export function logError(error: unknown, context?: string) {
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true })
    }

    const timestamp = new Date().toISOString()
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error, null, 2)
    const message = `[${timestamp}] ${context ?? 'Error'}: ${errorMessage}\n\n`

    fs.appendFileSync(LOG_FILE, message, 'utf-8')
  } catch (err) {
    console.error('Failed to write to log file:', err)
  }
}
