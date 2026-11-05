import { BRANDS as legacyBrands, BIKES, ALL_PARTS, partBrandLabel } from "./catalogSource";

const slug = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const names = new Set([...legacyBrands.map((b) => b.name), ...BIKES.map((b) => b.brand), ...ALL_PARTS.map(partBrandLabel)]);
export const brands = [...names].map((name) => ({
  id: slug(name),
  name,
  ...(legacyBrands.find((brand) => brand.name.toLowerCase() === name.toLowerCase())?.src
    ? { logoUrl: legacyBrands.find((brand) => brand.name.toLowerCase() === name.toLowerCase())!.src }
    : {}),
}));
export const brandIdFor = (name: string) => slug(name);
