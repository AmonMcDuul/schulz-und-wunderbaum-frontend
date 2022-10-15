export class Seeding{
    constructor() {}
    seedArmor(){
        var data = [{id: 1, name: "Shield", description: "A simple shield", defense: 10},
        {id: 2, name: "BetterShield", description: "A better shield", defense: 25},
        {id: 3, name: "SuperShield", description: "A super shield", defense: 50}]
        return data
    }

    seedDrugs(){
        var data = [{id: 1, name: "Weed", description: "Weed description", basePrice: 5},
        {id: 2, name: "Hash", description: "Hash description", basePrice: 6},
        {id: 3, name: "Xtc", description: "Xtc description", basePrice: 3}]
        return data
    }

    seedHighScores(){
        var data = [{id: 1, score: 100, creationDate: new Date()},
            {id: 2, score: 250, creationDate: new Date()},
            {id: 3, score: 485, creationDate: new Date()}]
        return data
    }

    seedItems(){
        var data = [{id: 1, name: "Item1", description: "Item1 description"},
        {id: 2, name: "Item2", description: "Item2 description"},
        {id: 3, name: "Item3", description: "Item3 description"}]
        return data
    }

    seedLocations(){
        var data = [{id: 1, location: "Halsteren"},
        {id: 2, location: "Sesamstraat"},
        {id: 3, location: "Disneyland"}]
        return data
    }

    seedWeapons(){
        var data = [{id: 1, name: "BareFist", description: "Fight with bare fists", damage: 15},
        {id: 2, name: "Knife", description: "Fight with a knife", damage: 30},
        {id: 3, name: "Pistol", description: "Fight with a pistol", damage: 55}]
        return data
    }

}