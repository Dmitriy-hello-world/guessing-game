class GuessingGame {
    constructor() {
        this.first = 0;
        this.last = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        this.first = min;
        this.last = max;
    }

    guess() {
        this.middle = Math.round((this.first + this.last)/2);
        return this.middle;
    }

    lower() {
        this.last = this.middle;
    }

    greater() {
        this.first = this.middle;
    }
}

module.exports = GuessingGame;