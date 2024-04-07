function SearchForm({ handleInput, handleCategory }) {
    const categories = [
        'Any',
        'Programming',
        'Misc',
        'Dark',
        'Pun',
    ];
  
    return (
    <form>
        <input 
            onChange={ handleInput }
            type="text" 
        />
        <select
            onChange={ (event) => handleCategory(event.target.value) } 
            name="category" 
            id="category"
        >
            {
                categories.map((cat, index) => {
                    return <option 
                               key={ index }
                               value={ cat }
                           >
                            { cat }
                           </option>
                })
            }
        </select>
    </form>
  )
}

export default SearchForm;
