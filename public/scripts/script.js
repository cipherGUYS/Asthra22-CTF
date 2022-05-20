var cursor = true;
var press = true;
var curSpeed = 500;
var pressSpeed = 750;
var public_id;

function hide2() {
  document.getElementById("rows").classList.remove("d-none")
  document.getElementById("q-box").classList.add("d-none")
}

function hide1(id) {
  document.getElementById("rows").classList.add("d-none")
  document.getElementById("q-box").classList.remove("d-none")
  document.getElementById("flag_no").value = id;
  public_id = id;
  // console.log(id)
  switch (id) {
    case "1":
      document.getElementById("hint_id").innerHTML = "Refer the resource"
      break;
    case "2":
      document.getElementById("hint_id").innerHTML = "Refer the resource"
      break;
    case "3":
      document.getElementById("hint_id").innerHTML = "Refer the resource"
      break;
    case "4":
      document.getElementById("hint_id").innerHTML = "Refer the resource"
      break;
    case "5":
      document.getElementById("hint_id").innerHTML = "Refer the resource"
      break;
    case "6":
      document.getElementById("hint_id").innerHTML = "Akash and Tomin has something for you."
      break;
    case "7":
      document.getElementById("hint_id").innerHTML = "Now it's with 1st and 4th year students."
      break;
    case "8":
      document.getElementById("hint_id").innerHTML = "seek and you shall find it."
      break;
    case "9":
      document.getElementById("hint_id").innerHTML = "Check the readme."
      break;
    case "10":
      document.getElementById("hint_id").innerHTML = "Login CTF"
      break;
    case "11":
      document.getElementById("hint_id").innerHTML = "Have you seen our whale? There is more to it than what meets the naked eye. The answer lies within stylesuxx"
      break;
    case "12":
      document.getElementById("hint_id").innerHTML = "Don't forget your creators"
      break;
    case "13":
      document.getElementById("hint_id").innerHTML = "Check your fav creators mail"
      break;
    case "14":
      document.getElementById("hint_id").innerHTML = "Windows XP was the last best Windows version"
      break;
    case "15":
      document.getElementById("hint_id").innerHTML = "Copyright Claim"
      break;
    case "16":
      document.getElementById("hint_id").innerHTML = `Y2lwaGVyR1VZU3tDMDdGMEI1OTgxQUM2MDFDfQ==
      Why is there an ‘==’ at the end?`
      break;
    case "17":
      document.getElementById("hint_id").innerHTML = "ROT has 25 sons. The fifth son has a spell hidden in the resource."
      break;
    case "18":
      document.getElementById("hint_id").innerHTML = "Hey Ceaser, beware of the Ides qxi.an/3V3cesi"
      break;
    case "19":
      document.getElementById("hint_id").innerHTML = "Morse says .... .- .."
      break;
    case "20":
      document.getElementById("hint_id").innerHTML = "Vigenere wants to sing One Last Song"
      break;
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

function main_menu() {
  window.location.href = "/contest"
}

function resource_disp() {
  switch (public_id) {
    case "1":
      window.location.href = "https://drive.google.com/file/d/1HXvMNE4daOX6EZhLu19ET183WZGTDzvm/view?usp=sharing"
      break;
    case "2":
      window.location.href = "https://drive.google.com/file/d/12VdlHoJw3dpuuMpwTddg3BJoQWL7mtzq/view?usp=sharing"
      break;
    case "3":
      window.location.href = "https://drive.google.com/file/d/1XwnO3oy1iSpZaTBjvGg1pkoNqY16gmD3/view?usp=sharing"
      break;
    case "4":
      window.location.href = "https://drive.google.com/file/d/18cJKhg9y3Ae0kRGZd5eG-S7mqqXsfstP/view?usp=sharing"
      break;
    case "5":
      window.location.href = "https://drive.google.com/file/d/1ZPVao9NL4m4U78SLcwAOUjTWfnb_G-zW/view?usp=sharing"
      break;
    case "6":
      window.location.href = "https://cipherguys.github.io/CovidSJCET/"
      break;
    case "7":
      window.location.href = "https://cipherguys.github.io/TimeTable"
      break;
    case "8":
      window.location.href = "https://cipherguys.github.io/TimeTable"
      break;
    case "9":
      window.location.href = "https://github.com/cipherGUYS/hacknight-notion"
      break;
    case "10":
      window.location.href = "/contest"
      break;
    case "11":
      window.location.href = "/contest"
      break;
    case "12":
      window.location.href = "https://drive.google.com/file/d/1OQzk5kfnoJzFWa2Y3Ht8bs2B0MiMVU-j/view?usp=sharing"
      break;
    case "13":
      window.location.href = "https://drive.google.com/file/d/1EkkgneFiXYAGemAGuVGSdg33FMpjyl5W/view?usp=sharing"
      break;
    case "14":
      window.location.href = "https://drive.google.com/file/d/1mAArKZdAgHM-KaVpSUojrwVUmsis9Ax_/view?usp=sharing"
      break;
    case "15":
      window.location.href = "https://drive.google.com/file/d/1Xq7j6JgNlYuftLNz1tzc6zG5gxin20Hi/view?usp=sharing"
      break;
    case "16":
      window.location.href = "https://docs.google.com/document/d/1q__RyFrtGCzwI2aRnLYdAgLUMapiooFs7HfmR8ZWHb8/edit?usp=sharing"
      break;
    case "17":
      window.location.href = "https://docs.google.com/document/d/1q__RyFrtGCzwI2aRnLYdAgLUMapiooFs7HfmR8ZWHb8/edit?usp=sharing"
      break;
    case "18":
      window.location.href = "https://docs.google.com/document/d/1q__RyFrtGCzwI2aRnLYdAgLUMapiooFs7HfmR8ZWHb8/edit?usp=sharing"
      break;
    case "19":
      window.location.href = "https://docs.google.com/document/d/1q__RyFrtGCzwI2aRnLYdAgLUMapiooFs7HfmR8ZWHb8/edit?usp=sharing"
      break;
    case "20":
      window.location.href = "https://docs.google.com/document/d/1q__RyFrtGCzwI2aRnLYdAgLUMapiooFs7HfmR8ZWHb8/edit?usp=sharing"
      break;
    case "21":
      window.location.href = "/contest"
      break;
    case "22":
      window.location.href = "/contest"
      break;
    case "23":
      window.location.href = "/contest"
      break;
    case "24":
      window.location.href = "/contest"
      break;
    case "25":
      window.location.href = "/contest"
      break;
    default:
      break;
  }
}