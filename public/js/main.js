// ## Exo 3

// ### Créer deux personnages du nom de François et Sergio
let objet1 ={
    nom : "François",
    panier1 : ["poire", "carotte","banane"],
    derober(art1, art2){
        this.panier1.push(art1);
        this.panier1.push(art2);
        objet2.panier2.splice(objet2.panier2.indexOf(art1),1);
        objet2.panier2.splice(objet2.panier2.indexOf(art2),1);
       
    }
}
let objet2={
    nom : "Sergio",
    panier2 : ["cookies","biscuit","twix"]
}
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.
 
 objet1.derober("cookies", "biscuit");
 console.log(objet1.panier1);
 console.log(objet2.panier2);

