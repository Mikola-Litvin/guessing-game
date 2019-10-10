class GuessingGame {
    
    constructor() {

      this.arr = [];
      this.minRange = 0;
      this.maxRange;
      this.middle;
      this.result;
    }
  
    setRange(min, max) {
  
      for (let i = min; i <= max; i++) {
        this.arr.push(i);
      }
  
      this.maxRange = this.arr.length - 1;
  
    }
  
    guess() {
  
      this.middle = Math.round((this.minRange + this.maxRange) / 2);
      this.result = this.arr[this.middle];
      return this.result;
    }
  
    lower() {
  
      this.maxRange = this.middle;
    }
  
    greater() {
      this.minRange = this.middle;
    }
}

module.exports = GuessingGame;
