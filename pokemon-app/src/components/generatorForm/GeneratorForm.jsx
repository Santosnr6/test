import './generatorForm.css';

function GeneratorForm({ handleInput, handleAmount, handleSubmit }) {
  return (
    <form onSubmit={ handleSubmit } className="generator-form">
        <input onChange={ handleInput } type="text" placeholder="Enter type of pokemon..." />
        <input onChange={ handleAmount } type="number" min="1" max="151" defaultValue={ 1 }/>
        <input type="submit" value="Gotta generate 'em all" />
    </form>
  )
}

export default GeneratorForm;
