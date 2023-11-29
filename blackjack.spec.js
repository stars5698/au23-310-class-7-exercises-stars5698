// Donna Quach, JavaScript 310B, Autumn 2023 
// Class 7 Exercises 

describe("Tests for the BlackJack Game", () => {
    it("should calculate the score of a hand", () => {
        const hand = [
            { displayVal: "Six", val: 6, suit: "hearts"},
            { displayVal: "Seven", val: 7, suit: "hearts"}
        ];

        const result = calcPoints(hand);

        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);
    }); 

    it("should check if there are no aces", () => {
        const hand = [
            { displayVal: "Eight", val: 8, suit: "hearts"},
            { displayVal: "Nine", val: 9, suit: "hearts"},
        ];

        const result = calcPoints(hand);

        expect(result.hasAce).toEqual(false);
        expect(result.total).toEqual(17);
        expect(result.isSoft).toEqual(false);
    }); 

    it("should check if there is 1 ace case (soft)", () => {
        const hand = [
            { displayVal: "Two", val: 2, suit: "hearts"},
            { displayVal: "Three", val: 3, suit: "hearts"},
            { displayVal: "Ace", val: 11, suit: "diamonds"}
        ];

        const result = calcPoints(hand);

        expect(result.hasAce).toEqual(true);
        expect(result.total).toEqual(16);
        expect(result.isSoft).toEqual(true);
    }); 

    it("should check if there is 1 ace case (not soft)", () => {
        const hand = [
            { displayVal: "Eight", val: 8, suit: "hearts"},
            { displayVal: "Nine", val: 9, suit: "clubs"},
            { displayVal: "Ace", val: 11, suit: "hearts"},
            { displayVal: "King", val: 10, suit: "hearts"}
        ];

        const result = calcPoints(hand);

        expect(result.hasAce).toEqual(true);
        expect(result.total).toEqual(28);
        expect(result.isSoft).toEqual(false);

    }); 

    it("should check if there are multiple aces (soft)", () => {
        const hand = [
            { displayVal: "Two", val: 2, suit: "hearts"},
            { displayVal: "Ace", val: 11, suit: "hearts"},
            { displayVal: "Ace", val: 11, suit: "clubs"},
            { displayVal: "Two", val: 2, suit: "spades"}
        ];

        const result = calcPoints(hand);

        expect(result.hasAce).toEqual(true);
        expect(result.total).toEqual(16);
        expect(result.isSoft).toEqual(true);
    }); 

    it("should check if there are multiple aces (not soft)", () => {
        const hand = [
            { displayVal: "Two", val: 2, suit: "hearts"},
            { displayVal: "Ace", val: 11, suit: "hearts"},
            { displayVal: "Ace", val: 11, suit: "clubs"},
            { displayVal: "Nine", val: 9, suit: "spades"}
        ];

        const result = calcPoints(hand);

        expect(result.hasAce).toEqual(true);
        expect(result.total).toEqual(23);
        expect(result.isSoft).toEqual(false);
    }); 
}); 