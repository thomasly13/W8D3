class Clock {
    constructor() {
        const todaysDate = new Date('May 17, 2023 23:58:55')
        let date = todaysDate.getDate();
        this.hours = todaysDate.getHours();
        this.minutes = todaysDate.getMinutes();
        this.seconds = todaysDate.getSeconds();

        setInterval(this._tick.bind(this), 1000);
        
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
      console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
    }

    _tick() {

      // setTimeOut( function() {

        this.seconds = this.seconds + 1
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes = this.minutes + 1;
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours = this.hours + 1;
            if (this.hours === 24) {
              this.hours = 0;
            }
          }
        } 
      this.printTime();
      // }, 1000)
      // 1. Increment the time by one second.
      // 2. Call printTime.

    }
}

const clock = new Clock();

