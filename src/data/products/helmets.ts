import { allAccessoryProducts } from "./build";
export const helmets = allAccessoryProducts.filter((product) => product.categoryId === "casques");
