//Create an Array on flash cards
const flashcards = [
    { question: 'What is the capital of the United States?', answer: 'Washington, D.C.'},
    { question: 'what is 2+2?', answer: '4'},
    //add more flash cards here
];

//create a variable to store the current flashcard index
//The index is the position of the card in the array
let currentCard=0;
function updateCard(){
    //get the current card object
    const card=document.getElementById('flashcard');
    if(card.classList.contains('flipped')){
        card.textContent = flashcards[currentCard].answer;
    }
    else{
        card.textContent=flashcards[currentCard].question;
    }
}

//init first card
document.getElementById('flashcard').addEventListener('click', function(){
    this.classList.toggle('flipped');
    updateCard();
});

//event listener for the next button
document.getElementById('next').addEventListener('click', function(){
    currentCard = ( currentCard + 1) % flashcards.length;
    const card = document.getElementById('flashcard');
    card.classList.remove('flipped');
    updateCard();
});