const MAX_FRAME_COUNT = 10;
const TOTAL_PINS = 10;

const getScore = (rolls) => {
    const rollCount = rolls.length;

    let totalScore = 0;

    let wasPreviousThrowAStrike = false;
    let wasPreviousThrowASpare = false;

    let frameCount = 1;

    for (let i = 0; i < rollCount; frameCount++) {
        let firstThrowPinsKnocked = rolls[i];
        let secondThrowPinsKnocked = rolls[i + 1];

        let totalPinsKnocked = (firstThrowPinsKnocked + secondThrowPinsKnocked);

        if (frameCount == MAX_FRAME_COUNT) {
            if (firstThrowPinsKnocked == TOTAL_PINS) {
                let thirdThrowPinsKnocked = rolls[i + 2];

                totalScore += (TOTAL_PINS + secondThrowPinsKnocked + thirdThrowPinsKnocked);

                i += 3;
            } else if (totalPinsKnocked == TOTAL_PINS) {
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

        if (totalPinsKnocked < TOTAL_PINS) {
            totalScore += totalPinsKnocked;

            i += 2;
        } else if (firstThrowPinsKnocked == TOTAL_PINS) {
            totalScore += TOTAL_PINS;

            wasPreviousThrowAStrike = true;

            i++;
        } else {
            totalScore += TOTAL_PINS;

            wasPreviousThrowASpare = true;

            i += 2;
        }
    }

    return totalScore;
};

const getBestScore = (games) => games.reduce(
    (bestGameScore, game) => {
        return Math.max(bestGameScore, getScore(game));
    }, 0);

console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
console.log(getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

const game1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,];
const game2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
const game3 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const result = getBestScore([game1, game2, game3]);

console.log(result);

module.exports = {
    getScore,
    getBestScore
};