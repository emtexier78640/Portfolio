function updateCardPositions(containerId, cardClass) {
    const cards = document.querySelectorAll(`#${containerId} .${cardClass}`);
    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
        card.style.transform = `translate(0, 0)`;
    });
}

document.querySelectorAll('#cardContainer .card').forEach(card => {
    card.addEventListener('click', () => {
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.appendChild(cardContainer.firstElementChild);
        updateCardPositions('cardContainer', 'card');
    });
});

document.querySelectorAll('#cardsContainer .cards').forEach(card => {
    card.addEventListener('click', () => {
        const cardContainer = document.getElementById('cardsContainer');
        cardContainer.appendChild(cardContainer.firstElementChild);
        updateCardPositions('cardsContainer', 'cards');
    });
});

updateCardPositions('cardContainer', 'card');
updateCardPositions('cardsContainer', 'cards');

bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
});

document.getElementById('Engage1').addEventListener('click', function() {
    document.getElementById('rectangle1').classList.toggle('expanded');
});
document.getElementById('Engage2').addEventListener('click', function() {
    document.getElementById('rectangle2').classList.toggle('expanded');
});
document.getElementById('Engage3').addEventListener('click', function() {
    document.getElementById('rectangle3').classList.toggle('expanded');
});