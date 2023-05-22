
// we notate the typing of the properties of the object inside curly braces
// function printCoord(pt: { x: number; y: number }) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }
// // printCoord({ x: 3, y: 7 });

// // const tally = arr.reduce((acc,item) =>{
// //     return {...acc, [item]: (acc[item] || 0)+ 1}
// // }, {})


// function printName(obj : {first: String; last?: String }): void {
//     console.log(obj.last?.toUpperCase);
// }

// printName({first: "Bruhh"})




function letsGooTest(x: number | String): void {

    if (typeof x == "string") console.log(x.toUpperCase())
    else console.log(x)
}

// letsGooTest(22)
// letsGooTest("ASdjWdjfdfsdfsRERfdf")