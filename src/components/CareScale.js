import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick(scaleValue, careType){
	const scaleType = careType === 'light' ? 'de lumière':"d'arrosage"
	var quantity = scaleValue < 2 ? 'peu': 'modérement'
	if(quantity>2) 
		quantity='beaucoup'
	alert('Cette plante requiert '+ quantity +' '+scaleType)
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? 
	<img src={sun} alt='sun-icon' /> : <img src={water} alt='water-icon' />

	return (
		<div onClick={()=>handleClick(scaleValue,careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>
						{scaleType}
					</span>
				) : null
			)}
		</div>
	)
}

export default CareScale