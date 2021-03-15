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

const createItem = (useState, count) => {
  useState.add();
  const getNextId = useState.getNextId();
  const text = inputText.value;
  appendItem(list, text, getNextId);
  inputText.value = "";
  count.innerHTML = "  " + useState.getId() + "개";
};

const createCount = (count, useState) => {
  count.className = "count";
  count.innerHTML = "" + useState.getId() + "개";
  header.append(count);
};

const removeItem = (item, useState, count) => {
  useState.remove();
  item.remove();
  count.innerHTML = "" + useState.getId() + "개";
};

window.addEventListener("load", () => {
  const useState = state.getInstance();
  const count = document.createElement("span");

  createCount(count, useState);

  addItem.addEventListener("click", () => {
    if (inputText.value !== "") {
      createItem(useState, count);
    }
  });
  list.addEventListener("click", (e) => {
    if (e.target.classList[2] === "del") {
      removeItem(e.target.parentNode, useState, count);
    }
  });
});
