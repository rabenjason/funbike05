import { CATEGORIES } from "./catalogSource";
import { HOME_HIGHLIGHTS } from "./highlights";

/** Textes et réglages de présentation propres à la page d'accueil. */
export const homepageContent = {
    hero: {
      localisation: "Madagascar / Motos, équipement, liberté",
      titreLigne1: "Le terrain est",
      titreLigne2: "votre point de départ.",
      description:
        "Sherco, Fantic et TVS. Des motos faites pour aller plus loin, des pièces et de l'équipement pour suivre.",
      sloganPrefix: "Une moto faite pour",
      usages: ["la ville", "le travail", "le cross", "l'enduro", "les voyages", "les balades"],
      boutonCatalogue: "Explorer le catalogue",
      aLaUne: "À la une",
      annee: "2026",
      choisirModele: "Choisir le modèle mis en avant",
      afficherModele: "Afficher",
    },
    univers: {
      surTitre: "Choisir son univers",
      titre: "Pas de mauvaise direction.",
    },
    sherco: {
      surTitre: "L'univers Sherco / À partir de 50 cc",
      titreLigne1: "La première piste",
      titreLigne2: "est la plus belle.",
      description:
        "Découvrez l'esprit Sherco avec Funbike. Pour les jeunes pilotes, les familles et les amoureux du tout-terrain.",
      bouton: "Explorer les motos Sherco",
      imageAlt: "Moto Sherco 50 cc tout-terrain",
    },
    distributeur: {
      surTitre: "Distributeur exclusif / Madagascar",
      titre: "Nos marques officielles.",
      boutonToutVoir: "Tout voir →",
      boutonToutesMotos: "Voir toutes les motos →",
      logoPrefix: "Logo",
    },
    nouveautes: {
      surTitre: "Nouveautés / Arrivages",
      titre: "Frais de l'atelier.",
      description: "Trois nouveautés sélectionnées par l'équipe Funbike. Disponibilités sur demande.",
      tarif: "Tarif",
      boutonCatalogue: "Parcourir le catalogue",
      decouvrirPrefix: "Découvrir",
      // Les produits sont sélectionnés dans src/data/highlights.ts ;
      // leurs fiches restent dans src/data.ts.
    },
    motos: {
      numero: "01 / Motos",
      titre: "À chaque terrain, sa machine.",
      description: "Une sélection de modèles disponibles chez Funbike.",
      bouton: "Toutes les motos",
    },
    atelier: {
      surTitre: "Atelier / Essentiels",
      titre: "Prêt pour la suite.",
      description: "Pièces, casques et blousons : TVS équipe aussi le pilote, pas seulement sa moto.",
      bouton: "Voir tous les équipements",
    },
    partenaires: {
      titre: "Nos partenaires",
      description: "Des marques qui roulent avec nous",
      logoPrefix: "Logo",
    },
  } as const;

export const homepage = {
  ...homepageContent,
  featuredProductIds: HOME_HIGHLIGHTS.map(({ productId }) => productId),
  highlights: HOME_HIGHLIGHTS,
};

/** Cartes de navigation illustrées de l'accueil (pas des catégories catalogue). */
export const homepageCategories = CATEGORIES;
