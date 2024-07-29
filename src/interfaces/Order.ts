import {Product} from "./Product";

export interface Order {
    id: number;
    products: Product[];
    date: Date;
}
