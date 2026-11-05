import { motorcycles } from "./motorcycles";
import { spareParts } from "./spareParts";
import { helmets } from "./helmets";
import { ridingGear } from "./ridingGear";
import { accessories } from "./accessories";
import type { Product } from "../../types/product";

export { motorcycles, spareParts, helmets, ridingGear, accessories };
export const products: Product[] = [...motorcycles, ...spareParts, ...helmets, ...ridingGear, ...accessories];
export const findProduct = (id?: string) => id ? products.find((product) => product.id === id) : undefined;
