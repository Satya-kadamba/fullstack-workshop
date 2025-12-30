let count = 0;
let step = 1;
const display = document.getElementById("count");

document.getElementById("inc").addEventListener("click",()=>
    {
         count += step; 
         updateUI();
    });


document.getElementById("dec").addEventListener("click",()=>
    { 
        if(count - step>=0)
        {
         count -= step;
        }
         updateUI();
    });

document.getElementById("reset").addEventListener("click",()=>
{
    count = 0;
    updateUI();
});


document.querySelectorAll(".step").forEach(btn => {
  btn.addEventListener("click", () => {
    step = Number(btn.dataset.step);
  });
});

function updateUI() {
  display.innerHTML = count;

  if (count > 0) {
    display.style.color = "green";
  } else if (count < 0) {
    display.style.color = "red";
  } else {
    display.style.color = "black";
  }
}