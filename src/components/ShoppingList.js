import PlantItem from "./PlantItem.js";
import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css'
import Categories from "./Categories";
import { useState } from "react";

/*
attention: Key est obli quand on utilise list!!!!
Doc: https://fr.legacy.reactjs.org/docs/lists-and-keys.html
Nous avons plusieurs méthodes pour générer une  key   unique :

La méthode la plus simple et la plus fiable consiste à 
utiliser l'id associée à votre donnée dans votre base de données.

Vous pouvez également trouver un moyen d'exploiter la valeur de 
la donnée, si vous avez la certitude qu'elle sera toujours unique, 
et stable dans le temps.

En dernier recours, vous pouvez définir une string et 
la combiner avec l'index de la data dans votre tableau.
*/


function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
   
    const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	);
    
    function addToCart(name,price){
        //check if the plant is already in the cart
        const currentPlantAdded = cart.find((plant)=> plant.name === name);
        //si oui, on incrémente la quantité
        if(currentPlantAdded){
            //on filtre les plantes du panier pour retirer la plante actuelle
            //return un nouveau tableau avec toutes les plantes sauf celle qui a le même nom
            const cartFilteredCurrentPlant = cart.filter(
                (plant)=> plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantAdded.amount + 1}
            ]);
            //sinon on ajoute la plante au panier
        }else{
            updateCart([...cart, {name, price, amount: 1}]);
        }
    }

    return (
        <div className="lmj-shoppingList">

            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className="lmj-plant-list">
                {plantList.map(({id,cover,name,light,water,price,category}) =>  (  
                !activeCategory || activeCategory === category ? (
                <div key={id} className="lmj-plant-item">           
                    <PlantItem 
                    cover={cover}
                     name={name} 
                    light={light}
                     water={water}
                     price={price} />                                                        
                    <button onClick={()=>addToCart(name,price)}>Ajouter</button> 
                    </div>
                ) : null
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;