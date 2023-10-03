// function findDuplicates(firstString, secondString){
//     let MIN_LEANGHT; 
//     let unitedString = '';
//     if(firstString.length>secondString.length){
//         MIN_LEANGHT=secondString.length;
//     }else{
//             MIN_LEANGHT=firstString.length;
//          }
//             for(let i = 0; i < MIN_LEANGHT; i++){
//                 if(firstString[i]===secondString[i]){
//                 unitedString+=firstString[i];
//                 }else{unitedString+='';}
//             }return unitedString; 
// }

function findDuplicates(firstString, secondString){
    let firstStringUpper = firstString.toUpperCase();
    let secondStringUpper = secondString.toUpperCase();
    let MIN_LEANGHT; 
    let unitedString = '';
    if(firstString.length>secondString.length){
        MIN_LEANGHT=secondString.length;
    }else{
            MIN_LEANGHT=firstString.length;
         }
            for(let i = 0; i < MIN_LEANGHT; i++){
                if(firstStringUpper[i]===secondStringUpper[i]){
                unitedString+=firstStringUpper[i];
                }else{unitedString+='';}
            }return unitedString; 
}


function isValidData(value){
    return !isFinite(value);
}


function keepWithoutChange(data){
    return data;
}


function getUserInput(message, transformdata, isValid){
    let userInput;
    let isCancelled = false;

    do{
       const rawUserInput = prompt(message,)
        isCancelled = rawUserInput == null;
        userInput = isCancelled ? null : transformdata(rawUserInput);
    }while(isCancelled || !isValid(userInput));
return userInput;
}


const string1 = getUserInput('Enter first string', keepWithoutChange, isValidData);
const string2 = getUserInput('Enter second string', keepWithoutChange, isValidData);
const duplicatedSymbols = findDuplicates(string1, string2);
alert(duplicatedSymbols);



    // for(const char of firstString){
    //     firstStringArray[COUNTER_FOR_ARRAY] = char;
    //     COUNTER_FOR_ARRAY++;
    // }
    // for(const char of secondString){
    //     secondStringArray[COUNTER_FOR_ARRAY] = char;
    //     COUNTER_FOR_ARRAY++;
    // }