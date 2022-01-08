class User {
    constructor(id, userInfos, score, keyData) {
        this.id = id;
        this.userInfos = userInfos;
        this.score = score;
        this.keyData = keyData;
        this.isLoading = false;
    }
    setLoading(loading) {
        this.isLoading = loading;
    }
    getName() {
        return this.userInfos.getName();
    }

    getScoreChartData() {
        return [{
            value: this.score
        }, {
            value: 1 - this.score
        }];
    }

    getCalorie() {
        return this.keyData.getCalorie()

    }
    getProtein() {
        return this.keyData.getProtein()

    }
    getCarbohydrate() {
        return this.keyData.getCarbohydrate()

    }
    getLipid() {
        return this.keyData.getLipid()
    }
}

class UserInfos {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName() {
        return this.firstName;
    }
}

class KeyData {
    constructor(calorieCount, proteinCount, carbohydrateCount, lipidCount) {
        this.calorieCount = calorieCount;
        this.proteinCount = proteinCount;
        this.carbohydrateCount = carbohydrateCount;
        this.lipidCount = lipidCount;
    }

    getCalorie() {
        return this.calorieCount;

    }
    getProtein() {
        return this.proteinCount;

    }
    getCarbohydrate() {
        return this.carbohydrateCount;

    }
    getLipid() {
        return this.lipidCount;
    }
}

export { User, UserInfos, KeyData };