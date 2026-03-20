// Dados dos Pokémon
const pokemonData = {
    dratini: {
        name: "Dratini",
        id: 147,
        type: ["Dragon"],
        height: 1.8,
        weight: 3.3,
        abilities: ["Shed Skin", "Marvel Scale"],
        description: "Dratini é um Pokémon lendário que vive em corpos de água. Tem a capacidade de crescer indefinidamente.",
        baseStats: {
            hp: 41,
            attack: 64,
            defense: 45,
            spAtk: 50,
            spDef: 50,
            speed: 50
        }
    },
    dragonair: {
        name: "Dragonair",
        id: 148,
        type: ["Dragon"],
        height: 4.0,
        weight: 16.5,
        abilities: ["Shed Skin", "Marvel Scale"],
        description: "Dragonair é a forma intermediária. Possui pérolas brilhantes que lhe permitem controlar o clima.",
        baseStats: {
            hp: 61,
            attack: 84,
            defense: 65,
            spAtk: 70,
            spDef: 70,
            speed: 70
        }
    },
    dragonite: {
        name: "Dragonite",
        id: 149,
        type: ["Dragon", "Flying"],
        height: 2.2,
        weight: 210.0,
        abilities: ["Multiscale"],
        description: "Dragonite é a forma final. É um Pokémon inteligente que voa três vezes mais rápido que o som.",
        baseStats: {
            hp: 91,
            attack: 134,
            defense: 95,
            spAtk: 100,
            spDef: 100,
            speed: 80
        }
    },
    megadragonite: {
        name: "Mega Dragonite",
        id: 149,
        type: ["Dragon", "Flying"],
        height: 2.2,
        weight: 210.0,
        abilities: ["Multiscale"],
        description: "Mega Dragonite é a forma mega. É um Pokémon inteligente que voa três vezes mais rápido que o som.",
        baseStats: {
            hp: 91,
            attack: 134,
            defense: 95,
            spAtk: 100,
            spDef: 100,
            speed: 80
        }
    }
};

// Inicializar eventos
document.addEventListener('DOMContentLoaded', function() {
    addCardClick();
});

// Adicionar interatividade aos cards
function addCardClick() {
    const cards = document.querySelectorAll('.pokemon-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const pokemon = this.getAttribute('data-pokemon');
            showPokemonDetails(pokemon);
        });
    });
}

// Mostrar detalhes em console (pode ser expandido para modal)
function showPokemonDetails(pokemonName) {
    const pokemon = pokemonData[pokemonName];
    console.log(`
╔════════════════════════════════════╗
║  ${pokemon.name.toUpperCase()} (#${pokemon.id})
╚════════════════════════════════════╝
Tipo: ${pokemon.type.join(', ')}
Altura: ${pokemon.height}m
Peso: ${pokemon.weight}kg

Habilidades: ${pokemon.abilities.join(', ')}

Descrição:
${pokemon.description}

Stats Base:
  HP:       ${pokemon.baseStats.hp}
  Ataque:   ${pokemon.baseStats.attack}
  Defesa:   ${pokemon.baseStats.defense}
  Sp. Atk:  ${pokemon.baseStats.spAtk}
  Sp. Def:  ${pokemon.baseStats.spDef}
  Veloc.:   ${pokemon.baseStats.speed}
    `);
}

// Função para adicionar mais Pokémon dinamicamente (exemplo)
function addNewPokemon(name, data) {
    pokemonData[name.toLowerCase()] = data;
    console.log(`${name} adicionado à Pokédex!`);
}

// Log de inicialização
console.log('Pokédex da linha do Dragonite carregada.');
console.log('Clique em um card para ver detalhes do Pokémon no console.');
