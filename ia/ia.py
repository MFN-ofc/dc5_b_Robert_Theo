import nltk
from nltk.chat.util import Chat, reflections

pairs = [
    [
        r"bonjour",
        ["Bonjour, comment ça va ?"]
    ],
    [
        r"mon nom est (.*)",
        ["Bonjour %1, comment ça va ?"]
    ],
    [
        r"comment vas-tu ?",
        ["Je vais bien, merci. Et toi ?"]
    ],
    [
        r"désolé (.*)",
        ["Il n'y a pas de quoi, c'est normal."]
    ],
    [
        r"je suis (.*) (.*)",
        ["Bonjour %1 %2, comment ça va ?"]
    ],
    [
        r"tu es (.*)",
        ["Je suis une IA, je n'ai pas d'état physique"]
    ],
    [
        r"je (.*)",
        ["Pourquoi dis-tu que tu %1 ?", "Tu penses vraiment que tu %1 ?"]
    ],
    [
        r"j'(.*)",
        ["Pourquoi dis-tu que tu %1 ?", "Tu penses vraiment que tu %1 ?"]
    ],
    [
        r"je suis (.*)",
        ["Pourquoi dis-tu que tu es %1 ?", "Tu penses vraiment que tu es %1 ?"]
    ],
    [
        r"j'ai (.*)",
        ["Qu'est-ce qui te fait croire que tu as %1 ?", "Comment as-tu obtenu %1 ?"]
    ],
    [
        r"j'ai besoin de (.*)",
        ["Pourquoi as-tu besoin de %1 ?", "Qu'est-ce que %1 va t'apporter ?"]
    ],
    [
        r"(.*) mère(.*)",
        ["Parlez-moi de votre mère", "Comment est votre mère ?"]
    ],
    [
        r"(.*) père(.*)",
        ["Parlez-moi de votre père", "Comment est votre père ?"]
    ],
    [
        r"tu es (.*)",
        ["Je suis une IA, je n'ai pas d'état physique."]
    ],
    [
        r"je suis perdu(.*)",
        ["Je suis là pour t'aider, comment puis-je t'aider ?"]
    ],
    [
        r"quit",
        ["Au revoir, bonne journée!"]
    ]
]

chatbot = Chat(pairs, reflections)
while True:
    user_input = input("Vous : ")
    if user_input.lower() == "quit":
        print("Au revoir, bonne journée!")
        break
    else:
        response = chatbot.respond(user_input)
        if response:
            print("AI : ", response)
        else:
            print("AI : Désolé, je ne comprends pas.")
