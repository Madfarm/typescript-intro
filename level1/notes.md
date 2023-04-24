# Intro to Typescript

a language built on top of javascript that adds typing to improve the developer experience

javascript only provides dynamic typing,

function fn(x) {
  return x.flip();
}

this function requires an object to be passed into it that has the flip method and theres no way to tell what this would end up returning without running

## Non-exception Failures
Accessing a property that doesn't exist in a JS object returns undefined, meaning as a developer you would get no feedback if a property wasn't present for some reason

with typescript this throws an error

Static type systems come with the downsides of occassionally limiting what can be expressed in JS but in general will prevent bugs and typos


function flipCoin() {
    // Meant to be Math.random()
    return Math.random < 0.5; 
}

this function would return no error if it was never called, but typescript will show you an error



const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  
} else if (value === "b") {

}


typescript will detect that a and b have no overlap



tsc <filename>.ts - will check the ts file for errors then turn it into a js file and add it to the file structure

even the errors will be converted into the produced js file

--noEmitOnError added to the command will prevent this,
tsc --noEmitOnError<filename>.ts


adding colons and then the data type will tell typescript what data type to expect



a lot of the time typescript will figure out our typing so explicit typing is unnecessary

## Downleveling
typescript converts our typescript into older js
if we want newer js, we use the target flag

tsc --target es2015 <filename>.ts


## Strictness
Typescript attempts to be loose and more opt-in with its checks; however this can be adjusted

TypeScript has several type-checking strictness flags that can be turned on or off, and all of our examples will be written with all of them enabled unless otherwise stated. The strict flag in the CLI, or "strict": true in a tsconfig.json toggles them all on simultaneously

STRICTNESS FLAGS
noImplicitAny - issues an error when a variable's type is implicitly referred to as any
strictNullChecks - forces you to handle null and undefined explicitly