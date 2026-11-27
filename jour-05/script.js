let articles = [
  { id: 1, titre: "Bague solitaire or 18K", categorie: "bague", prix: 4200, stock: 3, date: "2026-09-12" },
  { id: 2, titre: "Collier perles", categorie: "collier", prix: 1850, stock: 0, date: "2026-10-03" },
  { id: 3, titre: "Bracelet argent", categorie: "bracelet", prix: 650, stock: 12, date: "2026-08-21" },
  { id: 4, titre: "Bague alliance", categorie: "bague", prix: 2900, stock: 5, date: "2026-11-01" },
  { id: 5, titre: "Boucles d'oreilles émeraude", categorie: "boucles", prix: 5600, stock: 1, date: "2026-07-15" },
  { id: 6, titre: "Collier or jaune", categorie: "collier", prix: 7300, stock: 2, date: "2026-10-28" },
  { id: 7, titre: "Bracelet jonc or", categorie: "bracelet", prix: 3400, stock: 0, date: "2026-09-30" },
  { id: 8, titre: "Bague saphir", categorie: "bague", prix: 6100, stock: 0, date: "2026-11-10" },
  { id: 9, titre: "Collier main de Fatma", categorie: "collier", prix: 980, stock: 7, date: "2026-08-05" },
  { id: 10, titre: "Créoles argent", categorie: "boucles", prix: 720, stock: 9, date: "2026-10-18" }
];

import { render } from "../jour-04/script.js";
import { appliquerFiltres } from "../jour-03/script.js";

const tri = document.getElementById("tri");
const cherche = document.getElementById("recherche");
const categorie = document.getElementById("categorie");
const btn = document.getElementById("btn");
function mettreAJour(liste) {
  function actualiser() {
    render(
      appliquerFiltres(liste, {
        q: cherche.value,
        categorie: categorie.value,
        tri: tri.value,
      }),
    );
  }
  actualiser();
  cherche.addEventListener("input", actualiser);
  categorie.addEventListener("change", actualiser);
  tri.addEventListener("change", actualiser);
  btn.addEventListener("click",()=>{tri.value = "titre";
        cherche.value = "";
        categorie.value = "toutes";
        actualiser();
    })
}

mettreAJour(articles);