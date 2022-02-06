fruitsArray = [
    ["Banana", 3.50],
    ["Maça", 2.25],
    ["Uva", 1.75],
    ["Pera", 2.50],
    ["Laranja", 3.00],
    ["Jabuticaba", 4.50],
    ["Melancia", 1.99],
    ["Melão", 2.75]
];

randomFruitsArray = fruitsArray.sort(() => Math.random() - 0.5);
shuffledFruitsArray = randomFruitsArray.slice(2, 6);

let ul = document.querySelector("#produtos");
for (let idx = 0; idx < shuffledFruitsArray.length; idx++) {
    let li = document.createElement("li");
    li.id = `${shuffledFruitsArray[idx][0]}`;
    li.setAttribute("preco", shuffledFruitsArray[idx][1]);
    li.setAttribute("onclick", `adicionarCarinho(this.id, ${li.getAttribute("preco")})`)
    
    li.innerHTML = `${shuffledFruitsArray[idx][0]}`
    ul.appendChild(li);
}

let input = document.querySelector("#mostraTotalCompra");
input.value = parseFloat(0);

function adicionarCarinho(id, preco) {
    let input = document.querySelector("#mostraTotalCompra")
    let ul = document.querySelector("#cestaDoCliente");
    let li = document.createElement("li");
    
    if (!document.getElementById("carrinho" + `${id}`)) {
    li.id = "carrinho" + id;
    li.innerHTML = id;
    ul.appendChild(li);
    input.value = parseFloat(input.value) + preco
    } else {
        alert("Este elemento já existe!");
    }
}