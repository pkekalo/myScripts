// Initial damage is always 0 utill you do damage.
var damage = 0;

// Different Ult lvls functions. The higher lvl of the Ult the more damage it does.

var minerUltLvl1 = function (numberOFMines, callback, magicalResistancePercent) {
    var damage = numberOFMines * 300;
    if (typeof callback === "function") {
         return callback(damage, magicalResistancePercent);
    } else {
        return damage + " magical damage...";
    }
}

var minerUltLvl2 = function (numberOFMines, callback, magicalResistancePercent) {
    var damage = numberOFMines * 450;
    if (typeof callback === "function") {
         return callback(damage, magicalResistancePercent);
    } else {
        return damage + " magical damage...";
    }
}

var minerUltLvl3 = function (numberOFMines, callback, magicalResistancePercent) {
    var damage = numberOFMines * 600;
    if (typeof callback === "function") {
         return callback(damage, magicalResistancePercent);
    } else {
        return damage + " magical damage...";
    }
}

var minerUltLvl4 = function (numberOFMines, callback, magicalResistancePercent) {
    var damage = numberOFMines * 750;
    if (typeof callback === "function") {
         return callback(damage, magicalResistancePercent);
    } else {
        return damage + " magical damage...";
    }
}


// Callback function for minerUltLvl4(1-4) to calculate damage after resistance

var withMagicalResist = function (magicalDamage, magicalResistancePercent) {
    let clearDamage = magicalDamage * (1 - magicalResistancePercent/100);
    damage = clearDamage;
    return  damage + " clear damage..."; 
}

//Create Spell Amplification function 


//How it works...

minerUltLvl1(4, withMagicalResist, 25);
//returns "900 clear damage...";

minerUltLvl1(4);
//returns "1200 magical damage...";