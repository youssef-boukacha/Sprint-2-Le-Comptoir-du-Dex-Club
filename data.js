// =============================================================
// data.js — les cartes du Comptoir du Dex Club (fourni, NE PAS MODIFIER)
// =============================================================
// Chaque carte :
//   id          nombre unique (1, 2, 3…) — on l'affiche « #001 »
//   nom         nom de la créature
//   type        "Feu" | "Eau" | "Plante" | "Électrik"
//   rarete      "Commune" | "Rare" | "Légendaire"
//   prix        prix d'une carte, en DH
//   stock       nombre d'exemplaires disponibles au comptoir (0 = rupture)
//   image       chemin de l'image
//   description une phrase pour la fiche détaillée
// =============================================================

export const TYPES = ["Feu", "Eau", "Plante", "Électrik"];
export const RARETES = ["Commune", "Rare", "Légendaire"];

export const cards = [
  { id: 1, nom: "Emberkit", type: "Feu", rarete: "Commune", prix: 12, stock: 8, image: "images/emberkit.svg", description: "Un petit renard dont la queue s'enflamme quand il est content." },
  { id: 2, nom: "Cindrake", type: "Feu", rarete: "Rare", prix: 30, stock: 4, image: "images/cindrake.svg", description: "Il crache des braises pour éclairer les grottes la nuit." },
  { id: 3, nom: "Pyrolynx", type: "Feu", rarete: "Légendaire", prix: 110, stock: 1, image: "images/pyrolynx.svg", description: "Un lynx de lave que personne n'a jamais vu deux fois au même endroit." },
  { id: 4, nom: "Tidalix", type: "Eau", rarete: "Commune", prix: 10, stock: 12, image: "images/tidalix.svg", description: "Il vit dans les rochers et suit le rythme des marées." },
  { id: 5, nom: "Reefling", type: "Eau", rarete: "Rare", prix: 28, stock: 0, image: "images/reefling.svg", description: "Ses écailles changent de couleur selon la profondeur de l'eau." },
  { id: 6, nom: "Aquaphin", type: "Eau", rarete: "Légendaire", prix: 95, stock: 2, image: "images/aquaphin.svg", description: "On dit qu'il guide les bateaux perdus jusqu'au port." },
  { id: 7, nom: "Mossling", type: "Plante", rarete: "Commune", prix: 8, stock: 15, image: "images/mossling.svg", description: "Une créature calme qui dort sous les feuilles et se réveille quand il pleut." },
  { id: 8, nom: "Thornox", type: "Plante", rarete: "Rare", prix: 35, stock: 3, image: "images/thornox.svg", description: "Ses épines repoussent plus solides à chaque saison." },
  { id: 9, nom: "Florabelle", type: "Plante", rarete: "Commune", prix: 14, stock: 6, image: "images/florabelle.svg", description: "Elle fait pousser une fleur différente chaque matin." },
  { id: 10, nom: "Voltmaw", type: "Électrik", rarete: "Rare", prix: 40, stock: 5, image: "images/voltmaw.svg", description: "Sa mâchoire crépite d'étincelles quand il a faim." },
  { id: 11, nom: "Zaptera", type: "Électrik", rarete: "Légendaire", prix: 120, stock: 0, image: "images/zaptera.svg", description: "Elle ne vole que pendant les orages." },
  { id: 12, nom: "Sparkit", type: "Électrik", rarete: "Commune", prix: 9, stock: 10, image: "images/sparkit.svg", description: "Un chaton qui recharge les lampes en ronronnant." }
];
