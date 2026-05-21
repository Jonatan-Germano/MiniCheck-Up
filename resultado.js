const perguntas = document.querySelectorAll(".question");

let perguntaAtual = 0;

mostrarPergunta(perguntaAtual);

function mostrarPergunta(index) {

  perguntas.forEach((pergunta) => {
    pergunta.classList.remove("active");
  });

  perguntas[index].classList.add("active");

  const finalizarBtn = document.getElementById("finalizarBtn");

  if(index === perguntas.length - 1){
    finalizarBtn.style.display = "block";
  } else {
    finalizarBtn.style.display = "none";
  }
}

function proximaPergunta() {

  if(perguntaAtual < perguntas.length - 1){
    perguntaAtual++;
    mostrarPergunta(perguntaAtual);
  }
}

function anteriorPergunta() {

  if(perguntaAtual > 0){
    perguntaAtual--;
    mostrarPergunta(perguntaAtual);
  }
}

function corrigirQuiz() {

  const form = document.getElementById("quizForm");
  const resultado = document.getElementById("resultado");

  let pontuacao = 0;
  const totalPerguntas = perguntas.length;

  for (let i = 1; i <= totalPerguntas; i++) {

    const respostaSelecionada = form.querySelector(`input[name="q${i}"]:checked`);

    if (!respostaSelecionada) {
      resultado.innerHTML = "Responda todas as questões!";
      return;
    }

    pontuacao += Number(respostaSelecionada.value);
  }

  if(pontuacao >= 85){
        resultado.innerHTML = "Parabéns, seu check-up foi bastante positivo, continue com a alimentação equilibrada, rotina de sono e atividades físicas, buscando informações em sites confiáveis, desconfiando de fórmulas mágicas e sempre que possível se consultando.";
    
      }
  if(pontuacao > 50 && pontuacao < 85){
        resultado.innerHTML = "Seu check-up foi bom mas pode ir além, mantenha e amplie a sua conscientização sobre a saúde como um todo: alimentação equilibrada, sono regulado e alguma frequência de atividade física. Desconfie de fórmulas milagrosas e sempre que possível busque orientação médica para entendimento mais profundo.";
      }
  if(pontuacao <= 50){
        resultado.innerHTML = "Seu check-up mostra que pode você melhorar, o primeiro passo é a conscientização, compreender a sua saúde como um todo, biotipo, genética, dificuldades, facilidades, buscando orientação profissional de um médico. Otimize o sono, a alimentação e praticar atividades físicas da melhor maneira possível, desconfie de fórmulas simples para problemas complexos, e busque sentir-se confortável de acordo consigo próprio(a).";
      }
    
}