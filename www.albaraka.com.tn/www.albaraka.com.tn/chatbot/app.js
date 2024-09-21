// Importer les bibliothèques nécessaires
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { NlpManager } = require('node-nlp');
const db = require('./db.js');


// Importer les documents et les réponses pour le chatbot en français
const FRmoodDocuments = require('./documents/mood');
const FRmoodAnswers = require('./answers/mood');

const FRcreationCompteChequeDocuments = require('./documents/creationCompteCheque');
const FRcreationCompteChequeAnswers = require ('./answers/creationCompte.js')

const FRsalutationDocuments = require('./documents/salutation');
const FRsalutationAnswers = require('./answers/salutation');

const FRwhomiDocuments = require('./documents/whomi');
const FRwhomiAnswers = require('./answers/whomi');

const FRgoodbyeDocuments = require('./documents/goodbye.js');
const FRgoodbyeAnswers = require('./answers/goodbye.js');

// Créer le gestionnaire du chatbot avec les langues 'fr', 'ar', et 'en'
const manager = new NlpManager({ languages: ['fr'] });

// Créer l'application express, le serveur HTTP, et le socketIo
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Définir le dossier des fichiers statiques pour le site web
app.use(express.static('C:/Users/abdel/Desktop/Brahim/Projects/AlBaraka Chatbot/AlBaraka_Chatbot_2023-main/www.albaraka.com.tn/www.albaraka.com.tn'));

// Ajouter les documents et les réponses pour le chatbot en français
FRmoodDocuments.forEach((document) => {
    manager.addDocument('fr', document.input, 'mood');
});

FRmoodAnswers.forEach((answer) => {
    manager.addAnswer('fr', 'mood', answer);
});

FRgoodbyeDocuments.forEach((document) => {
    manager.addDocument('fr', document.input, 'goodbye');
});

FRgoodbyeAnswers.forEach((answer) => {
    manager.addAnswer('fr', 'goodbye', answer);
});

FRcreationCompteChequeDocuments.forEach((document)=> {
    manager.addDocument('fr',document.input,'creationCompteCheque');
})

FRcreationCompteChequeAnswers.forEach((answer)=>{
    manager.addAnswer('fr','creationCompteCheque', answer);
})

FRsalutationDocuments.forEach((document) => {
    manager.addDocument('fr', document.input, 'salutation');
});

FRsalutationAnswers.forEach((answer) => {
    manager.addAnswer('fr', 'salutation', answer);
});

FRwhomiDocuments.forEach((document) => {
    manager.addDocument('fr', document.input, 'whomi');
});

FRwhomiAnswers.forEach((answer) => {
    manager.addAnswer('fr', 'whomi', answer);
});

// Entraîner le chatbot et enregistrer le modèle
manager.train().then(() => {
    manager.save();

    // Lorsqu'une connexion au socket est établie
    io.on('connection', (socket) => {
        // Lorsque le chatbot reçoit un message
        socket.on('chat message', async (msg) => {
            let success = true;

            // Faire traiter le message par le chatbot
            let response = await manager.process('fr', msg);
            if (!response.answer) {
                success = false;
                response.answer = 'Désolé, je n\'ai pas bien compris. Pouvez-vous reformuler votre phrase?';
            }

            // Envoyer la réponse du chatbot à l'utilisateur
            socket.emit('bot reply', response.answer);

            // Sauvegarder le message, la réponse et l'indicateur de succès
            db.save({
                message: msg,
                response: response.answer,
                success: success,
                language: 'fr',
                documentType: response.intent
            });
        });
    });

    // Démarrer le serveur sur le port 3000
    server.listen(3000, () => {
        const serverUrl = 'http://localhost:3000/';
        console.log(`Le serveur est en cours d'exécution sur le port 3000. Voici le lien : ${serverUrl}`);
    });
});