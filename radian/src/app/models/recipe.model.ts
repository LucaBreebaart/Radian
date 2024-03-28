import { Products } from "./products.model";

export interface Recipe {

    id?: number;
    name: string;
    description: string;
    amountCrafted: number;
    products?: Products[];
    isCraftable?: boolean //frontend
}
