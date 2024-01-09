const express = require('express');

// - Créer le Web server
const app = express();

// - Exemple de middleware
app.use((req, res, next) => {
    console.log('Oh une requete :o');
    next();
    console.log('Fin du cours \\o/');
})

// - Définition de la route "/demo"
app.get('/demo', (req, res) => {
    console.log('Traitement...');

    const result = {
        name: 'Demo Web API',
        number: 42
    };

    res.status(200).json(result);
});

// - Démarrer le serveur 
app.listen(8088, () => {
    console.log('WebAPI start on port 8088');
})