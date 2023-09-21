const getClassUm = document.querySelector(".um");
const getSideUm = document.querySelector(".side-one")
const getClassDois = document.querySelector(".dois")
const getClassTres = document.querySelector(".tres")
const getClassQuatro = document.querySelector(".quatro")
const getClassCinco = document.querySelector(".cinco")
const getClassSeis = document.querySelector(".seis")
const getImg = document.querySelector(".logo")

function adicionarConteudo(elementoAlvo, conteudoHTML) {
  elementoAlvo.innerHTML = conteudoHTML;
}

function configurarListeners() {
  getClassUm.addEventListener('click', () => {
    adicionarConteudo(getSideUm, `
      <div class="zoro">
        <h1>Roronoa Zoro</h1>
        <div class="personagem-text">
          <p>Roronoa Zoro é o espadachim principal do Bando do Chapéu de Palha e um dos membros mais icônicos da tripulação de Luffy.</p>
          <p>Ele sonha em se tornar o espadachim mais forte do mundo e está constantemente aprimorando suas habilidades de esgrima.</p>
          <p>Zoro é conhecido por sua personalidade calma e foco, especialmente durante batalhas.</p>
        </div>
      </div>
    `);
  });

  getClassDois.addEventListener('click', () => {
    adicionarConteudo(getSideUm, `
      <div class="nami">
        <h1>Nami</h1>
        <div class="personagem-text">
          <p>Nami é a navegadora do Bando do Chapéu de Palha e desempenha um papel vital na tripulação.</p>
          <p>Ela é extremamente talentosa em cartografia e navegação, buscando criar um mapa completo do mundo para cumprir o sonho de sua mãe.</p>
          <p>Nami é conhecida por sua inteligência, habilidades de negociação e dedicação à tripulação.</p>
        </div>
      </div>
    `);
  });

  getClassTres.addEventListener('click', () => {
    adicionarConteudo(getSideUm, `
      <div class="luffy">
        <h1>Monkey D. Luffy</h1>
        <div class="personagem-text">
          <p>Monkey D. Luffy é o capitão do Bando do Chapéu de Palha e o protagonista da série.</p>
          <p>Ele possui o poder da Fruta do Diabo Gomu Gomu, que lhe permite esticar seu corpo como borracha.</p>
          <p>Luffy sonha em se tornar o Rei dos Piratas e está disposto a enfrentar qualquer desafio para alcançar seu objetivo.</p>
        </div>
      </div>
    `);
  });

  getClassQuatro.addEventListener('click', () => {
    adicionarConteudo(getSideUm, `
      <div class="shanks">
        <h1>Shanks</h1>
        <div class="personagem-text">
          <p>Shanks é um dos Yonkou, os quatro piratas mais poderosos do mundo.</p>
          <p>Ele é conhecido por sua personalidade carismática e foi o mentor de Luffy durante sua infância.</p>
          <p>Shanks possui uma grande influência no Novo Mundo e é respeitado por piratas e marinheiros.</p>
        </div>
      </div>
    `);
  });

  getClassCinco.addEventListener('click', () => {
    adicionarConteudo(getSideUm, `
      <div class="sanji">
        <h1>Sanji</h1>
        <div class="personagem-text">
          <p>Sanji é o cozinheiro do Bando do Chapéu de Palha e um dos membros mais valiosos da tripulação.</p>
          <p>Ele é um mestre nas artes marciais e suas pernas são armas mortais, usando uma técnica chamada "Black Leg Style".</p>
          <p>Além disso, Sanji é conhecido por seu respeito pela culinária e por ser cavalheiro com as mulheres.</p>
        </div>
      </div>
    `);
  });

  getClassSeis.addEventListener('click', () => {
    adicionarConteudo(getSideUm, `
      <div class="ace">
        <h1>Portgas D. Ace</h1>
        <div class="personagem-text">
          <p>Portgas D. Ace era o irmão mais velho de Luffy e filho de Gol D. Roger, o Rei dos Piratas.</p>
          <p>Ele foi o comandante da 2ª divisão dos Piratas do Barba Branca e possuía poderes da Fruta do Diabo Mera Mera, que lhe permitia controlar o fogo.</p>
          <p>Ace era um pirata famoso e tinha uma grande influência no mundo pirata até sua trágica morte.</p>
        </div>
      </div>
    `);
  });

}

configurarListeners();


