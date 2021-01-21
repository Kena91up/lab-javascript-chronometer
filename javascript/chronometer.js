class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID =  setInterval(()=> {
      this.currentTime += 1;
      callback()
   },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime /60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(num) {
    return String(num).padStart(2, '0')
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
   this.currentTime = 0;
  }
  splitClick() {
     return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
