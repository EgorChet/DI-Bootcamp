function checkYear() {
    const userAnswer = Number(prompt("Give me a year"));
    const output = userAnswer > 2000 && userAnswer < 2100 ? "You are in the 21st century" : "You live in rhe middle age";
    console.log(output);
}

checkYear()