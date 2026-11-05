export * from "./brands";
export * from "./categories";
export * from "./productTypes";
export * from "./models";
export * from "./products";
export * from "./promotions";
export * from "./homepage";

// Compatibility views for existing UI while components migrate to Product.
export {
  LOGO, BRANDS, BIKES, PARTS, TVS_PARTS, SHERCO_PARTS,
  FANTIC_PARTS, SPARE_PARTS, TLD, TVS_ACCESSORIES, GAERNE, MT_HELMETS,
  GEAR_ITEMS, ALL_PARTS, findPart, partBrandLabel, partFamily,
} from "./catalogSource";
export type { Bike, Part, Brand, Category, PartType, AccessoryCategory } from "../types";
export type { Product } from "../types/product";
