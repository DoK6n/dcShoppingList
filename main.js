const addItem = document.querySelector(".add");
const inputText = document.querySelector(".inputText");
const del = document.querySelector(".del");
const list = document.querySelector(".list");
const header = document.querySelector("header");

const appendItem = (el, text) => {
  const div = document.createElement("div");
  div.className = "items";
  div.innerHTML = text;

  const trashIcon = document.createElement("i");
  trashIcon.className = "fas fa-trash del";

  div.append(trashIcon);
  el.append(div);
};

window.addEventListener("load", () => {
  const useState = state.getInstance();

  const count = document.createElement("span");
  count.className = "count";
  count.innerHTML = "" + useState.getId() + "개";
  header.append(count);

  addItem.addEventListener("click", () => {
    if (inputText.value !== "") {
      useState.add();
      const getNextId = useState.getNextId();
      const text = inputText.value;
      appendItem(list, text, getNextId);
      inputText.value = "";
      count.innerHTML = "  " + useState.getId() + "개";
    }
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList[2] === "del") {
      // console.log(e.target.parentNode.id, e.target.parentNode.innerText);
      useState.remove();
      e.target.parentNode.remove();
      count.innerHTML = "" + useState.getId() + "개";
    }
  });
});
