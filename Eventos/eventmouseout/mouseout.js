const test = document.getElementById("test");

test.addEventListener(
    "mouseleave",
    (event) => {
        event.target.style.color = "purple";

        setTimeout(()=>{
            event.target.style.color = "";
        },1000);
    },
    false,
);
//mouseout
test.addEventListener(
    "mouseout",
    (event) =>{
        event.target.style.color = "orange";

        setTimeout(()=>{
            event.target.style.color = "";
        },500);
    },
    false,
);