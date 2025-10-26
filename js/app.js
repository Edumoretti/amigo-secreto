let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    // Converte o nome para maiúsculo
    nomeAmigo = nomeAmigo.toUpperCase();

    if(nomeAmigo == '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if(amigos.includes(nomeAmigo)){
        alert('Este amigo já foi adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = amigos.join(', ');
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    if(amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para realizar o sorteio!');
        return;
    }


    // Embaralhar o array de amigos
    let embaralhado = amigos.slice().sort(() => Math.random() - 0.5);
    
    // Lista para armazenar os pares do sorteio
    let sorteio = [];

    // Criar os pares de amigo secreto
    for(let i = 0; i < embaralhado.length; i++) {
        let pessoa = embaralhado[i];
        let amigoSecreto;
        
        // Se for o último da lista, pega o primeiro
        if(i === embaralhado.length - 1) {
            amigoSecreto = embaralhado[0];
        } else {
            amigoSecreto = embaralhado[i + 1];
        }
        
        sorteio.push(`${pessoa} -> ${amigoSecreto}`);
    }

    // Mostrar o resultado
    document.getElementById('lista-sorteio').innerHTML = sorteio.join('<br>');
}

function reiniciar(){

    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').value = 'Nome do amigo';
    document.getElementById('lista-amigos').innerHTML = '';
    amigos = [];

}


