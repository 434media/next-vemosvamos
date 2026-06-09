import { initializeApp, getApps, getApp, cert, type ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const DATABASE_ID = 'vemosvamos'

/**
 * Parse the service-account credentials from GOOGLE_SERVICE_ACCOUNT_KEY.
 *
 * Accepts any of three common forms:
 *   1. Properly-escaped JSON (the private_key contains literal "\n" backslash-n sequences).
 *   2. Raw JSON with actual line breaks inside the private_key string
 *      (what you get when pasting the file contents straight into .env).
 *   3. Base64-encoded JSON (most reliable for env hosts that can't preserve newlines).
 */
function getServiceAccount(): ServiceAccount {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!raw) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is required')
  }

  const candidate = raw.trim()

  // Form 3 — base64. Decode first if it doesn't look like JSON.
  let json: string
  if (candidate.startsWith('{')) {
    json = candidate
  } else {
    try {
      json = Buffer.from(candidate, 'base64').toString('utf-8').trim()
    } catch {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY is neither valid JSON nor base64-encoded JSON.')
    }
    if (!json.startsWith('{')) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY decoded from base64 is not valid JSON.')
    }
  }

  // Form 1 — try a direct parse first.
  let parsed: ServiceAccount & { private_key?: string }
  try {
    parsed = JSON.parse(json)
  } catch (firstErr) {
    // Form 2 — the failure is almost always unescaped line breaks inside private_key.
    // Find the private_key value and escape its line breaks / tabs before parsing again.
    const fixed = json.replace(
      /("private_key"\s*:\s*")([\s\S]*?)(")/,
      (_match, prefix, value, suffix) => {
        const escaped = value
          .replace(/\r\n/g, '\\n')
          .replace(/\n/g, '\\n')
          .replace(/\r/g, '\\n')
          .replace(/\t/g, '\\t')
        return prefix + escaped + suffix
      }
    )
    try {
      parsed = JSON.parse(fixed)
    } catch (secondErr) {
      const msg = secondErr instanceof Error ? secondErr.message : String(secondErr)
      throw new Error(
        `GOOGLE_SERVICE_ACCOUNT_KEY could not be parsed as JSON: ${msg}. ` +
          'Either base64-encode the service-account JSON, or escape line breaks in private_key as \\n.'
      )
    }
  }

  // Whether we got it via Form 1, 2, or 3, restore real newlines in private_key.
  if (parsed.private_key && parsed.private_key.includes('\\n')) {
    parsed.private_key = parsed.private_key.replace(/\\n/g, '\n')
  }

  return parsed as ServiceAccount
}

const app =
  getApps().length === 0
    ? initializeApp({ credential: cert(getServiceAccount()) })
    : getApp()

export const db = getFirestore(app, DATABASE_ID)
