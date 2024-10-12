//Exercise-1
const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    heading.style.display === 'none' ? heading.style.display = 'block' : heading.style.display = 'none';
});

     //Exercise-2
const description = document.querySelector('.description');
const btnChangeColor = document.querySelector('.btn-color');
btnChangeColor.addEventListener('click', () => {
    description.style.color ='blue';
});

     //Exercise-3
const btnChangeText = document.querySelector('.btn-change-text');
btnChangeText.addEventListener('click', () => {
    document.querySelector('.heading').textContent = 'Привет, мир!';
});

    //Exercise-4
const descriptionElements = document.querySelectorAll('.description');
descriptionElements.forEach(element => {
    element.textContent = 'Измененный текст';
});

    //Exercise-5
const descriptionEl = document.querySelectorAll('.description');
descriptionEl.forEach(element => {
    element.textContent = 'Новый текст';
});

     //Exercise-6
const btnAddElement = document.querySelector('.add-el');
btnAddElement.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    newParagraph.classList.add('addEl');
    document.body.appendChild(newParagraph);
});

    //Exercise-7
const btnDeleteElement = document.querySelector('.btn-remove-el');
btnDeleteElement.addEventListener('click', () => {
    const firstDescriptionElement = document.querySelector('.description');
    firstDescriptionElement.remove();
});


