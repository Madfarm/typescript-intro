## Types
string
number
boolean

Array syntax -
number[] or string[]

any - can be used when you don't want to check for type errors

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


## Defining Variables
let myNum: number = 6;

const name: string = 'Alison Who';

neither one of these example is likely necessary because typescript will infer both types for us

cant't use name or close lmaooo



## Functions
we can define the type on the input and the output

define a type for parameter,
function whatever(numOfGeese: number){

}

defining a type for a return,
funciton whatever(numOfGeese: number): string {

}


function iterateAndPrint(list: number[]): string {
    let output: string = '';
    list.forEach((item)=>{
        output += item
    })

    return output
}


## Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
});


this will give an error even though you haven't expressed any type notation Typescript can pick up typing from the context

this is called textual typing


