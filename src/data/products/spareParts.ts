import { allAccessoryProducts } from "./build";
export const spareParts = allAccessoryProducts.filter((product) => product.categoryId === "pieces-detachees");
