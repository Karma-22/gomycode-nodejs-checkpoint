import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Étape 3 : file-system.js
 * 1. Créer un fichier nommé 'welcome.txt' contenant la ligne "Hello Node".
 * 2. Lire le fichier et afficher son contenu dans la console.
 */
export function executeFileSystemDemo() {
  const welcomePath = path.join(__dirname, 'welcome.txt');
  const helloPath = path.join(__dirname, 'hello.txt');

  // 1. Écriture synchrone dans welcome.txt
  fs.writeFileSync(welcomePath, 'Hello Node', 'utf-8');
  console.log("✅ Fichier 'welcome.txt' créé avec le contenu : 'Hello Node'");

  // 2. Lecture synchrone de welcome.txt
  const welcomeData = fs.readFileSync(welcomePath, 'utf-8');
  console.log(`📖 Données lues depuis 'welcome.txt' : "${welcomeData}"`);

  // Bonus pédagogique : Création et lecture de hello.txt
  fs.writeFileSync(helloPath, 'Bienvenue dans le Checkpoint Node.js GoMyCode !', 'utf-8');
  const helloData = fs.readFileSync(helloPath, 'utf-8');
  console.log(`📖 Données lues depuis 'hello.txt' : "${helloData}"`);

  return { welcomeData, helloData };
}

if (process.argv[1] && process.argv[1].endsWith('file-system.js')) {
  executeFileSystemDemo();
}
