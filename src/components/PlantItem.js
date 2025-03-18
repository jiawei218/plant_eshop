import CareScale from "./CareScale";
import '../styles/PlantItem.css'



function PlantItem({id, cover,name,light,water,price}) {
    
	return (
		
			<li className='lmj-plant-item' key={id} > 
                
                <img src={cover} alt={`${name} cover`} className="lmj-plant-cover" width={200} height={200}/>           
                {name}
                <span className='lmj-plant-item-price'>{price}€</span>  
                <div>
                <CareScale careType='water' scaleValue={water}  />
                <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
    )
		

}


export default PlantItem;