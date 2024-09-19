function createcounter(initialCount = 0) {
    let count = initialCount;

    return {
        getCounter: function () {
            return count;
        },
        increment: function () {
            count += 1;
            return count;
        },
        decrease: function () {
            count -= 1;
            return count;
        },
    };

}

const num = createcounter();
console.log(num.getCounter());
num.decrease();
console.log(num.getCounter());
num.increment();
console.log(num.getCounter());
num.increment();
console.log(num.getCounter());
num.decrease();
console.log(num.getCounter());
