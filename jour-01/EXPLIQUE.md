# Jour 1 — Chercher dans un tableau

### 1. filter()
La méthode `filter()` permet de retourner un nouveau tableau contenant uniquement les éléments qui respectent une condition. Je l'ai utilisée pour récupérer tous les articles dont la catégorie est "bague".

### 2. map()
La méthode `map()` permet de transformer les éléments d'un tableau et de retourner un nouveau tableau. Je l'ai utilisée avec `filter()` pour récupérer uniquement les titres des articles dont le stock est égal à 0.

### 3. find()
La méthode `find()` permet de rechercher le premier élément qui respecte une condition. Elle retourne un seul élément et non un tableau. Je l'ai utilisée pour trouver l'article dont l'id est égal à 7.

### 4. some()
La méthode `some()` permet de vérifier si au moins un élément du tableau respecte une condition. Elle retourne un booléen (`true` ou `false`). Je l'ai utilisée pour vérifier s'il existe au moins un article dont le prix est supérieur à 5000 DH.

### 5. every()
La méthode `every()` permet de vérifier si tous les éléments du tableau respectent une condition. Elle retourne un booléen (`true` ou `false`). Je l'ai utilisée pour vérifier si tous les articles ont un stock supérieur à 0.

### Ce que j'ai appris
J'ai appris la différence entre les méthodes qui retournent un tableau (`filter()` et `map()`), celle qui retourne un seul élément (`find()`) et celles qui retournent un booléen (`some()` et `every()`). J'ai également appris à combiner `filter()` et `map()` pour filtrer les données et récupérer uniquement les informations dont j'ai besoin.

### Difficultés rencontrées

J'ai dépassé les 30 minutes prévues, surtout à cause des méthodes `filter()` et `map()`. J'ai perdu du temps lorsque j'ai essayé de les combiner, car j'avais oublié d'écrire `return` dans la méthode `filter()`. Je n'ai pas remarqué cette erreur immédiatement, ce qui m'a fait perdre du temps dans la recherche du problème.

Cette difficulté m'a appris à faire attention au `return` lorsque j'utilise les fonctions fléchées avec des accolades.