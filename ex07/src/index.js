var collection = {
    5439: {
        artist: "ABBA",
    },
    5439: {
        tracks: "Take a Chance on Me",
    },
    2548: {
        artist: "",
    },
    1245: {
        tracks: "Addicted to Love",
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {

}
console.log(updateRecords(collection, id, prop, value));
module.exports = updateRecords;
    