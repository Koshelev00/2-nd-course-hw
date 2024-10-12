// напишите генератор случайных цветов для фона страницы
function game6() {
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    

}

alert(`Я сгенерировал случайный код цвета: ${getRandomColor()}`);
}