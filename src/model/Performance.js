class Performance {
    constructor(userId, data) {
        this.userId = userId;
        this.data = data
        this.isLoading = false;
    }
    setLoading(loading) {
        this.isLoading = loading;
    }

    getPerformanceChartData() {
        return this.data;
    }
}

class DataOfPerformance {
    constructor(value, kind){
        this.value = value;
        this.kind = kind;   }
    getValue(){
        return this.value;
    }
    getKind(){
        return this.kind
    }
}
export {Performance , DataOfPerformance}