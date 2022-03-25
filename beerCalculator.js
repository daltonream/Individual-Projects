

function letsDrink(){
    let weight = document.querySelector("#weight").value;
    let isnum = /^-?[0-9]+([.,][0-9]+)?$/.test(weight);
    if (isnum){
        document.querySelector("#errorMessage").hidden = true;
        document.querySelector("#answerField").hidden = false;
        weight = parseFloat(weight,10)
        let madeIt = false;
        let i = 0; 
        let gainedPounds = null 
        do {
            i++;
           
            // Budlight overall weight 1 fl-oz = 1.13 oz wt
             gainedPounds = ((12 * 1.13)  * i) / 16; 
             gainedPounds = parseInt(gainedPounds, 10)
            if (gainedPounds >= (gainedPounds + weight) * .10){
                madeIt = true;
                document.querySelector("#answer").innerHTML = "Number of Beers: " + i;
                document.querySelector("#gainedWeight").innerHTML = "Gained Weight: " + gainedPounds + "lbs";
                document.querySelector("#overallWeight").innerHTML = "Overall Weight: " + (gainedPounds + weight) + "lbs";
                document.querySelector("#overallWeight").hidden = false;
                break;
            }
           
        } while (i < 3000);
        if (madeIt === false){
            document.querySelector("#answer").innerHTML = "Number of Beers: ∞";
            document.querySelector("#gainedWeight").innerHTML = "You would need to drink over 400 beers, I would think you'd die.";
            document.querySelector("#overallWeight").hidden = true;
        }
    
    } else {
        document.querySelector("#errorMessage").hidden = false;
    }
}

function showEquation(){
    if (document.querySelector("#equation").hidden){
        document.querySelector("#equation").hidden = false;
    } else {
        document.querySelector("#equation").hidden = true;
    }
}
