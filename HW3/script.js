function fPrompt(msg1, msg2) {
    return prompt(msg1, msg2);
}

const yourName = fPrompt("Введите своё имя", "Введите имя")
alert("Привет " + yourName + "!");
alert(`Привет ${yourName}!`);//Удобнее предыдущей строки