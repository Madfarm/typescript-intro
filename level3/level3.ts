
// we notate the typing of the properties of the object inside curly braces
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// const tally = arr.reduce((acc,item) =>{
//     return {...acc, [item]: (acc[item] || 0)+ 1}
// }, {})
