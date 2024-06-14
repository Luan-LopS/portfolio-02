function displayDetails(card) {
    var cardContent = document.querySelector('.cardContent');
    cardContent.innerHTML = card.querySelector('.details').innerHTML
    cardContent.style.display='flex'
}

function displayNone() {
    var cardContent = document.querySelector('.cardContent');
    cardContent.style.display='none'
    cardContent.innerHTML = '';
}