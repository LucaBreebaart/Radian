import { Products } from "./products.model";

export interface Recipe {

    id?: number;
    name: string;
    img: string;
    price: number;
    description: string;
    amountCrafted: number;
    products?: Products[];
    isCraftable?: boolean //frontend
}
