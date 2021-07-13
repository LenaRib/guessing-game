class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.prev = 0;
        this.current = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        const middle = Math.floor((this.min + (this.max - this.min) / 2));
        return this.max;
    }

    lower() {
        return this.max;
    }

    greater() {
        return this.max;
    }
}

module.exports = GuessingGame;
