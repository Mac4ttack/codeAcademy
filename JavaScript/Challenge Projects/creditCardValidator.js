/*
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
// Add your functions below:


//verifies a credit card number based on Luhn Method.
//input as an array 
//returns true or false
const validateCred = arr => {
    let luhnArr = [];
    let j = 0;
    let validCheck = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
    //console.log(arr[i]);

    let isEven = ((j % 2) === 0) ? true : false;
    if (j === 0) {
        luhnArr.push(arr[i]);
    } else if (!isEven) {
        let tempCalc = (arr[i]*2);
        //console.log(tempCalc)

        tempCalc > 9 ? luhnArr.push((tempCalc-9)) : luhnArr.push((tempCalc)) ;
    } else if (isEven && j!== 0) {
        luhnArr.push(arr[i]);
    }
    
    validCheck += luhnArr[j];
    j++;
}
    //console.log(validCheck);
    //console.log(luhnArr);
    return validCheck % 10 === 0 ?  true :  false;
}

//input nested array of credit card numbers
//returns an array of the invalid numbers
const findInvalidCards = nestedArr => {
    let badCards = [];
    for (card in nestedArr) {
        if(!validateCred(nestedArr[card])) {badCards.push(nestedArr[card])}
    }
    console.log(badCards)
    return badCards;
 
}

//input nested array of bad credit card numbers 
//returns an array of which credit card companies had bad numbers in the batch
const idInvalidCardCompanies = nestedArr => {
    let notifyComps = [];
    for (card in nestedArr){
        console.log(nestedArr[card].slice(0,1).toString())
        switch (nestedArr[card].slice(0,1).toString()) {
        case '3': if(!notifyComps.includes('Amex'))                 {notifyComps.push('Amex')};             break;
        case '4': if(!notifyComps.includes('Visa'))                 {notifyComps.push('Visa')};             break;
        case '5': if(!notifyComps.includes('Mastercard'))           {notifyComps.push('Mastercard')};       break;
        case '6': if(!notifyComps.includes('Discover'))             {notifyComps.push('Discover')};         break;
        default: if(!notifyComps.includes('Company not found'))     {notifyComps.push('Company not found')};
        }
    }
    console.log(notifyComps)
    return notifyComps;
}

idInvalidCardCompanies(findInvalidCards(batch));

