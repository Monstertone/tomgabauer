//document.querySelector() allows us to access the FIRST HTML element on the page that can be identified with the given CSS selector.
//document.querySelectorAll() will give us an array-like LIST of elements that can be identified with the given CSS selector.

let cashLabel = document.querySelector('#cashTotal');

let smallQuestButton = document.querySelector('#smallQuest');
let longQuestButton = document.querySelector('#longQuest');
let bossFightButton = document.querySelector('#bossFight');

//The addEventListener() function allows to run a javascript function when a specific event occurs on the HTML page (such as a mouse-click, or a hover over).
//addEventListener() takes two arguments, the first being a string that specifies what event we want to "listen" to, and the second being the function we want to run.
//Notice that the function passed in as an argument is not invoked (aka there's no parenthesis next to the name), but rather the function name alone is given.
smallQuestButton.addEventListener('click', takeSmallQuest);
longQuestButton.addEventListener('click', takeLongQuest);
bossFightButton.addEventListener('click', takeBossFight);

//TODO: alter the behavior of the takeSmallQuest, takeLongQuest, and takeBossFight functions so that they randomly add a value within their defined ranges to your total cash!
function takeSmallQuest(){
//  alert('you took on the small quest!')

let currentCash = cashLabel.innerText;
let newMoney=(Math.floor(Math.random() * 11 + 10));
currentCash = Number(currentCash);
newMoney = Number(newMoney);
cashLabel.innerText= (currentCash + newMoney);
//alert(Math.floor(Math.random() * (20 - 10 + 1)) + 10;);
}

function takeLongQuest(){
//  alert('you took on the long quest!')
let currentCash = cashLabel.innerText;
let newMoney=(Math.floor(Math.random() * 21 + 30))
currentCash = Number(currentCash);
newMoney = Number(newMoney);
cashLabel.innerText= (currentCash + newMoney);

}

function takeBossFight(){
//  alert('you took on the boss fight!')
let currentCash = cashLabel.innerText;
let newMoney=(Math.floor(Math.random() * 31 + 70))
currentCash = Number(currentCash);
newMoney = Number(newMoney);
cashLabel.innerText= (currentCash + newMoney);
}
//HINT: All visible elements on HTML web page will be represented as strings when they are accessed using javascript
//HINT: To get the text value of the cash that's currently on the page, access it's inner text using cashLabel.innerText
//HINT: To set the text value of the cash that's currently on the page, try using cashLabel.innerText = '(some other value)'
