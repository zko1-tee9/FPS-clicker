var toggle = false;
function quadWindow() {
    let a = document.querySelector('.quad-window');
    a.style.visibility = 'visible';
};
function quadWindowX() {
    let a = document.querySelector('.quad-window');
    a.style.visibility = 'hidden';
};
function quadModal() {
    let a = document.querySelector('.quad-modal');
    a.style.visibility = 'visible';
};
function quadModalX() {
    let a = document.querySelector('.quad-modal');
    a.style.visibility = 'hidden';
};
function quadToggle() {
    let a = document.querySelector('.quad-toggle-round');
    if (toggle==false) {
        a.style.margin = '0 0 0 65%';
        toggle=true;
    }
    else if (toggle==true) {
        a.style.margin = '0 0 0 0';
        toggle=false;
    }
};
function quadValid() {
    let a = document.querySelector('.quad-inp-text');
    if (a.value=='') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value==' ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='  ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='   ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='    ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='     ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='      ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='       ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='        ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='         ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='          ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='           ') {
        a.style.border = 'red 2px dashed'
    }
    else if (a.value=='            ') {
        a.style.border = 'red 2px dashed'
    }
    else {
        a.style.border = 'green 2px solid'
    }
}