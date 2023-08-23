"use strict";
// Ts program that calculate no of moles & mass of solute in volume
function noOfMoles(molarMass, density, moles, volume2, assay) {
    var volume1 = molarMass / density;
    var result2 = (volume1 * moles * 100 * volume2) / (assay * 1000);
    console.log("Mass in volume is =", result2);
}
noOfMoles(36.5, 1.2, 1, 1000, 37);
