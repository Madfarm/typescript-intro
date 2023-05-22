## Objects Types
Key-value pairs in an object types can be notated the same as variables

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

this is how you would pass the object into a function


ahhhhhhhhhhhhhhhhh


placing a ? before the property makes it optional

function printName(obj : {first: String; last?: String }): void {
    console.log(obj);
}

printName({first: "Bruhh" })
printName({first: "Bruhh", last: "SDASD"})


both of these are legal

In tradtional Javascript accessing a property that doesn't exist will return undefined
We'll have to check for undefined in Typescript first with optional properties


function printName(obj : {first: String; last?: String }): void {
    console.log(obj.last?.toUpperCase());
}

we need the question mark here to check for undefined

