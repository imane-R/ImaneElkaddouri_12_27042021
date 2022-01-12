class Activity {
    constructor(userId, sessions){
        this.userId = userId;
        this.sessions = sessions;
        this.isLoading = false;
    }
    setLoading(loading) {
        this.isLoading = loading;
    }

    getSessionChartData() {
        return this.sessions.map((session, index) => {
            session.setIndex(index + 1);
            return session;
        })
    }
}
class Session {
    constructor(day, kilogram, calories){
        this.day = day;
        this.kilogram = kilogram;
        this.calories = calories;
        this.index = null;
    }
    getDay(){
        return this.day;
    }
    getKilogram(){
        return this.kilogram;
    }
    getCalories(){
        return this.calories;
    }

    setIndex(index) {
        this.index = index;
    }
}

export { Activity, Session };