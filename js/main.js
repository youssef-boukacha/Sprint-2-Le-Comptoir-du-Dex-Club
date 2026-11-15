// =============================================================
// main.js — l'ÉTAT de l'application et les ÉCOUTEURS
// Le chemin d'une action est toujours le même :
//   1. l'écouteur reçoit l'action
//   2. on met à jour `state` avec une fonction de données (cards.js / cart.js)
//   3. on redessine la page avec refresh()
// =============================================================

import { cards } from "../data.js";
import * as dataCards from "./cards.js";
import * as dataCart from "./cart.js";
import * as ui from "./ui.js";
import { renderGrid } from "./ui.js";
renderGrid(cards)
// ---------- L'état : la seule source de vérité ----------
const state = {
  cards: [...cards],                        // copie : data.js n'est jamais modifié
  filters: { term: "", type: "Tous" },
  sort: "numero",                           // palier 3
  cart: []                                  // [{ id, quantite }]
};

// ---------- Les éléments de la page ----------
const searchInput = document.querySelector("#search");
const typesBox = document.querySelector("#types");
const grid = document.querySelector("#grid");
const cartList = document.querySelector("#cart-list");
const sortSelect = document.querySelector("#sort");
const form = document.querySelector("#card-form");


// ---------- Redessiner la page à partir de l'état (déjà écrit) ----------
function refresh() {
  let visible = dataCards.getVisibleCards(state.cards, state.filters);
  visible = dataCards.sortCards(visible, state.sort);

  ui.renderTypes(dataCards.countByType(state.cards), state.filters.type);
  ui.renderCount(visible.length);
  ui.renderGrid(visible, state.cart);
  ui.renderCart(state.cart, state.cards, dataCart.cartTotal(state.cart, state.cards), dataCart.cartCount(state.cart));
  ui.renderStats(dataCards.getStats(visible));
}

// =============================================================
// PALIER 1
// =============================================================

// Recherche : à chaque frappe
searchInput.addEventListener("input", () => {
  // TODO : mettez à jour state.filters.term avec la valeur du champ, puis refresh()
    state.filters.term ()
   
});

// Types : UN SEUL écouteur sur #types (délégation)
typesBox.addEventListener("click", (event) => {
  // TODO 1. Retrouvez le bouton cliqué : event.target.closest("[data-type]")
  // TODO 2. Si on a cliqué à côté d'un bouton, on s'arrête (return)
  // TODO 3. state.filters.type = bouton.dataset.type ; refresh()
});

// Grille : UN SEUL écouteur sur #grid (délégation)
grid.addEventListener("click", (event) => {
  // PALIER 2 — bouton « Ajouter » (à faire AVANT la fiche, et terminer par return
  //            pour que le clic sur le bouton n'ouvre pas la fiche) :
  // TODO a. const addButton = event.target.closest("[data-add]")
  // TODO b. Si addButton existe : state.cart = dataCart.addToCart(state.cart, Number(addButton.dataset.add), state.cards) ;
  //         refresh() ; return

  // PALIER 1 — fiche de la carte :
  // TODO 1. const cardEl = event.target.closest(".card") ; si rien, return
  // TODO 2. Retrouvez la carte avec dataCart.findCard(state.cards, Number(cardEl.dataset.id))
  // TODO 3. ui.renderDetail(carte)
});

// =============================================================
// PALIER 2
// =============================================================

// Panier : UN SEUL écouteur sur #cart-list (délégation)
cartList.addEventListener("click", (event) => {
  // TODO 1. const button = event.target.closest("[data-action]") ; si rien, return
  // TODO 2. const id = Number(button.closest(".cart-line").dataset.id)
  // TODO 3. Selon button.dataset.action ("plus", "minus", "remove") :
  //         changeQuantity(… +1 …), changeQuantity(… -1 …) ou removeFromCart(…)
  // TODO 4. refresh()
});

// =============================================================
// PALIER 3 (bonus)
// =============================================================

sortSelect.addEventListener("change", () => {
  // TODO : state.sort = sortSelect.value ; refresh()
});

form.addEventListener("submit", (event) => {
  // TODO 1. event.preventDefault()
  // TODO 2. Lisez les champs : { nom, prix, stock, type, rarete }
  // TODO 3. const errors = dataCards.validateCardForm(data) ; ui.showFormErrors(errors)
  // TODO 4. Aucune erreur (Object.keys(errors).length === 0) :
  //         state.cards = dataCards.addCard(state.cards, data) ; form.reset() ; refresh()
});

// ---------- Démarrage ----------
refresh();

// ---------- Pour tester vos fonctions dans la console ----------
// Exemple : dex.searchCards(dex.cards, "kit")   ou   dex.addToCart([], 1, dex.cards)
window.dex = { cards, state, ...dataCards, ...dataCart };
