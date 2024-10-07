async function game4() {

    const quiz = [
    {
        title: "В каком году Юрий Гагарин стал первым человеком в мировой истории, совершившим полёт в космическое пространство?",
        answers: ["1. 1957", "2. 1881", "3. 1961"],
        indexTrueAnswer: 2,
    },
    {
        title: "Как называется самая высокая гора в мире?",
        answers: ["1. Эверест", "2. Эльбрус", "3. Алтай"],
        indexTrueAnswer: 0,
    },
    {
        title: "Кто написал картину «Мона Лиза»?",
        answers: ["1. Микеланджело", "2. Леонардо да Винчи", "3. Рафаэль Санти"],
        indexTrueAnswer: 1,
    },
    {
        title: "Какое животное не относится к млекопитающим?",
        answers: ["1. собака", "2. курица", "3. крокодил"],
        indexTrueAnswer: 2,
    },
    ];
    let correctAnswersCount = 0;
    quiz.map(({ answers, indexTrueAnswer, title, }) => {
    const message = `${title}\n${answers.join("\n")}`;
    const response = prompt(message).trim().toLowerCase();
    const trueAnswer = answers[indexTrueAnswer];
    const regexp = new RegExp(`^${response}`);
    const isTrueResponse = regexp.test(trueAnswer);
                if (isTrueResponse) {
                    alert(`Правильный ответ!`);
                    correctAnswersCount++;
                } else {
                    alert("Неправильный ответ!");
                }       
    });

    alert(`Количество правильных ответов: ${correctAnswersCount} из ${quiz.length}`);    
}