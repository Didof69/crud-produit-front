import { Category } from "./category";

export interface Product {
    product_id?: number;
    product_name: string;
    price: string;
    quantity: number
    category_id: number;
    category: Category;
}
