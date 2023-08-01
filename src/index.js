import { Arqueiro } from "./modules/arqueiro.js"
import { Mago } from "./modules/mago.js"
import { Guerreiro } from "./modules/guerreiro.js"
import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Personagem } from "./modules/personagem.js"

const Jorge = new Mago('Jorge', 'fogo', 4, 10)
const Mari = new Mago('Mariana', 'gelo', 6, 11)
const Lipe = new Arqueiro('Filipe', 7)
const Raphael = new ArqueiroMago('Raphael', 10, 'Fogo', 10, 10)
const Luciano = new Guerreiro('Luciano', 10)


const personagens = [Jorge, Mari, Lipe, Raphael, Luciano]

new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(Jorge, Mari));


