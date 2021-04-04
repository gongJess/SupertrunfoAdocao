var cartaMeg = {
    nome: "Meg - 1 ano",
    imagem: "imagens/meg.png",
    atributos: {
        amor: 100,
        apetite: 60,
        energia: 90,
        carência: 20,
        sociabilidade: 50
    }
}

var cartaBaguera = {
    nome: "Baguera - 5 meses",
    imagem: "imagens/baguera.png",
    atributos: {
        amor: 100,
        apetite: 30,
        energia: 100,
        carência: 90,
        sociabilidade: 70
    }
}

var cartaBolota = {
    nome: "Bolota - 9 anos",
    imagem: "imagens/bolota.png",
    atributos: {
        amor: 100,
        apetite: 100,
        energia: 20,
        carência: 80,
        sociabilidade: 80
    }
}

var cartaBranquinha = {
    nome: "Branquinha - 3 meses",
    imagem: "imagens/branquinha.png",
    atributos: {
        amor: 100,
        apetite: 30,
        energia: 100,
        carência: 60,
        sociabilidade: 60
    }
}

var cartaCacau = {
    nome: "Cacau - 3 meses",
    imagem: "imagens/cacau.png",
    atributos: {
        amor: 100,
        apetite: 60,
        energia: 90,
        carência: 80,
        sociabilidade: 100
    }
}

var cartaFucin = {
    nome: "Fucin - 5 anos",
    imagem: "imagens/fucin.png",
    atributos: {
        amor: 100,
        apetite: 50,
        energia: 40,
        carência: 50,
        sociabilidade: 90
    }
}

var cartaFumaca = {
    nome: "Fumaça - 2 anos",
    imagem: "imagens/fumaca.png",
    atributos: {
        amor: 100,
        apetite: 70,
        energia: 40,
        carência: 80,
        sociabilidade: 80
    }
}

var cartaPitoco = {
    nome: "Pitoco - 1 ano",
    imagem: "imagens/pitoco.png",
    atributos: {
        amor: 100,
        apetite: 40,
        energia: 70,
        carência: 80,
        sociabilidade: 10
    }
}

var cartaSpike = {
    nome: "Spike - 9 meses",
    imagem: "imagens/spike.png",
    atributos: {
        amor: 100,
        apetite: 90,
        energia: 100,
        carência: 90,
        sociabilidade: 60
    }
}

var cartaTico = {
    nome: "Tico - 40 dias",
    imagem: "imagens/tico.png",
    atributos: {
        amor: 100,
        apetite: 50,
        energia: 70,
        carência: 90,
        sociabilidade: 60
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMeg, cartaBaguera, cartaBolota, cartaBranquinha, cartaCacau, cartaFucin, cartaFumaca, cartaPitoco, cartaSpike, cartaTico]
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = 'Jogador ' + pontosJogador + ' / ' + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="imagens/carta.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' checked>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo!")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você ganhou!! Aproveite para conhecer um pouco mais sobre os pets para adoação clicando <a href="http://www.instagram.com">AQUI</a>.</p>'
        } else if (pontosJogador < pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você perdeu!! Aproveite para conhecer um pouco mais sobre os pets para adoação clicando <a href="http://www.instagram.com">AQUI</a>.</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Tivemos um empate! Aproveite para conhecer um pouco mais sobre os pets para adoação clicando <a href="http://www.instagram.com">AQUI</a>.</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true


    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="imagens/carta.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div> <div id='carta-maquina' class='carta'></div>`
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}