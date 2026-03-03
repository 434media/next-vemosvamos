import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function getServiceAccount(): ServiceAccount {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!key) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is required')
  }
  return JSON.parse(key) as ServiceAccount
}

if (getApps().length === 0) {
  initializeApp({
    credential: cert(getServiceAccount()),
  })
}

export const db = getFirestore()
