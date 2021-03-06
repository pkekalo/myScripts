// For any repeats in code we can use classes & constructor.
// This way we will have less code and have it as more clear code.


// Main functions and variables that MinerUlt(1-4) are using.
class MinerUlt {
	constructor() {
		this.numberOfMines = 0;
		this.magicalDamage = 0;
		this.clearDamage = 0;
		this.eachMineDamage = 0;
		this.magicalResistancePercent = 0;
	} 
	magicalDamageCalculator(mines, callback, magicalResistancePercent) {
		this.changeNumberOfMines(mines);
		this.changeMagicalDamage();
		if (typeof callback === "function") {
    		return callback(magicalResistancePercent);
    	} else {
    		return this.magicalDamage + " magical damage...";
    	}
	}

	changeNumberOfMines(num){
		this.numberOfMines = num;
	}

	changeMagicalDamage() {
		this.magicalDamage = this.numberOfMines * this.eachMineDamage;
	}

	changeMagicalResistancePercent(num) {
		this.magicalResistancePercent = num;
	}

	changeClearDamage() {
		this.clearDamage = this.magicalDamage * (1 - this.magicalResistancePercent/100);
	}

	withMagicalResistDamage(percent) {
		this.changeMagicalResistancePercent(percent);
		this.changeClearDamage();
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
		this.eachMineDamage =  750;	
	}
}


// How it works...

var test1 = new MinerUlt1;

test1.magicalDamageCalculator(2);
//returns "600 magical damage...";

test1.withMagicalResistDamage(2);
//returns "450 clear damage...";

//Bugs: 

// expected to work with callback, but it does not work yet in my expected scope 
// In my case callback is undefined, I will fix it later when I detect th problem
test1.withMagicalResistDamage(2, this.withMagicalResistDamage, 25);
