import { ALL_PARTS, BIKES, partBrandLabel } from "../catalogSource";
import { brandIdFor } from "../brands";
import { modelIdFor } from "../models";
import type { Product } from "../../types/product";
import type { Bike, Part } from "../../types";

const slug = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const typeId = (value: string, fallback: string) => {
  const id = slug(value);
  const aliases: Record<string, string> = { "3-roues": "trois-roues", "pieces-moteur": "pieces-moteur" };
  return aliases[id] ?? (id || fallback);
};

export function motorcycleProduct(bike: Bike): Product {
  const categoryId = "motos";
  return {
    id: bike.id, name: bike.name, brandId: brandIdFor(bike.brand), categoryId,
    productTypeId: bike.family === "Off-road" ? (bike.name.toLowerCase().includes("trail") ? "road-trail" : "enduro") : bike.family === "3 roues" ? "trois-roues" : "urbain", modelId: modelIdFor(bike.name),
    description: bike.desc, images: [bike.image, ...(bike.gallery ?? []).filter((url) => url !== bike.image)].map((url, position) => ({
      id: `${bike.id}-image-${position + 1}`, url, altText: bike.alt, isMain: position === 0, position,
    })),
    specifications: bike.specs.map(({ label, value }) => ({ key: label, value })),
    status: "PUBLISHED", price: bike.price, ...(bike.tag ? { badge: bike.tag, tags: [bike.tag] } : {}), family: bike.family,
  };
}

const categoryForPart = (part: Part) => {
  if (part.kind === "piece") return "pieces-detachees";
  if (part.kind === "mt" || part.category === "Casques") return "casques";
  if (part.kind === "tvs" && part.category === "Pièces") return "pieces-detachees";
  if (part.category === "Pièces") return "pieces-detachees";
  return "equipements";
};
const typeForPart = (part: Part, categoryId: string) => {
  if (part.partType) return typeId(part.partType, "piece-diverse");
  if (categoryId === "casques") return "casque";
  if (categoryId === "pieces-detachees") return "piece-diverse";
  if (part.category === "Bottes") return "bottes";
  if (part.category === "Blousons") return "protection";
  if (part.category === "Gants") return "protection";
  return "equipement-pilote";
};

export function accessoryProduct(part: Part): Product {
  const categoryId = categoryForPart(part);
  const brandName = part.kind === "piece" && part.compatibleBrand && part.compatibleBrand !== "Universal"
    ? part.compatibleBrand : partBrandLabel(part);
  return {
    id: part.id, name: part.name, brandId: brandIdFor(brandName), categoryId,
    productTypeId: typeForPart(part, categoryId), description: part.desc ?? "",
    images: [part.image, ...(part.gallery ?? []).filter((url) => url !== part.image)].map((url, position) => ({
      id: `${part.id}-image-${position + 1}`, url, altText: part.name, isMain: position === 0, position,
    })),
    specifications: (part.specs ?? []).map(({ label, value }) => ({ key: label, value })),
    status: "PUBLISHED", price: part.price, ...(part.sourceUrl ? { sourceUrl: part.sourceUrl } : {}),
    ...(part.compatibleBrand ? { compatibleBrandId: brandIdFor(part.compatibleBrand) } : {}),
    legacyKind: part.kind,
  };
}

export const allMotorcycleProducts = BIKES.map(motorcycleProduct);
export const allAccessoryProducts = ALL_PARTS.map(accessoryProduct);
