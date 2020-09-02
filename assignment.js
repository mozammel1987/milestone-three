// feetToMile
function feetToMile(feet){
    if (feet < 0) {
        return "Feet can't be negetive, you know!";
    } else {
        let mile = feet / 5280;
        return mile.toFixed(2);
    }
}



// woodCalculator
function woodCalculator(chair, table, bed){
    if (chair + table + bed < 0){
        return "Number of furnitures can't be negetive, you know!"
    } else {
        let chairWoodCount = chair * 1;
        let tableWoodCount = table * 3;
        let bedWoodCount = bed * 5;

        let sumOfWood = chairWoodCount + tableWoodCount + bedWoodCount;
        return sumOfWood;
    }
}




//brickCalculator
function brickCalculator(floor){
    const brickCount = 1000; 
    let brickResult;
    if (floor < 0){
        return "Number of floors can't be negetive, you know!"
    } else if (floor <= 10){
        brickResult = floor * brickCount * 15;
        return brickResult;
    } else if (floor > 10 && floor <= 20){
        let firstTenResult = 150000;
        let afterTenResult = (floor-10) * brickCount * 12;
        brickResult = firstTenResult + afterTenResult;
        return brickResult;
    } else {
        let FirstTwentyResult = 270000;
        let afterTwentyResult = (floor-20) * brickCount * 10; 
        brickResult = FirstTwentyResult + afterTwentyResult;
        return brickResult;
    }
}



//tinyFriend
function tinyFriend(names){
    let smallestName = names[0];
    for (let i =0; i<smallestName.length; i++){
        let friendName = names[i];
        if (friendName.length < smallestName.length){
            smallestName = friendName;
            return smallestName;
        }
    }
}