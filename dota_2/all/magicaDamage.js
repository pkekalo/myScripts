var magicalResistCalculator = function (magicalDamage, magicalResistancePercent) {
    let clearDamage = magicalDamage * (1 - magicalResistancePercent/100);
    let damage = clearDamage;
    return  damage + " clear damage..."; 
}
//How it works...
withMagicalResist(600, 25);
//returns "450 clear damage...".