import { BIKES } from "./catalogSource";
import { brandIdFor } from "./brands";

const slug = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const models = BIKES.map((bike) => ({
  id: slug(bike.name),
  name: bike.name,
  brandId: brandIdFor(bike.brand),
}));
export const modelIdFor = (name: string) => slug(name);
