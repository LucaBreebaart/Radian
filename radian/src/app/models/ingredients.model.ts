export interface Ingredients {
    id?: number;
    name: string;
    sku: string;
    category: string;
    icon: string;
    description: string;
    stock: number;
    warehouseId?: number; // Add warehouseId to represent the foreign key relationship
}
