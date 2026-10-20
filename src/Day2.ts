// TypeScript Foundation

// 1 Variables and Data Types
// let declares a variable that can be reassigned.
// const — declares a binding that cannot be reassigne

// String 
let username: string = "Kevin";

// Number (INT)
let age: number = 25;

// BOOLEAN 
let isSoftwareEngineer: boolean = true;

// TypeInterface
let framework = "NextJS";

// Const
const Project: string = "ForgeKeep";
const ProjectName = "ForgeKeep";

// 2 Arrays and Tuples

const grades: number[] = [95, 80, 98];
const carname: string[] = ["Tesla, Civic, Raptor"];



function calculateTotal (
    price: number,
    quantity: number,
): number {
   return price * quantity;
}

const Items = calculateTotal(2500, 5);

console.log(Items);