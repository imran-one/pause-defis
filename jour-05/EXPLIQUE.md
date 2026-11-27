# Jour 5 — Recherche et filtres

## 1. HTML
J'ai ajouté un champ de recherche, deux listes déroulantes pour la catégorie et le tri, ainsi qu'un bouton « Réinitialiser ».

## 2. Fonction actualiser()
J'ai créé une fonction `actualiser()` qui lit les valeurs des champs, appelle `appliquerFiltres()` et affiche les résultats avec `render()`.

## 3. Les événements
J'ai utilisé :
- `input` pour la recherche.
- `change` pour la catégorie et le tri.

Ces événements permettent de mettre à jour l'affichage automatiquement.

## 4. Réinitialisation
Le bouton « Réinitialiser » remet les champs à leurs valeurs initiales et appelle `actualiser()`.

## 5. Liste vide
Dans `render()`, j'ai ajouté une condition pour afficher « Aucun article » si la liste est vide, et remettre le compteur et la valeur du stock à zéro.

## Notions apprises
- `addEventListener()`
- Fonctions internes
- Mise à jour du DOM
- `return`
- Importation de fonctions entre fichiers JavaScript