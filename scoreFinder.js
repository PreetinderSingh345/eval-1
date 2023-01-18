const getScore = (rolls) => {
    let rollCount = rolls.length;

    let totalScore = 0;

    let wasPreviousThrowAStrike = false;
    let wasPreviousThrowASpare = false;

    let frameCount = 1;

    for (let i = 0; i < rollCount; frameCount++) {
        let firstThrowPinsKnocked = rolls[i];
        let secondThrowPinsKnocked = rolls[i + 1];

        let totalPinsKnocked = (firstThrowPinsKnocked + secondThrowPinsKnocked);

        if (frameCount == 10) {
            if (firstThrowPinsKnocked == 10) {
                let thirdThrowPinsKnocked = rolls[i + 2];

                totalScore += (10 + secondThrowPinsKnocked + thirdThrowPinsKnocked);

                i += 3;
            } else if (totalPinsKnocked == 10) {
                let thirdThrowPinsKnocked = rolls[i + 2];

                totalScore += (totalPinsKnocked + thirdThrowPinsKnocked);

                i += 3;
            } else {
                totalScore += totalPinsKnocked;

                i += 2;
            }

            if (i < rollCount) {
                throw new Error('Cannot have more than 10 frames');
            }

            continue;
        }

        if (wasPreviousThrowAStrike && firstThrowPinsKnocked != 10) {
            totalScore += totalPinsKnocked;

            wasPreviousThrowAStrike = false;
        } else if (wasPreviousThrowASpare) {
            totalScore += firstThrowPinsKnocked;

            wasPreviousThrowASpare = false;
        }

        if (totalPinsKnocked < 10) {
            totalScore += totalPinsKnocked;

            i += 2;
        } else if (firstThrowPinsKnocked == 10) {
            totalScore += 10;

            wasPreviousThrowAStrike = true;

            i++;
        } else {
            totalScore += 10;

            wasPreviousThrowASpare = true;

            i += 2;
        }
    }

    return totalScore;
};

const getBestScore = (games) => {
    let bestGameScore = 0;

    games.forEach(roll => {
        const currGameScore = getScore(roll);

        if (currGameScore > bestGameScore) {
            bestGameScore = currGameScore;
        }
    });

    return bestGameScore;
};

console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
console.log(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

module.exports = {
    getScore,
    getBestScore
};