window.onload = function () { // Quand la page est chargée, on execute la fonction suivante

    var chatbot = document.getElementById('chatbot'); // On récupère l'élément HTML ayant pour id "chatbot"
    var chatbotIcon = document.getElementById('chatbot-icon'); // On récupère l'icône du chatbot
    var inputBox = document.getElementById('input-box'); // On récupère la boite d'entrée du message
    var messageContainer = document.getElementById('chat-messages'); // On récupère le conteneur des messages du chat
    var helperTextElement = document.getElementById('helper-text'); // On récupère l'élément du texte d'aide

    var isFirstClick = true; // Indicateur du premier clic, initialement fixé à vrai
    var helperMessages = ["Hey! Besoin d'aide?", "Cliquez ici pour vous aider!",
        "Je suis sur que je peux vous aider!", "Hey! je suis là pour vous!", "Je suis à votre service!"]; // Messages d'aide
    var helperText = helperMessages[Math.floor(Math.random() * helperMessages.length)]; // Choix aléatoire d'un message d'aide à afficher
    var textIndex = 0; // Index du texte, initialement fixé à zéro
    var typingSpeed = 70; // Vitesse de frappe du texte, définie en millisecondes
    var helperTextInterval; // Variable qui sera utilisée pour arrêter l'intervalle de frappe du texte d'aide

    function typeHelperText() { // Fonction qui simule la frappe du texte d'aide

        if (textIndex < helperText.length) { // Si l'index du texte est inférieur à la longueur du texte d'aide
            helperTextElement.textContent = helperText.substring(0, textIndex + 1); // On affiche le texte d'aide caractère par caractère
            textIndex++; // On incrémente l'index du texte
        } else {
            clearInterval(helperTextInterval); // On arrête l'intervalle de frappe du texte d'aide
            textIndex = 0; // On réinitialise l'index du texte

            var nextHelperText; // Variable pour stocker le prochain texte d'aide
            do {
                nextHelperText = helperMessages[Math.floor(Math.random() * helperMessages.length)]; // On choisit un autre texte d'aide au hasard
            } while (nextHelperText === helperText) // On s'assure que le nouveau texte d'aide n'est pas le même que le précédent
            helperText = nextHelperText; // On met à jour le texte d'aide

            var fadeOutDuration = helperText.length * typingSpeed; // On calcule la durée de l'animation de fade-out basée sur la longueur du texte d'aide et la vitesse de frappe

            helperTextElement.style.animation = `fadeinout ${fadeOutDuration}ms infinite`; // On applique l'animation de fade-out au texte d'aide

            setTimeout(function () { // On attend une seconde avant de recommencer à taper le texte
                helperTextInterval = setInterval(typeHelperText, typingSpeed); // On recommence à taper le texte d'aide
            }, 1000); // On attend une seconde
        }
    }

    function displayHelperText() { // Fonction pour afficher le texte d'aide
        textIndex = 0; // On réinitialise l'index du texte
        helperTextInterval = setInterval(typeHelperText, typingSpeed); // On commence à taper le texte d'aide
    }

    displayHelperText(); // On affiche le texte d'aide quand la page est chargée

    chatbotIcon.addEventListener('click', function () { // Quand on clique sur l'icône du chatbot
        helperTextElement.style.display = 'none'; // On cache le texte d'aide
        clearInterval(helperTextInterval); // On arrête de taper le texte d'aide

        chatbotIcon.classList.add('stop-bouncing'); // On arrête l'animation de rebond de l'icône du chatbot
        inputBox.disabled = false; // On active la boite d'entrée du message
        inputBox.style.display = 'block'; // On affiche la boite d'entrée du message
        chatbot.style.display = 'block'; // On affiche le chatbot

        if (isFirstClick) { // Si c'est le premier clic sur l'icône du chatbot
            isFirstClick = false; // On met à jour l'indicateur du premier clic
            displayBotMessage("Bonjour, comment puis-je vous aidez aujourd'hui?", 100); // On affiche le premier message du chatbot

        } else {
            restartChat(); // Sinon, on redémarre le chat
        }
    });

    inputBox.addEventListener('keyup', function (event) { // Quand on relâche une touche dans la boite d'entrée du message
        if (event.keyCode === 13) { // Si la touche est la touche "Entrée"
            event.preventDefault(); // On empêche l'action par défaut de la touche
            sendMessage(inputBox, inputBox.value); // On envoie le message de l'utilisateur
        }
    });

    function createNewInput(helpText) { // Fonction pour créer une nouvelle boite d'entrée du message
        var newInput = document.createElement('input'); // On crée un nouvel élément input
        newInput.type = 'text'; // On définit le type de l'input comme texte
        newInput.className = 'message-input'; // On donne une classe à l'input
        newInput.placeholder = helpText; // On définit le texte d'aide de l'input
        newInput.addEventListener('keyup', function (event) { // Quand on relâche une touche dans l'input
            if (event.keyCode === 13) { // Si la touche est la touche "Entrée"
                sendMessage(newInput, newInput.value); // On envoie le message de l'utilisateur
            }
        });
        messageContainer.appendChild(newInput); // On ajoute l'input au conteneur des messages
    }

    function displayUserMessage(messageText) { // Fonction pour afficher le message de l'utilisateur
        var userMessageContainer = document.createElement('div'); // On crée un nouvel élément div
        userMessageContainer.className = 'message user-message'; // On donne une classe à l'élément div

        var userMessageText = document.createElement('div'); // On crée un nouvel élément div pour le texte du message
        userMessageText.textContent = messageText; // On donne le texte du message à l'élément div
        userMessageText.className = 'message-text'; // On donne une classe à l'élément div du texte

        userMessageContainer.appendChild(userMessageText); // On ajoute l'élément div du texte à l'élément div du conteneur du message
        messageContainer.appendChild(userMessageContainer); // On ajoute l'élément div du conteneur du message au conteneur des messages
    }

    function displayBotMessage(messageText, typingSpeed) { // Fonction pour afficher le message du chatbot
        document.getElementById('typing-indicator').style.display = 'block'; // On affiche l'indicateur de frappe du chatbot

        var botMessageContainer = document.createElement('div'); // On crée un nouvel élément div pour le conteneur du message du chatbot
        botMessageContainer.className = 'message bot-message'; // On donne une classe à l'élément div

        var botMessageText = document.createElement('div'); // On crée un nouvel élément div pour le texte du message du chatbot
        botMessageText.className = 'message-text'; // On donne une classe à l'élément div

        botMessageContainer.appendChild(botMessageText); // On ajoute l'élément div du texte à l'élément div du conteneur du message
        messageContainer.appendChild(botMessageContainer); // On ajoute l'élément div du conteneur du message au conteneur des messages

        var typingIndex = 0; // On initialise l'index de frappe à zéro

        botTypingInterval = setInterval(function () { // On commence à taper le message du chatbot
            botMessageText.textContent = messageText.substring(0, typingIndex + 1); // On affiche le message du chatbot caractère par caractère
            typingIndex++; // On incrémente l'index de frappe

            if (typingIndex >= messageText.length) { // Si l'index de frappe est supérieur ou égal à la longueur du message
                clearInterval(botTypingInterval); // On arrête de taper le message du chatbot

                document.getElementById('typing-indicator').style.display = 'none'; // On cache l'indicateur de frappe du chatbot
                createNewInput('Ecrivez votre message...'); // On crée une nouvelle boite d'entrée du message
            }
        }, typingSpeed); // On définit la vitesse de frappe du message du chatbot
    }

    const socket = io('http://localhost:3000'); // On crée une connexion socket avec le serveur

    function sendMessage(input, messageText) { // Fonction pour envoyer le message de l'utilisateur
        messageContainer.innerHTML = ''; // On vide le conteneur des messages

        if (messageText.trim().length > 0) { // Si le message de l'utilisateur n'est pas vide
            displayUserMessage(messageText); // On affiche le message de l'utilisateur
            socket.emit('chat message', messageText); // On envoie le message de l'utilisateur au serveur
        } else {
            createNewInput('Ecrivez votre message...'); // On crée une nouvelle boite d'entrée du message
        }

        input.disabled = true; // On désactive la boite d'entrée du message après l'envoi du message
    }

    socket.on('bot reply', function (botResponse) { // Quand on reçoit une réponse du bot depuis le serveur
        displayBotMessage(botResponse, 70); // On affiche le message du bot
    });

    function restartChat() { // Fonction pour redémarrer le chat
        messageContainer.innerHTML = ''; // On vide le conteneur des messages
        displayBotMessage("Bonjour, comment puis-je vous aider aujourd'hui?", 100); // On affiche le premier message du bot
    }
};
