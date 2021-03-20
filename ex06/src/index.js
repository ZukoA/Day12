function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    var gloveBoxContents = {
        myStorage [ "maps" ];
    };

 return gloveBoxContents;
}

console-log(myNes());
module.exports = myNes;