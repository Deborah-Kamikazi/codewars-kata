let balance = 30000;
let isActive = false;
let checkBalance= true;
if(checkBalance===true){
    if(isActive===true && balance>0){
        console.log("your balance is",balance);
    }
    else if(isActive===false){
        console.log("your account is nolonger active");
    }
    elseif(isActive===true && balance===0) { 
        console.log("your account is empty");
    }
}
else {
    console.log("your is negative plz contact the bank");
   }