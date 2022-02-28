var screen = document.querySelector('#display');
var op_btn = document.querySelectorAll('.op-btn');

for (item of op_btn){
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;

        if(btnText == 'x'){
            btnText = '*';
        }
        if(btnText == '÷'){
            btnText = '/';
        }

        screen.value += btnText;
    });
}

function sin(){
    screen.value = Math.sin(screen.value);
}
function cos(){
    screen.value = Math.cos(screen.value);
}
function tan(){
    screen.value = Math.tan(screen.value);
}
function pow(){
    screen.value = Math.pow(screen.value, 2);
}
function sqrt(){
    screen.value = Math.sqrt(screen.value, 2);
}
function log(){
    screen.value = Math.log(screen.value);
}
function pi(){
    screen.value = 3.14159265359;
}
function e(){
    screen.value = 2.71828182846;
}
function fact(){
    var i, num, f=1;
    num = screen.value;
    for(i=1; i<=num; i++){
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}
function backspace(){
    screen.value = screen.value.substr(0, screen.value.length-1);
}