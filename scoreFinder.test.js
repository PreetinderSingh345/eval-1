const { getScore, getBestScore } = require('./scoreFinder');

describe('Score Finder', () => {
    describe('Get Score', () => {
        it('should return the total score for the game when we have 10 frames', () => {
            const result = getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);

            expect(result).toBe(90);
        });

        it('should consider the scenario when we have strike in the 10th frame', () => {
            const result = getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);

            expect(result).toBe(30);
        });

        it('should consider the scenario when we have spare in the 10th frame', () => {
            const result = getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 9]);

            expect(result).toBe(19);
        });
    });

    describe('Get Best Score', () => {
        it('should return the score for the best game', () => {
            const game1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,];
            const game2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
            const game3 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            const result = getBestScore([game1, game2, game3]);

            expect(result).toBe(90);
        });
    });
});