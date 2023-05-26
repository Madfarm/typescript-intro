## null and undefined
how typescript treats these two values will differ based on whether you have strictnullcheks on or off

off {
    - values that might be null or undefined can be access normally
    - null and undefined can be assigned to a property of any type
    - not reccomended
}

on {
    - must be tested for
    - example: 
    function doSomething(x: string | null) {
        if (x === null) {
            // do nothing
        } else {
            console.log("Hello, " + x.toUpperCase());
        }
    }

    
}


you can override the check for null and undefined