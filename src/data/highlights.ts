/** Sélection éditoriale de la page d'accueil (références vers le catalogue). */
export interface Highlight {
  productId: string;
  badge: string;
  eyebrow: string;
  bullets: string[];
  targetPage: "product" | "equipements";
  targetId?: string;
}

export const HOME_HIGHLIGHTS: Highlight[] = [
  {
    productId: "sherco-sef-250-factory-2026",
    badge: "Nouveauté 2026",
    eyebrow: "Sherco / Enduro",
    bullets: ["Suspensions KYB", "Deux cartographies", "Freinage Galfer"],
    targetPage: "product",
  },
  {
    productId: "tvs-200-4v",
    badge: "Arrivage",
    eyebrow: "TVS / Urbain sportif",
    bullets: ["ABS", "Modes de conduite", "Tableau de bord digital"],
    targetPage: "product",
  },
  {
    // t1 est une référence réelle du catalogue TLD ; la carte mène à la gamme.
    productId: "t1",
    badge: "Collection 2026",
    eyebrow: "Troy Lee Designs / Pilote",
    bullets: ["Coque légère", "Ventilation travaillée", "Graphismes inédits"],
    targetPage: "equipements",
    targetId: "tld",
  },
];
