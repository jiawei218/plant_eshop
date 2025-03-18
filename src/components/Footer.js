import { useState } from 'react'
import '../styles/Footer.css'



function Footer(){
    const [inputValue, setInputValue] = useState('xx@xx')
    const [errorMessage, setErrorMessage] = useState('')

    function checkValue(value) {
        if (!value.includes('@')) {
            setErrorMessage("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
            alert(errorMessage)
        } else {
            setErrorMessage('')
        }
    }


    return (
        <footer className='lmj-footer'>
        <div className="lmj-footer-elem">
        <p>entrer votre email pour recevoir plus d'info</p>
        <form>
            <input type='text' name='mail' defaultValue={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)} 
            onBlur={()=>checkValue(inputValue)
            } />
        </form>
        </div>
        </footer>
    )

}


export default Footer