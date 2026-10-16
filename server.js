import http from 'node:http';

/**
 * Étape 2 : server.js
 * Création d'un serveur HTTP écoutant sur le port 3000
 * et répondant avec <h1>Hello Node !!!!</h1>\n
 */
const PORT = 3000;

export const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Hello Node !!!!</h1>\n');
});

// Lancement automatique si exécuté directement
if (process.argv[1] && process.argv[1].endsWith('server.js')) {
  server.listen(PORT, () => {
    console.log(`Serveur Node.js actif sur http://localhost:${PORT}`);
    console.log('Réponse : <h1>Hello Node !!!!</h1>\\n');
  });
}

export default server;
