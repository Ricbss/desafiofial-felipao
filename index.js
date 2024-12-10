// Classe genérica para representar um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para atacar
    atacar() {
        let ataque;

        // Estrutura de decisão para definir o ataque com base no tipo
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque básico';
        }

        // Mensagem de ataque
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

// Função para criar heróis
function criarHerois() {
    const quantidadeHerois = parseInt(("Quantos heróis deseja criar?"));
    const listaHerois = [];

    // Loop para criar os heróis
    for (let i = 0; i < quantidadeHerois; i++) {
        const nome = (`Digite o nome do herói ${i + 1}:`);
        const idade = parseInt((`Digite a idade do herói ${i + 1}:`));
        const tipo = (`Digite o tipo do herói ${i + 1} (mago, guerreiro, monge, ninja):`);

        // Criando e armazenando o herói
        const heroi = new Heroi(nome, idade, tipo);
        listaHerois.push(heroi);
    }

    return listaHerois;
}

// Função principal para exibir os ataques dos heróis
function exibirAtaques(listaHerois) {
    console.log("Resultados dos ataques:");

    // Loop para exibir os ataques de cada herói
    listaHerois.forEach((heroi) => {
        console.log(heroi.atacar());
    });
}

// Execução do programa
const heroisCriados = criarHerois();
exibirAtaques(heroisCriados);
