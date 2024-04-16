import { useState} from "react"

function SearchBar([ onSubmit]){
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('Necesito decirle al componente padre sobre los datos')
        onSubmit(term)
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setTerm(event.target.value)
    }

    const handleClick = () => {
        onSubmit(term)
    }

    return(
        <div>
            <h1>Search Bar</h1>
            <form onSubmit={handleFormSubmit}>
                Confirma tu busqueda: {term}
                <input onChange={handleChange} value={term}/>
                <button OnSubmit={handleClick}>Click me!</button>
            </form>
        </div>
    )
}
export default SearchBar