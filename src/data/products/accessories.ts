import { allAccessoryProducts } from "./build";
export const accessories = allAccessoryProducts.filter((product) => product.categoryId === "accessoires");
