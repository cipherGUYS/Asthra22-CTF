var cursor = true;
var press = true;
var curSpeed = 500;
var pressSpeed = 750;

function hide2() {
  document.getElementById("rows").classList.remove("d-none")
  document.getElementById("q-box").classList.add("d-none")
}

function hide1(id) {
  document.getElementById("rows").classList.add("d-none")
  document.getElementById("q-box").classList.remove("d-none")
  document.getElementById("flag_no").value = id;
  switch (id) {
    case "21":
      document.getElementById("hint_id").innerHTML = "Are you looking for somebody in grub ?"
      break;
    case "22":
      document.getElementById("hint_id").innerHTML = "There's a fish in the &#128465;&#65039;"
      break;
    case "23":
      document.getElementById("hint_id").innerHTML = "mounted 3 idots"
      break;
    case "24":
      document.getElementById("hint_id").innerHTML = "Hey, have you heard any music🎶 playing in the disc ?"
      break;
    case "25":
      document.getElementById("hint_id").innerHTML = "Find it from that random stuff in wastebasket"
      break;
  }
}


function blinker(id) {
  setInterval(() => {
    if (press) {
      document.getElementById(id).style.opacity = 0;
      press = false;
    } else {
      document.getElementById(id).style.opacity = 1;
      press = true;
    }
  }, pressSpeed);
}
function changer() {
  window.onkeydown = function change() {
    console.log("pressed");
    window.location.href = "/contest"
  }
  blinker("press")
}


var txt = "500 years ago, there lived a group of warriors among the valleys./Warriors who protected the Earth from all mystical creatures and evil spirits. Warriors who possessed the power of the 25 magical spells. With the power of these spells, they protected the land from all dangers and ensured balance within the universe. They were destined to be the guardians of this world./But !!!/When the army of the Dark Lord striked with their full might, these warriors could not stop them. To keep the inhabitants of the Earth away from danger, they did the ultimate sacrifice. They hid the magic spells in 25 different locations. Locations that no ordinary man could ever find out. Till this day, no man has found these spells. It is believed that only the true successors of the warriors can unveil the locations./So, are you ready to hunt the long gone spells? /Then, welcome to the Darkest Arts of Web, a CTF competition to find the hidden spells./***************************************************************************************************/Follow the instructions below carefully./1. The competition will be for 2 hours and there will be a total of 25 flags for you to hunt down./2. To win the competition you have to find out the maximum number of flags in the least time./3. Hints associated with each flag can be found on this website./4. Once you find a spell, submit it on the website along with your given username.";
//txt = "jncsdkjndskjnkjn ejndskjndskjn djsnskjdndskjfn kjnfkjdsnfkjdsnf jsdnfksdnfkdsjnfkjn kdsjfnkdsjnfkdj"
var speed = 25;

function typeWriter(i, txt, id, n) {
  if (i < txt.length) {
    if (txt.charAt(i) == '/') {
      document.getElementById(id).innerHTML += "<br></br>";
    }
    else {
      document.getElementById(id).innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(() => { typeWriter(i, txt, id, n) }, speed);
  }
  else {
    if (n) {
      typeWriter(0, "< Press any key to continue >", "press", 0)
    } else {
      changer();
    }
  }
}
if (document.getElementById("scroll")) {
  blinker("scroll")
}
if (document.getElementById("code")) {
  typeWriter(0, txt, "code", 1)
}

function youknowwho() {
  window.location.href = "https://docs.google.com/document/d/1nnioYpkX4VCZUw2kUPG2WyAPvoVl1loCQnRlbFrojWg/edit?usp=sharing"
}