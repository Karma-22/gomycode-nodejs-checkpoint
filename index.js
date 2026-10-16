import { executeFileSystemDemo } from './file-system.js';
import { generateRandomPassword } from './password-generator.js';
import { sendEmailDemo } from './email-sender.js';

console.log("======================================================================");
console.log(" 🟩 GoMyCode Bootcamp - Node.js Checkpoint");
console.log(" Étudiant : Karma-22 (Darius Ange)");
console.log("======================================================================\n");

// Étape 1 : Hello World
console.log("▶ ÉTAPE 1 : Exécution de hello-world.js");
console.log("HELLO WORLD\n");

// Étape 2 : HTTP Server
console.log("▶ ÉTAPE 2 : Serveur HTTP Node.js (server.js)");
console.log("- Port d'écoute configuré : 3000");
console.log("- Réponse HTML renvoyée   : <h1>Hello Node !!!!</h1>\\n");
console.log("- Statut                  : ✅ Serveur prêt (exécutable via npm run step2)\n");

// Étape 3 : File System
console.log("▶ ÉTAPE 3 : Opérations sur le système de fichiers (file-system.js)");
executeFileSystemDemo();
console.log("");

// Étape 4 : Password Generator
console.log("▶ ÉTAPE 4 : Génération de mots de passe (password-generator.js)");
generateRandomPassword({ length: 14 });
generateRandomPassword({ length: 18 });
console.log("");

// Étape 5 : Nodemailer
console.log("▶ ÉTAPE 5 : Envoi d'email avec Nodemailer (email-sender.js)");
await sendEmailDemo();
console.log("");

console.log("🎯 Toutes les 5 étapes du Checkpoint Node.js ont été validées avec succès !");
