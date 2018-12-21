//Different ult lvls functions

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


//callback function 

var withMagicalResist = function (magicalDamage, magicalResistancePercent) {
	let clearDamage = magicalDamage * (1 - magicalResistancePercent/100);
	damage = clearDamage;
	return  damage + " clear damage..."; 
}


//How it works...

minerUltLvl1(4, withMagicalResist, 25);
//shuld return "900 clear damage...";

minerUltLvl1(4);
//shuld return "1200 magical damage...";