// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let IntervalId;
const startChangingColor = function () {
    if (!IntervalId){           //not including this will break the code if Start clicked twice 
        IntervalId = setInterval(changeColor, 1000);
    }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }

};

const stopChangingColor = function () {
  clearInterval(IntervalId);
  IntervalId = null; //clearing value : clean code
};
setInterval( function() {
    document.querySelector('h2').innerHTML = "GenAi Expert..."
}

,3000)

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
