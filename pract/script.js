const addBtn = document.getElementById("add-button");
const list = document.getElementById("list-container");
const inputText = document.getElementById("input-text");
function addItem() {
  const inputValue = inputText.value.trim();
  if (inputValue !== "") {
    const newList = document.createElement("li");
    newList.textContent = inputValue;
    list.appendChild(newList);
    inputText.value = "";
  }
}

if (addBtn) {
  addBtn.addEventListener("click", addItem);
}
