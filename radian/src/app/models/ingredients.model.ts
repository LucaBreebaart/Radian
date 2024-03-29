export interface Ingredients {
    id?:number; //the id can be null, because sql will generate for us
    name: string;
    category: string;
    icon: string;
    description:string;
    stock: number;
}
