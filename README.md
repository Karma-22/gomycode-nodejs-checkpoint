# 🟩 Node.js Checkpoint - Fondations du Backend (GoMyCode)

[![Node.js](https://img.shields.io/badge/Node.js-v24-339933?logo=nodedotjs&logoColor=white)]()
[![HTTP Server](https://img.shields.io/badge/HTTP_Server-Port_3000-blue)]()
[![Nodemailer](https://img.shields.io/badge/Nodemailer-SMTP-blueviolet)]()
[![Tests](https://img.shields.io/badge/Tests-4%2F4%20Passing-22c55e.svg)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Projet réalisé dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint met en pratique les modules natifs et tiers fondamentaux de l'écosystème Node.js : affichage console, création de serveur HTTP natif, manipulation du système de fichiers (`fs`), génération de mots de passe aléatoires et envoi de courriels avec `nodemailer`.

---

## 📋 Table des Matières

- [Objectifs du Checkpoint](#-objectifs-du-checkpoint)
- [Cahier des Charges & Validation](#-cahier-des-charges--validation)
- [Détail des 5 Étapes](#-détail-des-5-étapes)
- [Installation & Exécution](#-installation--exécution)
- [Auteur](#-auteur)

---

## 🎯 Objectifs du Checkpoint

1. **Étape 1 : `hello-world.js`**
   - Créer un script qui affiche `"HELLO WORLD"` dans le terminal.
2. **Étape 2 : `server.js`**
   - Créer un serveur avec le module natif `http` écoutant sur le port 3000.
   - Retourner la réponse HTML `<h1>Hello Node !!!!</h1>\n`.
3. **Étape 3 : `file-system.js`**
   - Utiliser le module `fs` pour créer `welcome.txt` avec le texte `"Hello Node"`.
   - Lire le fichier et afficher les données dans la console.
4. **Étape 4 : `password-generator.js`**
   - Utiliser le package npm `generate-password`.
   - Définir une fonction qui génère et affiche des mots de passe sécurisés.
5. **Étape 5 : `email-sender.js`**
   - Utiliser `nodemailer` pour configurer un transporteur et envoyer un email.

---

## ✅ Cahier des Charges & Validation

| Étape GoMyCode | Fichier | Description | Statut |
| :--- | :--- | :--- | :---: |
| **Étape 1** | `hello-world.js` | Console log `"HELLO WORLD"` | ✅ Conforme |
| **Étape 2** | `server.js` | Serveur HTTP port 3000 + HTML | ✅ Conforme |
| **Étape 3** | `file-system.js` | Création et lecture de `welcome.txt` | ✅ Conforme |
| **Étape 4** | `password-generator.js` | Générateur aléatoire configurable | ✅ Conforme |
| **Étape 5** | `email-sender.js` | Envoi d'email avec Nodemailer | ✅ Conforme |
| **Tests Unitaires** | `tests/nodejs.test.js` | 4 tests validés avec `node --test` | ✅ Conforme |

---

## 📂 Structure du Projet

```text
15-nodejs-checkpoint/
├── package.json
├── README.md
├── hello-world.js
├── server.js
├── file-system.js
├── password-generator.js
├── email-sender.js
├── index.js
└── tests/
    └── nodejs.test.js
```

---

## 🚀 Installation & Exécution

```bash
# 1. Cloner le dépôt
git clone https://github.com/Karma-22/gomycode-nodejs-checkpoint.git
cd gomycode-nodejs-checkpoint

# 2. Installer les packages
npm install

# 3. Lancer l'orchestrateur complet (toutes les étapes)
npm start

# 4. Ou exécuter chaque étape individuellement :
npm run step1   # Hello World
npm run step2   # Serveur HTTP
npm run step3   # Système de fichiers
npm run step4   # Générateur de mot de passe
npm run step5   # Envoi d'email

# 5. Lancer la suite de tests
npm test
```

---

## 👨‍💻 Auteur

- **Darius Ange (Karma-22)**  
- Profil GitHub : [https://github.com/Karma-22](https://github.com/Karma-22)  
- GoMyCode Full Stack Software Developer Bootcamp
