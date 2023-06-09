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
Declares an object's type structure

interface Dog {
  property: type,
  property: type
}

interfaces vs type aliases
interfaces can be extended

type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

interfaces can be changed and added too

Prior to TypeScript version 4.2, type alias names may appear in error messages, sometimes in place of the equivalent anonymous type (which may or may not be desirable). Interfaces will always be named in error messages.
Type aliases may not participate in declaration merging, but interfaces can.
Interfaces may only be used to declare the shapes of objects, not rename primitives.
Interface names will always appear in their original form in error messages, but only when they are used by name.
For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.



We can define values literally like
let x: 6 = 6;

and they can be unionized

let x: 6 | 7 | 8 = 7;


literals can also be used in a union with non-literal types

let x: 6 | string = "auto";


when you assign something a value, typescript will infer the type based on that value
when we need to force typescript to take an object as type literals we can use as const at the end

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.


change that to this,
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);


