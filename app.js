// Declara um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o nome digitado no campo de texto
    let nome = document.getElementById("amigo").value;

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Se o campo estiver vazio, a função termina aqui
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de texto após adicionar
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos exibida na página
    mostrarListaDeAmigos();
}

// Função para exibir a lista de amigos
function mostrarListaDeAmigos() {
    // Obtém o elemento da lista de amigos
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista atual na tela para evitar duplicação
    lista.innerHTML = "";

    // Percorre o array "amigos" e cria um item de lista para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo item de lista (<li>)
        let item = document.createElement("li");
        
        // Define o texto do item de lista como o nome do amigo
        item.textContent = amigos[i];
        
        // Adiciona o item à lista na página
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verifica se há amigos na lista antes de sortear
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione amigos antes de sortear.");
        return; // Se não houver amigos, a função termina aqui
    }

    // Gera um índice aleatório para o array de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado com o índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome do amigo sorteado na tela
    let resultado = document.getElementById("resultado");

    // Limpa o conteúdo anterior da lista de resultados
    resultado.innerHTML = "";

    // Cria um novo item para exibir o nome do amigo sorteado
    let itemResultado = document.createElement("li");

    // Define o texto do item como o amigo sorteado
    itemResultado.textContent = "O amigo secreto sorteado é: " + amigoSorteado;

    // Adiciona o item à lista de resultados
    resultado.appendChild(itemResultado);
}
