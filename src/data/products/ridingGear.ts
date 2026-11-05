import { allAccessoryProducts } from "./build";
export const ridingGear = allAccessoryProducts.filter((product) => product.categoryId === "equipements");
