const sqlite3 = require('sqlite3').verbose();

// Ensuite, tu ouvres la boîte magique et la connectes à une base de données spéciale appelée "AlBaraka_Chatbot.db".
let db = new sqlite3.Database('AlBaraka_Chatbot.db', (err) => {
    // Si quelque chose ne va pas (une erreur survient), la boîte magique te le dira et tu pourras le réparer.
    if (err) {
        console.error(err.message);
    }
    // Si tout se passe bien, la boîte magique te dira qu'elle est connectée à la base de données "AlBaraka_Chatbot".
    console.log('Connected to the AlBaraka_Chatbot database.');
});

// Maintenant, tu veux créer une table spéciale dans ta base de données pour y mettre des informations importantes.

// Tu donnes à la boîte magique un ordre pour créer cette table avec certaines informations spéciales comme l'id, le message, la réponse, etc.
db.run(`
    CREATE TABLE IF NOT EXISTS AlBaraka_chatbot(
        id INTEGER PRIMARY KEY,
        message TEXT,
        response TEXT,
        success INTEGER,
        language TEXT,
        documentType TEXT
    )`,
    // La boîte magique exécutera cet ordre et te dira si tout s'est bien passé ou s'il y a eu un problème.
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Table AlBaraka_chatbot has been created or already exists.');
        }
    }
);

// Maintenant, imagine que tu veux enregistrer des informations dans cette table spéciale. Tu as une formule magique (fonction) pour le faire.

// La formule magique s'appelle "save", et tu lui donneras les informations que tu veux enregistrer, comme le message, la réponse, la langue, etc.
const save = (data) => {
    // La formule magique obtient l'heure magique (la date actuelle au format spécial) et l'utilise pour enregistrer les informations dans la table.
    const datetime = new Date().toISOString();
    // La formule magique parle à la boîte magique pour insérer les informations dans la table.
    db.run(`INSERT INTO AlBaraka_chatbot(message, response, success, language, documentType) VALUES(?, ?, ?, ?, ?)`,
        // Les informations que tu veux enregistrer sont données ici à la boîte magique, comme le message, la réponse, la langue, etc.
        [data.message, data.response, data.success ? 1 : 0, data.language, data.documentType || 'Unknown'], function(err) {
            if (err) {
                // Si quelque chose ne va pas, la formule magique te dira ce qui s'est passé.
                return console.log(err.message);
            }
            // Si tout s'est bien passé, la formule magique te dira que les informations 
            // ont été enregistrées avec un numéro spécial (l'id magique) pour les retrouver plus tard.
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
};

// Enfin, tu mets la formule magique "save" dans une boîte magique spéciale (module.exports) pour pouvoir l'utiliser facilement ailleurs si tu en as besoin.
module.exports = { save };
