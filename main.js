let x = "0";
console.log(x);

function button(i) {
    if (x != 0) {
    x += `${i}`;
    document.getElementById("result").innerHTML = x;
    console.log(x);
    }
    else {
        x = `${i}`;
        document.getElementById("result").innerHTML = x;
        console.log(x);
    }
}

function operator(i) {
    let y = x[x.length-1];
    if (y == '+' || y == '-' || y == '*' || y == '/') {
        x = x.replace(x[x.length-1], i);
        document.getElementById("result").innerHTML = x;
        console.log(x);
    }
    else if (y == '0') {
        x += `${i}`;
        document.getElementById("result").innerHTML = x;
        console.log(x);
    }
    
    else {
        x += `${i}`;
        document.getElementById("result").innerHTML = x;
        console.log(x);
        }
}

function clear1() {
    x = "0";
    document.getElementById("result").innerHTML = "0";
    console.log(x);
}


function equal() {
    let y = x[x.length-1];
    console.log ('.');
    if (y == '+' || y == '-' || y == '*' || y == '/') {
        x = x.slice(0, (x.length-1))
        document.getElementById("result").innerHTML = x;
        console.log(x);
    } else {
        let result = eval(x);
        console.log(result);
        console.log(typeof result);
        if (isFinite(result) == false || isNaN(result) == true) {
            err = "Error";
            document.getElementById("result").innerHTML = err;
            x = "0";
            console.log(x);
        } else {
            document.getElementById("result").innerHTML = result;
            x = result;
            }
        }

}


//keyboardEvent
function keypress(evt) {
    i = evt.key;
    console.log(i);
    console.log(typeof i);
    switch (i) {
        case '1': case '2': case '3': case'4':
        case '5': case '6': case '7': case'8':
        case '9': case '0':
            button(i);
            break;
        case '+': case '-': case '*': case '/':
            operator(i);
            break;
        case '=':
            equal();
            break;
        case 'Delete':
        case 'Enter':
            clear1();
            break;
        default: //do nothing
    }
    }

function docReady() {
    window.addEventListener('keydown', keypress);
}