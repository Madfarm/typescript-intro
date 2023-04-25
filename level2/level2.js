// let obj: any = { x: 0 };
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
/* Variable Testing */
// const fuck: number[] = [1,2,3,4,5,6, 'sdf'];
// let closeOrNah: boolean = true;
// function iterateAndPrint(list: number[]): string {
//     let output: string = '';
//     list.forEach((item)=>{
//         output += item
//     })
//     return output
// }
// console.log(iterateAndPrint([1,2,3,4]))
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
