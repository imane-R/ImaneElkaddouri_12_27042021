
const DAYS_NAME = ['L', 'M', 'M', 'J', 'v', 'S', 'D'];

class AverageSessions {
    constructor( userId, sessions){
        this.userId = userId;
        this.sessions = sessions;
        this.isLoading = false;
    }
    setLoading(loading) {
        this.isLoading = loading;
    }
    getAverageSessionChartData() {
        return this.sessions;
    }
}

class SessionOfAverage{
    
    constructor(day, sessionLength){
        this.day = DAYS_NAME[day - 1];
        this.sessionLength = sessionLength;
    }
    getDay(){
        return this.day;
    }
    getSessionLength(){
        return this.sessionLength
    }
}

export { AverageSessions, SessionOfAverage };