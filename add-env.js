const { execSync } = require('child_process');

const envs = [
  ['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', 'chiken-world-db.firebaseapp.com'],
  ['NEXT_PUBLIC_FIREBASE_PROJECT_ID', 'chiken-world-db'],
  ['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET', 'chiken-world-db.firebasestorage.app'],
  ['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID', '779285554515'],
  ['NEXT_PUBLIC_FIREBASE_APP_ID', '1:779285554515:web:b6d8344d8d6104491bada6']
];

for (const [key, val] of envs) {
  try {
    console.log(`Adding ${key}...`);
    execSync(`npx vercel env add ${key} production --value "${val}" --yes`, { stdio: 'inherit', env: process.env });
  } catch (e) {
    console.error(`Failed ${key}`);
  }
}
