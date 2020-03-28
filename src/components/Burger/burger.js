import React from 'react';

import classes from './burger.css';
import BurgerIngridient from './burger-ingridient';

const Burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <div>Please start adding ingridients!</div>
  }


  return (
    <div className={classes.Burger}> 
      <BurgerIngridient type="bread-top" />
      {transformedIngredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;