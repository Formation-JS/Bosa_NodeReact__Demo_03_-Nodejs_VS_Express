const http = require('node:http');

// - Créer le Web server
const server = http.createServer((req, res) => {
    // req : IncomingMessage, res: ServerResponse
    console.log('Requete reçu !', req.url, req.method);

    // - Définition de la route "/demo"
    if(req.url === '/demo' && req.method === 'GET') {
        
        const result = {
            name: 'Demo Web API',
            number: 42
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    }
    // - Définition de l'erreur 404
    else {
        res.writeHead(404);
        res.end();
    }
});

// - Démarrer le serveur 
server.listen(8080, () => {
    console.log('WebAPI start on port 8080');
})