// Ts program that calculate no of moles & mass of solute in volume
function noOfMoles( molarMass:number, density:number, moles : number, volume2:number , assay:number ){
   var volume1: number = molarMass / density;
    var result2: number =( volume1 * moles * 100 * volume2) /( assay * 1000);
    console.log ("Mass in volume is =", result2);
}
 
noOfMoles(36.5 , 1.2, 1 , 1000 ,37)

