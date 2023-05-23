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


## Union Types
We can use a  | to define union types where a piece of data may be any of the union members

only operations that can be used for every union member are valid
like you can't use string methods if the type is number | string

function letsGooTest(x: number | String): void {
    console.log(x.toUpperCase())
}

this is not valid code because numbers don't have toUpperCase()

to properly use that method, we'll have to check for which type the argument is before attempting the operation

## Type Aliases
A name for any type - resuable types
syntax is the keyword type then name = type

type name = String;


## Interfaces



