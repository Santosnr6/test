import React from 'react'

function SearchOutput({ joke, index }) {
  return (
    <div>
      <h2>Joke #{index}</h2>
      <p>
        <em>
            { joke.joke }
        </em>
      </p>
    </div>
  )
}

export default SearchOutput
