// geting canvas by Boujjou Achraf
var c = document.getElementById("landing-bg");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//characters - taken from the unicode charset
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

//drawing the characters
function draw()
{
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#292929"; //green text #20c20e
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        //a random character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 25);






//--------------------------------




function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomLetter() {
 var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']
 return alphabet[rand(0,alphabet.length - 1)]
}
function getRandomWord(word) {
  var text = word.innerHTML
  
  var finalWord = ''
  for(var i=0;i<text.length;i++) {
    finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
  }
 
  return finalWord
}

var word = document.querySelectorAll('.scramble');
var interv = 'undefined'
var canChange = false
var globalCount = 0
var count = 0
var INITIAL_WORD = word.innerHTML;
var isGoing = false

function init() {
 if(isGoing) return;
 
 isGoing = true
 var randomWord = getRandomWord(word)
 word.innerHTML = randomWord

 interv = setInterval(function() {
  var finalWord = ''
  for(var x=0;x<INITIAL_WORD.length;x++) {
   if(x <= count && canChange) {
    finalWord += INITIAL_WORD[x]
   } else {
    finalWord += getRandomLetter()
   }
  }
  word.innerHTML = finalWord
  if(canChange) {
    count++
  }
  if(globalCount >= 20) {
   canChange = true
  }
  if(count>=INITIAL_WORD.length) {
   clearInterval(interv)
   count = 0
   canChange = false
   globalCount = 0
   isGoing = false
  }
  globalCount++
 },50)
 
}

word.addEventListener("mouseenter", init)