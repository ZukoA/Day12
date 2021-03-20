function myPetsFunction(pets) {
    myPetsFunction[pets].name;
    return myPetsFunction;
}


var myPetsArray = [
    {
        animalType: "type",
        category: [
            "Dog",
            "Cat",
            "Bird"
        ]
    },
    {
        name: "animalName",
        category: [
                "Pujdo",
                "Maca",
                "Tweety"
        ]
    }
];

console.log(myPetsFunction(1));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
