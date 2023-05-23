
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




function letsGooTest(x: number | string): void {

    if (typeof x == "string") console.log(x.toUpperCase())
    else console.log(x)
}

// letsGooTest(22)
// letsGooTest("ASdjWdjfdfsdfsRERfdf")


type name =  string;

function printName(str: name): name {
    return str
}

// console.log(printName("catty"))

interface Cat {
    favFood: string,
    age: number
}

let manny: Cat = {
    favFood: "Lasaga",
    age: 4
}

function learnCat(cat: Cat): Cat{
    return cat
}


// console.log(learnCat(manny))


let litNum: 6 | 7 | 8 = 6;

let theFuck: 6 | string | false = "auth"