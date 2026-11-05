import type { Part } from "../types/index";
import { TLD, GAERNE, MT_HELMETS, TVS_ACCESSORIES } from "./catalogSource";

/** Visuels de démonstration réutilisés ; références BIHR réelles à confirmer. */
export const BIHR_DEMO_ITEMS: Part[] = [
  {
    id: "bihr-demo-helmet",
    name: "Casque cross BIHR — démonstration",
    price: "Sur devis",
    kind: "bihr",
    category: "Casques",
    image: TLD[0].image,
  },
  {
    id: "bihr-demo-boots",
    name: "Bottes pilote BIHR — démonstration",
    price: "Sur devis",
    kind: "bihr",
    category: "Bottes",
    image: GAERNE[0].image,
  },
  {
    id: "bihr-demo-gloves",
    name: "Gants moto BIHR — démonstration",
    price: "Sur devis",
    kind: "bihr",
    category: "Gants",
    image: TVS_ACCESSORIES[4].image,
  },
  {
    id: "bihr-demo-helmet-road",
    name: "Casque intégral BIHR — démonstration",
    price: "Sur devis",
    kind: "bihr",
    category: "Casques",
    image: MT_HELMETS[0].image,
  },
];
