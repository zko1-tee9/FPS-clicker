function quadWindowZ() {
    if (shopSecond==0) {
        console.error('UGHHHHHH');
    }
    else if (shopSecond==1){
    let a = document.querySelector('.quad-windowZ')
    a.style.visibility = 'visible';
    }
}
function quadWindowXZ() {
    let a = document.querySelector('.quad-windowZ')
    a.style.visibility = 'hidden';
}
var shopSecond = 0;
var fps = 0;
var x = 0;
var y = 0;
var z = 0;
var salo = 0;
function add() {
    if (x==0) {
        fps+=1;
        console.log(fps);
        let ewk = document.querySelector('.count').innerHTML = fps;
    }
    else if(x==1) {
        fps+=2;
        console.log(fps);
        let ewk = document.querySelector('.count').innerHTML = fps;
    }
    else if(x==2) {
        fps+=3;
        console.log(fps);
        let ewk = document.querySelector('.count').innerHTML = fps;
    }
    else if(x==3) {
        fps+=5;
        console.log(fps);
        let ewk = document.querySelector('.count').innerHTML = fps;
    }
}

function buy150() {
    if (fps>=150){
    fps-=150;
    let ewk = document.querySelector('.count').innerHTML = fps;
    document.querySelector('.btn-q').remove();
    document.querySelector('.pp').remove();
    x = 1;
    salo += 1;
    }
    else {
        console.log('not enough fps!')
        document.querySelector('.btn-q').style.background = "red";
        setTimeout(() => {
        document.querySelector('.btn-q').style.background = "rgb(13, 228, 99)";   
        }, 1000);
    }
}
function buy300() {
    if (fps>=300){
        fps-=300;
        let ewk = document.querySelector('.count').innerHTML = fps;
        document.querySelector('.btn-w').remove();
        document.querySelector('.ppp').remove();
        y = 1;
        salo += 1;
        }
        else {
            console.log('not enough fps!')
            document.querySelector('.btn-w').style.background = "red";
            setTimeout(() => {
            document.querySelector('.btn-w').style.background = "rgb(13, 228, 99)";   
            }, 1000);
        }
    };
setInterval(() => {
    if (y==1) {
        fps+=1;
        let ewk = document.querySelector('.count').innerHTML = fps;
    }
},3000);
function buy500() {
    let sasasa = document.querySelector('.qwerty'); 
    let sas = document.querySelector('.quad-over'); 
    if (fps>=500 && salo == 2){
        fps-=500;
        let ewk = document.querySelector('.count').innerHTML = fps;
        document.querySelector('.btn-t').remove();
        document.querySelector('.pppp').remove();
        sasasa.classList.remove('quad-btn-hover-opac-blue');
        sasasa.classList.add('quad-btn-prem');
        sas.style.background = 'linear-gradient(144deg,#AF40FF, #5B42F3,#00DDEB)';
        salo += 1;
        x = 2
        }
        else {
            console.log('not enough fps!')
            document.querySelector('.btn-t').style.background = "red";
            setTimeout(() => {
            document.querySelector('.btn-t').style.background = "rgb(13, 228, 99)";   
            }, 1000);
        }
    };

function buy1000() {
    let sas = document.querySelector('.main'); 
    let zxc = document.querySelector('.count');
    let qaz = document.querySelector('header');
    if (fps>=1000 && salo == 3){
        fps-=1000;
        let ewk = document.querySelector('.count').innerHTML = fps;
        document.querySelector('.btn-y').remove();
        document.querySelector('.py').remove();
        sas.style.background = 'linear-gradient(144deg,#AF40FF, #5B42F3,#00DDEB)';
        zxc.style.color = 'white';
        salo += 1;
        }
        else {
            console.log('not enough fps!')
            document.querySelector('.btn-y').style.background = "red";
            setTimeout(() => {
            document.querySelector('.btn-y').style.background = "rgb(13, 228, 99)";   
            }, 1000);
        }
    };

    function buy1750() {
        let wer = document.querySelector('.count')
        if (fps>=1750 && salo == 4){
            fps-=1750;
        let ewk = document.querySelector('.count').innerHTML = fps;  
            document.querySelector('.btn-u').remove();
            document.querySelector('.wsx').remove();
            wer.classList.add('animation-pulse');
            salo+=1
            }
            else {
                console.log('not enough fps!')
                document.querySelector('.btn-u').style.background = "red";
                setTimeout(() => {
                document.querySelector('.btn-u').style.background = "rgb(13, 228, 99)";   
                }, 1000);
            }
        };

function buy2300() {
   let sasasa = document.querySelector('.qwerty'); 
   let sas = document.querySelector('.quad-over'); 
    if (fps>=2300 && salo == 5){
        fps-=2300;
        let ewk = document.querySelector('.count').innerHTML = fps;
        document.querySelector('.btn-e').remove();
        document.querySelector('.qaz').remove();
        sasasa.classList.remove('quad-btn-prem');
        sasasa.classList.add('quad-btn-black-fill');
        sas.style.background = 'linear-gradient(144deg,#AF40FF, #5B42F3,#00DDEB)';
        salo += 1;
        x = 3
        }
        else {
            console.log('not enough fps!')
            document.querySelector('.btn-e').style.background = "red";
            setTimeout(() => {
            document.querySelector('.btn-e').style.background = "rgb(13, 228, 99)";   
            }, 1000);
        }
    };

    function buy4000() {
         if (fps>=4000 && salo == 6){
             fps-=4000;
             let ewk = document.querySelector('.count').innerHTML = fps;
             document.querySelector('.btn-i').remove();
             document.querySelector('.edc').remove();
             salo += 1;
             z = 1;
             }
             else {
                 console.log('not enough fps!')
                 document.querySelector('.btn-i').style.background = "red";
                 setTimeout(() => {
                 document.querySelector('.btn-i').style.background = "rgb(13, 228, 99)";   
                 }, 1000);
             }
         };
         setInterval(() => {
            if (z==1){
            fps+=15
            let ewk = document.querySelector('.count').innerHTML = fps;
            }
         }, 7000);

    function buy10000() {
        if (fps>=10000 && salo == 7){
            fps-=10000;
            let ewk = document.querySelector('.count').innerHTML = fps;
            document.querySelector('.btn-r').remove();
            document.querySelector('.ppppp').remove();
            shopSecond = 1;
            }
            else {
                console.log('not enough fps!')
                document.querySelector('.btn-r').style.background = "red";
                setTimeout(() => {
                document.querySelector('.btn-r').style.background = "rgb(13, 228, 99)";   
                }, 1000);
            }
        };




       /* let a = document.querySelector('.quad-modal')
        a.style.visibility = 'visible' ;*/