const buttons = document.querySelectorAll("#buttonProducts");
const carrinho = document.querySelector(".store");
const itemCounting = document.querySelector(".items");
const itemAddFeedback = document.querySelector(".feedbackAddItem");
const itemDescCarrinho = document.querySelector(".itemDescCarrinho");
const productList = document.getElementById("productList");
const carrinhoDesc = document.querySelector(".itemsCarrinho");
const clearButton = document.querySelector(".clearButton");
let item = 0;
itemCounting.style.display = "none";
itemAddFeedback.style.display = "none";
const arrayProducts = [];

clearButton.addEventListener("click", () => {
  item = 0;
  itemCounting.style.display = "none";
  productList.innerHTML = ""; // Limpa todos os itens da lista
});

carrinho.addEventListener("click", () => {
  if (carrinhoDesc.style.display == "flex") {
    carrinhoDesc.style.display = "none";
  } else {
    carrinhoDesc.style.display = "flex";
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    itemCounting.style.display = "flex";
    let count = ++item;
    itemCounting.textContent = count;

    if (button.classList.contains("botao1")) {
      arrayProducts.push("produto 1");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 1 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 1";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao2")) {
      arrayProducts.push("produto 2");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 2 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 2";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao3")) {
      arrayProducts.push("produto 3");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 3 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 3";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao4")) {
      arrayProducts.push("produto 4");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 4 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 4";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao5")) {
      arrayProducts.push("produto 5");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 5 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 5";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao6")) {
      arrayProducts.push("produto 6");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 6 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 6";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao7")) {
      arrayProducts.push("produto 7");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 7 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 7";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao8")) {
      arrayProducts.push("produto 8");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 8 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 8";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao9")) {
      arrayProducts.push("produto 9");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 9 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 9";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao10")) {
      arrayProducts.push("produto 10");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 10 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 10";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao11")) {
      arrayProducts.push("produto 11");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 11 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 11";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    } else if (button.classList.contains("botao12")) {
      arrayProducts.push("produto 12");
      itemAddFeedback.style.display = "flex";
      itemAddFeedback.textContent =
        "produto 12 adicionado ao carrinho de compras";
      //add item na lista do carrinho
      const listItem = document.createElement("li");
      listItem.textContent = "produto 12";
      productList.appendChild(listItem);
      setTimeout(() => {
        itemAddFeedback.style.display = "none";
      }, 1000);
    }
    console.log(arrayProducts);
  });
});
