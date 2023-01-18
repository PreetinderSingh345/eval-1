const getScore = (rolls) => {
    let rollCount = rolls.length;

    let totalScore = 0;

    let wasPreviousThrowAStrike = false;
    let wasPreviousThrowASpare = false;

    for (let i = 0; i < rollCount; i += 2) {
        let firstThrowPinsKnocked = rolls[i];
        let secondThrowPinsKnocked = rolls[i + 1];

        let totalPinsKnocked = (firstThrowPinsKnocked + secondThrowPinsKnocked);

        if (wasPreviousThrowAStrike && firstThrowPinsKnocked != 10) {
            totalScore += totalPinsKnocked;

            wasPreviousThrowAStrike = false;
        } else if (wasPreviousThrowASpare) {
            totalScore += firstThrowPinsKnocked;

            wasPreviousThrowASpare = false;
        }

        if (totalPinsKnocked < 10) {
            totalScore += totalPinsKnocked
        } else if (firstThrowPinsKnocked === 10) {
            totalScore += 10;

            wasPreviousThrowAStrike = true;
        } else {
            totalScore += 10;

            wasPreviousThrowASpare = true;
        }
    }

    return totalScore;
}

const getBestScore = (games) => {
    let bestGameScore = 0;

    games.forEach(roll => {
        const currGameScore = getScore(roll);

        if (currGameScore > bestGameScore) {
            bestGameScore = currGameScore;
        }
    });

    return bestGameScore;
}

console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScore([, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
console.log(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

module.exports = {
    getScore,
    getBestScore
};