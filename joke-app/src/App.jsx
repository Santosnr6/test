import './App.css'
import { useState, useEffect } from 'react';
import SearchForm from './components/searchForm/SearchForm';
import SearchOutput from './components/searchOutput/SearchOutput';
import axios from 'axios';

const getJokes = async (input, category, setJokes) => {
  const response = await axios.get('https://v2.jokeapi.dev/joke/' + category + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10&contains=' + input);
  const jokes = response.data.jokes;
  // console.log('https://v2.jokeapi.dev/joke/' + category + '?blacklistFlags=religious,racist,sexist,explicit&type=single&amount=10&contains=' + input);
  setJokes([]);
  if(jokes) {
    setJokes(j => [...j, ...jokes]);
  }

  // axios.get('https://v2.jokeapi.dev/joke/' + category + '?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10&contains=' + input)
  //   .then(response => {
  //     setJokes([]);
  //     response.data.jokes.map(joke => setJokes(s => [...s, joke]));
  //   })
  //   .catch(error => console.log(error));
}

function App() {
  const [input, setInput] = useState('');
  const [jokes, setJokes] = useState([]);
  const [category, setCategory] = useState('Any');

  useEffect(() => {
    // setJokes([]);
    getJokes(input, category, setJokes);
  }, [input, category]);

  const handleInput = (event) => {
    setInput(event.target.value);  
  }

  const handleCategory = (event) => {
    setCategory(event);
  }

  useEffect(()=> {
    console.log('Någonting renderades');
  });

  useEffect(()=> {
    console.log('Sidan laddades');
  }, []);

  useEffect(()=> {
    console.log('Input ändrades');
  }, [input]);


  return (
    <div className="app">
      <SearchForm 
        handleInput={ handleInput } 
        handleCategory={ handleCategory }
      />
      {
        jokes.map((joke, index) => {
          return <SearchOutput key={ index } index={ index + 1 } joke={ joke } />
        })  
      }
    </div>
  )
}

export default App;
