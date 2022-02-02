const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const youwinsScoreSpan = document.querySelector('[data-wins-score]')
const drawScoreSpan = document.querySelector('[data-draw-score]')
const SELECTIONS = [
    
  {
    name: 'rock', beats: 'scissors'  },
  {
    name: 'paper',beats: 'rock'  },
  {
    name: 'scissors', beats: 'paper'  }
]
alert( "Are you ready for the hardest game ever played? press ok to try!")
selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    playgame(selection)})
})

function playgame(selection) {
  const computerSelection = randomSelection()
  const you = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  const draw = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, you)
  addSelectionResult(selection, draw)

  if (you) incrementScore(youwinsScoreSpan) 
  if (computerWinner) incrementScore(computerScoreSpan) 
  if (draw)alert("You Lost");  incrementScore(drawScoreSpan)
}
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1 
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
   div.innerText = selection.innerText
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner')
  if (draw) div.classList.add('draw')}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() *3);
    return SELECTIONS[randomIndex];
  }
  

function isWinner(selection,  opponentSelection) {
  return selection.beats === opponentSelection.name;
  
}

function draw(selection,  opponentSelection) {
    return  selection.beats == opponentSelection.name;
  }
  
  const element = document.getElementById("rules");
element.addEventListener("click", function() {
  document.getElementById("therules").innerHTML = "ROCK BEATS SICCORS , SICCORS BEATS PAPER & PAPER BEATS ROCK!";
});
  