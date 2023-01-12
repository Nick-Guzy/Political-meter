window.onload = function() {
  assignButtonHandlers();
}

function assignButtonHandlers() {
  document.getElementById('start-button').onclick = function(e) {
    document.getElementById('poll-area').classList.remove('hidden');
    e.target.classList.add('hidden');
    document.getElementById('question').innerText = questions[0].text
  }
  document.getElementById('yes-button').onclick = function(e) {
    handleAnswerClick(true)
  }
  document.getElementById('no-button').onclick = function(e) {
    handleAnswerClick(false)
  }
}

let progress = 0;
let userScore = 0;

function handleAnswerClick(yes) {
  let currentQuestion = questions[progress];
  if (yes) {
    userScore += currentQuestion.score;
  } else {
    userScore += (currentQuestion.score * -1);
  }  
  
  let lastQuestion = progress === questions.length - 1;
  if (lastQuestion) {
    console.log('score is', userScore);
    document.getElementById('poll-area').classList.add('hidden');
    document.getElementById('meter-area').classList.remove('hidden');
    let knobOffset = (userScore * 5) + '%';
    document.querySelector('html').style.setProperty('--meter-knob-offset', knobOffset)
  } else {
    progress++;
    document.getElementById('question').innerText = questions[progress].text;
  }
}

const questions = [
  {
    text: 'Do you hate the poor?',
    score: 1
  },
  {
    text: 'Do you like geese?',
    score: -1
  },
  {
    text: 'Would you adopt a chimp?',
    score: -1
  },
  {
    text: 'Do you own more than four cowboy hats?',
    score: 1
  },
  {
    text: 'Do you enjoy skiing?',
    score: -1
  },
  {
    text: 'Do you own a boat?',
    score: 1
  },
]