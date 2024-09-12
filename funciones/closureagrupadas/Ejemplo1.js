function outerFunction(){
    let outerVariable = "¡Estoy adentro!"

    function innerFunction(){
        let innerVariable = "¡Estoy adentro!"
        console.log(innerFunction);
        console.log(outerFunction);
    }
    innerFunction();
}
outerFunction();