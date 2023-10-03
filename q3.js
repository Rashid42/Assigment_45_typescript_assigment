"use strict";
let firstName = "RaShiD AkRaM";
let case1 = firstName.toLowerCase();
let case2 = firstName.toUpperCase();
console.log(`Lower case = ${case1}`);
console.log(`Upper case = ${case2}`);
function titlecase(firstNameName) {
    let case3;
    case3 = firstNameName.toLowerCase().split(" ");
    for (let i = 0; i < case3.length; i++) {
        case3[i] = case3[i][0].toUpperCase() + case3[i].slice(1);
    }
    console.log(case3.join(" "));
}
titlecase(`Title case = ${firstName}`);
