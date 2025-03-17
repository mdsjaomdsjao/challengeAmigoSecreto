const friendNameInput = document.getElementById('friendName');
const addButton = document.getElementById('addButton');
const drawButton = document.getElementById('drawButton');
const resultDiv = document.getElementById('result');
const friendsListDiv = document.getElementById('friendsList');

let friends = [];

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    const friendName = friendNameInput.value.trim();
    if (friendName && !friends.includes(friendName)) {
        friends.push(friendName);
        friendNameInput.value = '';
        friendNameInput.focus();

        updateFriendsList();

        if (friends.length >= 2) {
            drawButton.disabled = false;
        }
    } else if (friendName === '') {
        alert('Digite um nome válido!');
    } else {
        alert('Este nome já foi adicionado!');
    }
});

drawButton.addEventListener('click', () => {
    if (friends.length < 2) {
        resultDiv.textContent = 'Adicione pelo menos dois amigos para o sorteio.';
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const drawnFriend = friends[randomIndex];
    resultDiv.innerHTML = `O amigo secreto sorteado é: <span class="result-name">${drawnFriend}</span>`;
});

function updateFriendsList() {
    // Exibe a lista de amigos na tela
    friendsListDiv.innerHTML = `<h3>Lista de Amigos:</h3><ul>${friends.map(friend => `<li>${friend}</li>`).join('')}</ul>`;
}
