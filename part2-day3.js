let costStr = '5000';
let costNum = 5000;
let costComparisonType = (costStr==costNum);
console.log(costComparisonType);

let costComparisonBoth = (costStr===costNum);
console.log(costComparisonBoth);

/* Comparing using "===" is more safe because for KGL
becuase using this method the JavaScriptit compare both the value and the type,
however, in other method only convert the string to number then compare
and we want to make sure that we are comparing product name with product name and we may use
product ID, also price with price*/