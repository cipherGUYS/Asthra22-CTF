
window.onkeydown = function nam() {
    console.log("Hello")
}



var cursor = true;
var press =true;
var curSpeed = 500;
var pressSpeed = 750;
setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, curSpeed);

setInterval(() => {
    if(press) {
      document.getElementById('press').style.opacity = 0;
      press = false;
    }else {
      document.getElementById('press').style.opacity = 1;
      press = true;
    }
 }, pressSpeed);

var code
var i=0
var j=0

const xhr = new XMLHttpRequest();

xhr.open('GET','about.txt', true);

xhr.onload = function() {
    code = this.responseText
        window.onkeydown = function print() {
            if(code[j]=='')
            var temp = ''
            while(code[j] != ' ') {
                temp += code[j]
                j++
            }
            j++;
            temp += ' '
            document.getElementById("code").innerHTML += temp;
            console.log(temp)
            temp = ''
        }
}

xhr.send();