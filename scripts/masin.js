function displayDetails(card) {
    var cardContent = document.querySelector('.cardContent');
    cardContent.style.display='block'
    cardContent.innerHTML = card.innerHTML;
}

function displayNone() {
    var cardContent = document.querySelector('.cardContent');
    cardContent.style.display='none'
    cardContent.innerHTML = '';
}