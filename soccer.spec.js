// Donna Quach, JavaScript 310B, Autumn 2023
// Class 7 Exercises

describe("Tests for the Soccer Game", () => {
    describe("tests for the getTotalScore function", () => {
        it("should return an accurate total score for a string input", () => {
            const result = getTotalPoints("wwdlw");

            expect(result).toEqual(10);
        });
    });

    describe("tests for the orderTeams function", () => {
        it("should return an accurate list of teams with their corresponding score", () => {
            const result = orderTeams({name: 'Sounders', results: 'wwdlw'});

            expect(result).toEqual("Sounders: 10");
        });
    });
});