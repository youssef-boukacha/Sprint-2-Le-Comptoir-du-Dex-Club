# Le Comptoir du Dex Club — défi de remédiation (Sprint 2)

Yanis anime le **Dex Club**, un club de cartes à collectionner à Casablanca. Le club ouvre un comptoir :
les membres y achètent les cartes de créatures qui leur manquent. Vous rendez la page vivante en JavaScript.

**Ce que vous travaillez :** la manipulation du **DOM** et la manipulation des **données** (tableaux d'objets).
Le HTML, le CSS et les données sont fournis : vous n'écrivez que du JavaScript.

## Lancer le projet

1. Ouvrez le dossier dans VS Code.
2. Clic droit sur `index.html` › **Open with Live Server** (obligatoire : le code utilise des modules).
3. La page s'ouvre sur `http://127.0.0.1:5500`. Ouvrez aussi la console (F12).

## Les fichiers

| Fichier | Rôle | Vous le modifiez ? |
|---|---|---|
| `index.html` | Les zones de la page (vides) | Non |
| `style.css` | Tout le style, et les classes à utiliser | Non |
| `data.js` | Les 12 cartes `{ id, nom, type, rarete, prix, stock, image, description }` | **Non, jamais** |
| `js/cards.js` | Fonctions de **données** du catalogue (chercher, filtrer, compter, trier) | Oui |
| `js/cart.js` | Fonctions de **données** du panier | Oui |
| `js/ui.js` | Fonctions d'**affichage** (créer les éléments de la page) | Oui |
| `js/main.js` | L'**état** et les **écouteurs** | Oui |
| `tests/tests.html` | Vérifie vos fonctions de données | Non |

La règle : **les données d'abord, l'affichage ensuite.** Chaque action modifie `state` avec une fonction de
`cards.js` ou `cart.js`, puis `refresh()` redessine la page. Les fichiers `cards.js` et `cart.js` ne contiennent
aucun `document`.

## Comment avancer (environ 20 heures)

Chaque fonction contient des commentaires `TODO` qui donnent les étapes. Faites les paliers dans l'ordre.

| Étape | Ce que vous faites | Durée estimée |
|---|---|---|
| 0 | Lire le code fourni, lancer la page, créer le dépôt GitHub | 1 h |
| 1a | **Palier 1 · données** : `searchCards`, `filterByType`, `getVisibleCards`, `countByType` | 3 h |
| 1b | **Palier 1 · DOM** : `renderGrid`, `renderTypes`, `renderCount`, `renderDetail` + écouteurs recherche, types, fiche | 6 h |
| 2a | **Palier 2 · données** : `findCard`, `addToCart`, `changeQuantity`, `removeFromCart`, `cartCount`, `cartTotal` | 3 h |
| 2b | **Palier 2 · DOM** : `renderCart`, bouton « Ajouter », écouteur du panier, classe `is-selected` | 4 h |
| 3 | README, vérifications, préparation de la présentation | 3 h |
| **Total** | **Paliers 1 et 2** | **20 h** |
| Bonus | Palier 3 : tri, statistiques, formulaire « Proposer une carte » | + 3 à 4 h |

**Le palier 1 est obligatoire.** Le palier 2 est nécessaire pour valider le niveau 2.

## Tester vos fonctions

**Dans la page de tests** : ouvrez `tests/tests.html` avec Live Server. Chaque règle respectée devient verte.
Visez tous les tests des paliers 1 et 2 au vert.

**Dans la console** de la page principale, toutes vos fonctions sont dans l'objet `dex` :

```js
dex.searchCards(dex.cards, "kit")                       // [Emberkit, Sparkit]
dex.getVisibleCards(dex.cards, { term: "", type: "Eau" }) // 3 cartes
dex.countByType(dex.cards)                              // { Feu: 3, Eau: 3, Plante: 3, Électrik: 3 }
dex.addToCart([], 1, dex.cards)                         // [{ id: 1, quantite: 1 }]
dex.cartTotal([{ id: 1, quantite: 2 }], dex.cards)      // 24
dex.state                                               // l'état actuel de l'application
```

## Vérifications avant de rendre

- [ ] Tous les tests des paliers 1 et 2 sont verts dans `tests/tests.html`.
- [ ] Aucune erreur dans la console, même en cliquant entre deux cartes.
- [ ] Recherche + type marchent ensemble ; « Aucune carte trouvée » quand rien ne correspond.
- [ ] Le bouton « Ajouter » n'ouvre pas la fiche ; une carte en rupture ne peut pas être ajoutée.
- [ ] Le bouton + du panier se désactive quand le stock est atteint ; le total est juste.
- [ ] Un commit à chaque fonctionnalité qui marche, avec un message clair.

## Les règles

- Travail **seul**. Demandez de l'aide pour comprendre une notion, pas pour écrire votre code.
- Pas de code copié d'une IA ou d'Internet : pendant la présentation, vous expliquez chaque ligne.
- `data.js` n'est jamais modifié : on travaille sur des copies.
