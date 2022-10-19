 var buttonMin = document.getElementById('minus-break');
    var countBreak = document.getElementById('minutes-place-break');
    var buttonPlus = document.getElementById('plus-break');

    var numBreak = 0;
    var secBreak = 00;
    function maxBreak() {

        if (numBreak >= 0) {
            numBreak += 1;
            countBreak.innerHTML = numBreak;
            min.innerHTML = numBreak
        } else {
            numBreak = numBreak;
            min.innerHTML = numBreak;
        }

    };
    buttonPlus.addEventListener('click', maxBreak);

    function minBreak() {

        if (numBreak > 0) {
            numBreak -= 1;
            countBreak.innerHTML = numBreak;
            min.innerHTML = numBreak;
        } else {
            numBreak = numBreak;
            min.innerHTML = numBreak;
        }

    };
    buttonMin.addEventListener('click', minBreak);

    var buttonMinWork = document.getElementById('minus-work');
    var countWork = document.getElementById('number-place-work');
    var buttonPlusWork = document.getElementById('plus-work');

    var numWork = 0;
     function maxWork() {

        if (numWork >= 0) {
            numWork += 1;
            countWork.innerHTML = numWork;
            min.innerHTML = numWork;
        } else {
            numWork = numWork;
            min.innerHTML = numWork;
        }

    };
    buttonPlusWork.addEventListener('click', maxWork);

    function minWork() {

        if (numWork > 0) {
            numWork -= 1;
            countWork.innerHTML = numWork;
            min.innerHTML = numWork;
        } else {
            numWork = numWork;
            min.innerHTML = numWork;
        }

    };

    buttonMinWork.addEventListener('click', minWork);


   
    var min = document.getElementById('minutes');
    var sec = document.getElementById('seconds');
    var clock = document.getElementsByClassName('rounded-circle');
  
    var seconds = 59;
    sec.innerText = seconds;
    let test;
    clock[0].addEventListener('click', () => {
test = setInterval( function(){
    sec.innerText = seconds--;}, 1000)
})


// var min = 0;
// var sec = 0;
// function setTime (){
//     if(countBreak != 0 && countWork == 0){
//         min.innerText = countBreak;
//     } else if(countBreak == 0 && countWork != 0){
//         min.innerText = countWork;
//     }
//    };
//    buttonMin.addEventListener('click', setTime);
   


   
//    var startTimer;

// clock[0].addEventListener('click', function(){
//     if(startTimer === undefined){
//         startTimer = setInterval(timer, 1000)
//     } else {
//         alert('Timer is already running');
//     }
// });

// function timer(){
//     // var sec = 0;
//     if(sec.innerText != 0){
//         sec.innerText --;
//     }else if(min.innerText != 0 && sec.innerText == 0){
//         sec.innerText = 59;
//         min.innerText --;
//     };
//     if(min.innerText == 0 && sec.innerText == 0){
//         if(sec.inner != 0){
//             sec.innerText--;
//         }else if(min.innerText != 0 && sec.innerText == 0){
//             sec.innerText = 59;
//             min.innerText --;
//         }
//     }
// };
