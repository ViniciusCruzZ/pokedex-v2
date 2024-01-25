import './App.css';
import Card from '../Card/Card';
import pokebola from '../../assets/images/pokeball.svg';
import filter from '../../assets/images/sort.svg';
import lupa from '../../assets/images/search.svg';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={pokebola}></img>
        <h1>Pokédex</h1>
      </div>

      <div className='search'>
        <img src={lupa} className='lupa'></img>
        <input type='text' placeholder='Search'>
        </input>

        <div className='filter'>
          <img src={filter}></img>
        </div>
      </div>

      <div className='pokeGrid'>
        <Card pokeId='001' pokeName='Bulbassaur'></Card>
        <Card pokeId='004' pokeName='Charmander'></Card>
        <Card pokeId='006' pokeName='Charizard'></Card>
        <Card pokeId='007' pokeName='Squirtle'></Card>
        <Card pokeId='025' pokeName='Pikachu'></Card>
        <Card pokeId='035' pokeName='Clefairy'></Card>
        <Card pokeId='164' pokeName='Noctowl'></Card>
        <Card pokeId='344' pokeName='Claydol'></Card>
        <Card pokeId='965' pokeName='Varoom'></Card>
        <Card pokeId='001' pokeName='Bulbassaur'></Card>
        <Card pokeId='004' pokeName='Charmander'></Card>
        <Card pokeId='006' pokeName='Charizard'></Card>
        <Card pokeId='007' pokeName='Squirtle'></Card>
        <Card pokeId='025' pokeName='Pikachu'></Card>
        <Card pokeId='035' pokeName='Clefairy'></Card>
        <Card pokeId='164' pokeName='Noctowl'></Card>
        <Card pokeId='344' pokeName='Claydol'></Card>
        <Card pokeId='965' pokeName='Varoom'></Card>
        <Card pokeId='001' pokeName='Bulbassaur'></Card>
        <Card pokeId='004' pokeName='Charmander'></Card>
        <Card pokeId='006' pokeName='Charizard'></Card>
        <Card pokeId='007' pokeName='Squirtle'></Card>
        <Card pokeId='025' pokeName='Pikachu'></Card>
        <Card pokeId='035' pokeName='Clefairy'></Card>
        <Card pokeId='164' pokeName='Noctowl'></Card>
        <Card pokeId='344' pokeName='Claydol'></Card>
        <Card pokeId='965' pokeName='Varoom'></Card>
      </div>
    </div>
  );
}

export default App;
