const { getScore, getBestScore } = require('./scoreFinder');

describe('Score Finder', () => {
    describe('Get Score', () => {
        it('should return the total score for the game when we have 10 frames', () => {
            const result = getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])

            expect(result).toBe(90);
        });
    })

    describe('Get Best Score', () => {
        it('should return the score for the best game', () => {
            const game1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,]
            const game2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];

            const result = getBestScore([game1, game2]);

            expect(result).toBe(90);
        });
    })
});