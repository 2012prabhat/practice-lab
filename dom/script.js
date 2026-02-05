let norCount = 0;
let throttleCount = 0;

let normalCountElem = document.querySelector(".normalCount");
let throttleCountElem = document.querySelector(".throttleCount");

const throttledScroll = throttling(normalScroll, 1000);
function onMouseScroll() {
    throttledScroll()
//   throttleScroll();
}

let isScrolling = true;

function normalScroll() {
  norCount++;
  normalCountElem.innerHTML = norCount;
}

// function throttleScroll() {
//   if (isScrolling === true) {
//     throttleCount++;
//     throttleCountElem.innerHTML = throttleCount;
//     isScrolling = false;
//     setTimeout(() => {
//       isScrolling = true;
//     }, 1000);
//   }
// }


function debouncing(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args);
        },delay)
    }
}

function throttling(fn,delay){
    let isThrottled = false;
    return function(...args){
        if(isThrottled) return;
        fn.apply(this,args);
        isThrottled = true;
        setTimeout(()=>{
            isThrottled = false;
        },delay)
    }

}



