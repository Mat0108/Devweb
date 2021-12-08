import { useState } from "react"

const Animaux = () =>{
    const [animaux, setAnimaux] = useState(['lion','Tigre']);
    const [animal, setAnimal] = useState('');
    const handlerOnChange = (event) =>{
        setAnimal(event.target.value);
    }
    const handlerOnClick = (event) => {
        setAnimaux([...animaux,animal]);
        setAnimal('');
    }
    return <>
        <h1>Liste des animaux</h1>
        <input 
            type="text"
            value={animal}
            onChange={handlerOnChange}
        />
        <button onClick={handlerOnClick}>Ajouter</button> 
        <ul>
            {animaux.map((animal,index) =>
            <li key={index}>{ animal } </li>
            )}
        </ul>
    </>
}

export default Animaux;