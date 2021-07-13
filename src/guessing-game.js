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
        this.prev = this.current;
        const middle = (this.min + (this.max - this.min) / 2);
        this.current = middle;
        return Math.ceil(this.max);
    }

    lower() {
        this.max = this.current;
    }

    greater() {
        this.min = this.current;
    }
}

module.exports = GuessingGame;
