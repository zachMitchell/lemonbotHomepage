/*This would be a JSON file, but I'm aiming to keep this as static as possible.
In the future, I'm also interested in removing this file in exchange for just showing the list of commands straight from lemonbot
The challenge to accessing commands remotely boils down to potential attacks & if we need to shard lemonbot: find a way to push a general list instead of using lemonbot.*/

var commandsList = {
    "admin":[
        ['del','Remove messages from the channel you called this command from'],
        ['move','Takes messages out of this channel and puts them in another of your choice'],
        ['mute','Mutes entire voice channels (or groups of), if you add a number it will stay muted for that number in minutes'],
        ['unmute','Un-mutes an entire channel'],
        ['voisplit','Put everyone randomly (but evenly) into different voice channels'],
        ['raid','Move an entire voice channel into another channel']
    ],
    "tools":[
        ["age", "Find out the age of two discord accounts",'tool'],
        ["dateadd", "Add numbers to find out what date it lands on"],
        ["datediff", "Use two dates to find the total of days between eachother"],
        ["math", "Do Stonks"],
        ["join", "hop into an existing activity with your friends!"],
        ["leave", "exit an activity you're in the middle of"],
        ["rnd", "Ask for a random number"],
        ["sessions", "Find out what you or others are doing"],
        ["shuf", "Randomize a list of things"],
        ["switch", "(advanced) Use this to change your focus (see /sessions for things you can switch to)"]
    ],
    "memes":[
        ["dumbot", "Ask an intelligent question"],
        ["lemon", "go meta and meme using the fruity memer himself"],
        ["mock","End all your debates instantly with the power of mocking spongebob!"],
        ["ohno", "Send a random meme! You never know what comes next with this one! (Created for Darth Plagueis!)"],
        ["rylan", "Display this man's greatness to the channel"],
        ["wisdom", "Recieve good advice from a wise man"],
        ["namejumble", "Fuse up to 4 usernames together for an abomination"]
    ],
    "games":[
        ["hangman",'Guess the word! ...or the emoji man **dies**'],
        ["tttoe",'A casual game of tic-tac-toe, but with discord friends!'],
        ["mmind",'Mastermind: A game of logic to crack the code of your opponent!']
    ],
    "text":[
        ["back", "!naidrocsid gnuoy eikooc trams a er'uoy yeh ho"],
        ["creepy", "tYpE lIkE a CrEePy PeRsOn"],
        ["e", "b[e] r[e]sponsibl[e] with this on[e]"],
        ["gamerfy", "Mak3 y0ur 73x7 gam3r 57yl3."],
    ],
    "eliza":[
        ['eliza','A therapist from 1966 who will help with all of your problems! [Disclaimer... probably not]']
    ]
}
