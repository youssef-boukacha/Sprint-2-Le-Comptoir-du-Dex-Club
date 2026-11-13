// =============================================================
// cart.js — fonctions de DONNÉES du panier
// Le panier est un tableau de petits objets : [{ id: 3, quantite: 2 }, …]
// Les infos d'une carte (nom, prix, stock) se retrouvent dans `cards` avec find.
// Règles : aucune ligne avec `document` ; chaque fonction renvoie un NOUVEAU tableau.
// =============================================================

/**
 * Retrouve une carte par son id. Renvoie l'objet carte, ou undefined.
 * Exemple : findCard(cards, 4) → { id: 4, nom: "Tidalix", … }
 */
export function findCard(cards, id) {
  // TODO : cards.find(...)
  return undefined;
}

/**
 * Ajoute une carte au panier.
 * - déjà dans le panier : sa quantité augmente de 1, SAUF si elle a atteint le stock (panier inchangé)
 * - pas encore dans le panier : on l'ajoute avec { id, quantite: 1 }, SAUF si son stock vaut 0
 * Exemple : addToCart([], 1, cards) → [{ id: 1, quantite: 1 }]
 *           addToCart([{ id: 1, quantite: 1 }], 1, cards) → [{ id: 1, quantite: 2 }]
 */
export function addToCart(cart, id, cards) {
  // TODO 1. Retrouvez la carte (findCard) et la ligne du panier (cart.find)
  // TODO 2. Ligne trouvée : si quantite < stock, renvoyez cart.map(...) avec la quantité + 1 ;
  //         pour modifier une ligne sans toucher l'originale : { ...ligne, quantite: ligne.quantite + 1 }
  // TODO 3. Pas de ligne : si stock > 0, renvoyez [...cart, { id, quantite: 1 }]
  // TODO 4. Sinon, renvoyez cart sans rien changer
  return [];
}

/**
 * Change la quantité d'une ligne de `delta` (+1 ou -1).
 * - la nouvelle quantité ne dépasse jamais le stock (sinon, panier inchangé)
 * - si la nouvelle quantité vaut 0 ou moins, la ligne est retirée
 */
export function changeQuantity(cart, id, delta, cards) {
  // TODO
  return [];
}

/**
 * Retire la ligne de cette carte.
 * Exemple : removeFromCart([{ id: 1, quantite: 2 }, { id: 4, quantite: 1 }], 1) → [{ id: 4, quantite: 1 }]
 */
export function removeFromCart(cart, id) {
  // TODO : filter
  return [];
}

/**
 * Nombre total de cartes dans le panier (somme des quantités).
 * Exemple : cartCount([{ id: 1, quantite: 2 }, { id: 4, quantite: 1 }]) → 3
 */
export function cartCount(cart) {
  // TODO : reduce
  return 0;
}

/**
 * Total du panier en DH (somme de quantite × prix).
 * Exemple : cartTotal([{ id: 1, quantite: 2 }], cards) → 24   (Emberkit coûte 12 DH)
 */
export function cartTotal(cart, cards) {
  // TODO : reduce + findCard pour connaître le prix
  return 0;
}
