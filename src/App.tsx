import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza';
import './App.css';




const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]> ([]);
  
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

  const deletePizza = (id: number) => {    
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzasList);
  }

  console.log('pizzaList', pizzasList);

  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'> Our pizza</span>
        <AddPizzaForm
          addPizza={addPizza}
        />

        <DisplayPizzas
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>    
    </div>
  );
}

export default App;
// let pizza: string = 'Salami';
// let price: number = 20;
// let atStock: boolean = true;
// let pizzas: string[] = ['Salami', 'Sousagge'];
// let numbers: number[] = [1,2,3];


// type Order = {
//   title: string,
//   quantity?: number
// }

// const order: Order = { title: 'margarita', quantity: 10 };

// const orders: Order[] = [
//   { title: 'margarita', quantity: 10 },
//   { title: 'margarita' }
// ];

// type X = {
//   a: string,
//   b: number
// }
// let Y = X & {
//   c: string,
//   d: number
// }
// let y: Y = {
//   c: 'test',
//   d: 5,
//   a: 'one',
//   b: 10
// }

// interface Auto {
//   country: string
// }
// interface BMW extends Auto {
//   model: string,
//   year: number
// };
// const bmw: BMW = {
//   model: '5',
//   year: 2023,
//   country: 'Ukrain'
// }


