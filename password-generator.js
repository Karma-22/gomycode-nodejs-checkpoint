import generator from 'generate-password';

/**
 * Étape 4 : password-generator.js
 * Fonction qui génère des mots de passe aléatoires et les affiche dans la console.
 */
export function generateRandomPassword(options = {}) {
  const defaultOptions = {
    length: 14,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
    ...options
  };

  const password = generator.generate(defaultOptions);
  console.log(`🔐 Mot de passe généré : ${password}`);
  return password;
}

if (process.argv[1] && process.argv[1].endsWith('password-generator.js')) {
  console.log("--- Génération de mots de passe sécurisés ---");
  generateRandomPassword({ length: 12 });
  generateRandomPassword({ length: 16 });
  generateRandomPassword({ length: 20 });
}
