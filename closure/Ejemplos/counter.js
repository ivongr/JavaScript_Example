function createcounter(initialCount = 0) {
    return {
        count : initialCount,
        getCounter() {
            return this.count;
        },
        increment() {
            return  this.count += 1;
        },
        decrease() { 
            return this.count -= 1;
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
