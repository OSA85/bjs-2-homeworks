class AlarmClock {
    constructor (){
        this.alarmCollection = [],
        this.timerId = null
    }

    addClock (time, func, id){
        if ( typeof id === 'undefined'){
            throw new Error('Не задан ID')
        }
        if (this.alarmCollection.find(el => el.id === id)){
            return console.error(`Есть будильник с id = ${id}`);
        }

        this.alarmCollection.push({time, func, id})
    }

    removeClock (id){
        let startAlarmcollection = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(el => el.id != id);
        let finishAlarmcollection = this.alarmCollection.length;
        return startAlarmcollection != finishAlarmcollection;
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit"
          });
    }
    start(){ 
        if (this.timerId != null){
            return;
        }
       
        this.timerId = setInterval( () => {
                this.alarmCollection.forEach(el => checkClock(el));
            }, 3000);
            
          
        const checkClock = (clock) => {
            if (that.getCurrentFormattedTime() === clock.time) clock.func();
        }

    }

    stop(){
            clearInterval(this.timerID);
            return this.timerId = null;

    }
    printAlarms(){
        return this.alarmCollection.forEach(el => console.log(`${el.id}. ${el.time}`));
    }

    clearAlarms(){
       this.alarmCollection = [];
       this.stop();
    }
    
}
