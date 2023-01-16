const arr: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);


type person = {
    name: string;
    age: number; 
    student: boolean;
};

const student: person = {
    
        name: "Gugge",
        age: 72, 
        student: false,
    };

console.log(student);


function func (x: string): string {
    return `Hej ${x}`
}
console.log(func(""));


for (let i = 0; i < arr.length; i++) {
    console.log(func(arr[i]));
};









