// For any repeats in code we can use classes & constructor.
// This way we will have less code and have it as more clear code.


// Main functions and variables that MinerUlt(1-4) are using.
class MinerUlt {
	constructor() {
		this.numberOfMines = 0;
		this.magicalDamage = 0;
		this.clearDamage = 0;
		this.eachMineDamage = 0;
	} 

	magicalDamageCalculator(mines, callback, magicalResistancePercent) {
		this.changeNumberOfMines(mines);
		if (typeof callback === "function") {
    		return callback(this.magicalDamage, magicalResistancePercent);
    	} else {
    		this.magicalDamage = this.numberOfMines * this.eachMineDamage;
    		return this.magicalDamage + " magical damage...";
    	}
	}

	changeNumberOfMines(num){
		this.numberOfMines = num;
	}

	withMagicalResistDamage(magical, magicalResistancePercent) {
		this.clearDamage = magical * (1 - magicalResistancePercent/100);
		return  this.clearDamage + " clear damage..."; 
	}
}

// Different Ult lvls classes. The higher lvl of the Ult the more damage it does.

class MinerUlt1 extends MinerUlt {
	constructor() {
		super();
		this.eachMineDamage =  300;
	}
}

class MinerUlt2 extends MinerUlt {
	constructor() {
		super();
		this.eachMineDamage =  450;
	}
}

class MinerUlt3 extends MinerUlt {
	constructor() {
		super();
		this.eachMineDamage =  600;
	}
}

class MinerUlt4 extends MinerUlt {
	constructor() {
		super();
		this.eachMineDamage =  700;	
	}
}


// How it works...

var test1 = new MinerUlt1;

test1.magicalDamageCalculator(2);
//returns "600 magical damage...";