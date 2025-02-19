// CONDITIONAL STATEMENTS
// -->Its check the given condition and execute the block of code.
// Example 

const votingage= 18;
const personage =21;

const CheckAge=()=>{

    if(personage>votingage){
        console.log("You are eligible for  voting");
    }
    else if(personage===votingage){
        console.log("Your are exactly eligible for voting");
    }
    else{
        console.log("You are not eligible for  voting.");
    }

}
CheckAge();

// For Loop 
// --> It is used to check the given condition using the every iteration.

const a=10;
for(let i=0;i<a;i++){
    console.log("Hello World!")
}

