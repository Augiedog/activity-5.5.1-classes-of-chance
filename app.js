class Casino {
    constructor(name, isFakeCoin) {
        this.name = name
        this.timesPlayed = 0
        this.isFakeCoin = isFakeCoin
    }

    playGame(betAmount) {
        if (Math.random() <= .5 || this.isFakeCoin) {
            console.log(this.name + ' wins!')
        } else {
            this.timesPlayed++
            console.log(`Player Wins! ${betAmount * this.timesPlayed}`)
        }
    }

    betAmount() {
        if (this.betAmount > 0) {
            this.playGame(this.betAmount * this.timesPlayed)
        } else {
            console.log(`you've busted ${this.timesPlayed}`)
        }
    }

    rollDie(d) {
        let number = Math.floor(Math.random() *d + 1)
        console.log(`you rolled a ${number}`)
    }
};

const augieCasino = new Casino("AugiesAces", false);
console.log(augieCasino);
augieCasino.playGame(5);
augieCasino.playGame(10);
augieCasino.playGame(25);
augieCasino.rollDie(22);
augieCasino.betAmount(500);
augieCasino.betAmount(10000)

// // TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);
myCasino.rollDie(10);
myCasino.betAmount(10);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
myBonusCasino.rollDie(12);
myBonusCasino.betAmount(800);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);