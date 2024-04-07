// export interface Ingredients {
//     id?:number; //the id can be null, because sql will generate for us
//     name: string;
//     sku: string;
//     category: string;
//     icon: string;
//     description:string;
//     stock: number;
// }

export interface Ingredients {
    id?: number; 
    name: string;
    sku: string;
    category: string;
    icon: string;
    description: string;
    stock: number;
    durban: number; 
    pretoria: number; 
    capeTown: number; 
}
