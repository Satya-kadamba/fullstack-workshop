const tabsData = [
  { title: 'Overview', content: 'Overview content here...' },
  { title: 'Features', content: 'Features content here...' },
  { title: 'Pricing', content: 'Pricing content here...' }
];

const tabButtons = document.getElementById("tabButtons");
const tabContent = document.getElementById("tabContent");


tabsData.forEach((tab, index) => {
  const btn = document.createElement("button");
  btn.textContent = tab.title;
  btn.setAttribute("data-index", index);
  btn.setAttribute("tabindex", "0");
  tabButtons.appendChild(btn);
});


function activateTab(index) {
  const allButtons = tabButtons.querySelectorAll("button");

  allButtons.forEach(btn => btn.classList.remove("active"));
  allButtons[index].classList.add("active");

  tabContent.textContent = tabsData[index].content;
}

activateTab(0); 


tabButtons.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    activateTab(Number(index));
  }
});


tabButtons.addEventListener("keydown", (e) => {
  const buttons = Array.from(tabButtons.querySelectorAll("button"));
  const current = buttons.indexOf(document.activeElement);

  if (e.key === "ArrowRight" && current < buttons.length - 1) {
    buttons[current + 1].focus();
    activateTab(current + 1);
  }

  if (e.key === "ArrowLeft" && current > 0) {
    buttons[current - 1].focus();
    activateTab(current - 1);
  }
});
