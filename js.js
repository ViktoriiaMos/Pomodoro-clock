    var buttonMin = document.getElementById('minus-break');
    var countBreak = document.getElementById('minutes-place-break');
    var buttonPlus = document.getElementById('plus-break');
    var clock = document.getElementById('clock');
    var buttonMinWork = document.getElementById('minus-work');
    var countWork = document.getElementById('number-place-work');
    var buttonPlusWork = document.getElementById('plus-work');
    var min = document.getElementById('minutes');
    var sec = document.getElementById('seconds');
  
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


   
    var startTimer;

   clock.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else if(startTimer){
        clearInterval(startTimer);
        //doesn't work. How to make clock stop 0:00
    } else if(min.innerText === 0 && sec.innerText <= 0){   
        min.innerText = 0;
        sec.innerText = 00;
        //doesn't work. Reset clock clicking on the clock if clock stoped and not 0:00
    } else if((min.innerText !== 0 || sec.innerText !== 0) || (min.innerText !== 0 && sec.innerText !== 0)){         
        min.innerText = 0;
        sec.innerText = 00;
    }
});

    function timer(){
    if(sec.innerText != 0){
        sec.innerText --;
    }else if(min.innerText != 0 && sec.innerText == 0){
        sec.innerText = 59;
        min.innerText --;
    };
    if(min.innerText == 0 && sec.innerText == 0){
        if(sec.inner != 0){
            sec.innerText--;
        }else if(min.innerText != 0 && sec.innerText == 0){   
            sec.innerText = 59;
            min.innerText --;
        }                                       
    }
}; 
