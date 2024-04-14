import { create } from 'zustand';

const usePokemonStore = create(set => ({
    pokemons : [],
    addPokemons : (p) => set({ pokemons : p })
}));

export default usePokemonStore;