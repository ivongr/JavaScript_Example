/*console.log("Start of script");

setTimeout(function(){
    console.log("First timeout completed");
},200);

console.log("End of script");

function fetchData(callback){
    setTimeout(() => {
        const data = {name: "John", age: 30};
        callback(data);
    },3000);
}

fetchData(function(data){
console.log(data);
});

console.log("Data is being fetched...")*/

const myPromise = new Promise((resolve,reject) => {
    setTimeout(()=>{resolve("Hello from the promise!");},
2000);
});
console.log(myPromise);