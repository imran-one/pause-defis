# Jour 2 — Trier et calculer

### 1. La méthode sort()

J'ai utilisé `sort()` pour trier les articles de trois façons différentes :

- Par prix croissant avec `a.prix - b.prix`.
- Par titre, de A à Z, avec `localeCompare()`.
- Par date, du plus récent au plus ancien, avec `b.date.localeCompare(a.date)`.

J'ai utilisé `[...articles]` avant `sort()` pour créer une copie du tableau original, car `sort()` modifie directement le tableau sur lequel elle est appliquée.

### 2. La méthode reduce() — Valeur totale du stock

J'ai utilisé `reduce()` pour calculer la valeur totale du stock.

À chaque itération, je multiplie le prix de l'article par sa quantité en stock, puis j'ajoute le résultat au total précédent.

J'ai initialisé l'accumulateur à `0`.

Le résultat obtenu est de 65 850 DH.

### 3. La méthode reduce() — Nombre d'articles par catégorie

J'ai utilisé `reduce()` pour créer un objet contenant le nombre d'articles dans chaque catégorie.

J'ai initialisé l'accumulateur avec un objet vide `{}`.

À chaque itération, je récupère la catégorie de l'article actuel avec `e.categorie`, puis je vérifie si cette catégorie existe déjà dans l'objet :

- Si elle existe, j'incrémente son compteur de 1.
- Si elle n'existe pas, je crée une nouvelle propriété avec la valeur 1.

Enfin, je retourne l'objet avec `return` afin de conserver le résultat et de le réutiliser lors de l'itération suivante.

### 4. Vérification du tableau original

J'ai affiché `articles[0].titre` à la fin pour vérifier que l'ordre du tableau original n'a pas changé après les opérations de tri.

### Difficultés rencontrées

J'ai rencontré une difficulté pour comprendre comment stocker les catégories des articles dans un objet en utilisant `reduce()`.

J'ai pris un peu plus de temps pour réfléchir à la manière de construire cet objet, notamment comment utiliser chaque catégorie comme propriété et lui associer un compteur.

J'ai également dû réfléchir à la logique permettant de vérifier si une catégorie existe déjà dans l'objet ou s'il faut la créer.

Ce temps de réflexion supplémentaire m'a permis de construire la solution par moi-même, de mieux comprendre l'évolution de l'accumulateur à chaque itération et de comprendre la logique derrière le code.

### Ce que j'ai appris

J'ai appris à utiliser `sort()` pour trier les éléments d'un tableau et `reduce()` pour calculer une somme et créer un objet qui regroupe les éléments par catégorie.

J'ai également compris l'importance de créer une copie du tableau avant d'utiliser `sort()` afin de préserver les données originales.