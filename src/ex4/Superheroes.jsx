import React from 'react';
import DisplayListHeroes from './DisplayListHeroes';

const SuperHeroes = ({ superheroes }) => {
  const powerfullHeroes = superheroes.filter((element) => element.powerstats.strength > 80);
  return (
    <DisplayListHeroes powerfullHeroes={powerfullHeroes} />
  );
};

export default SuperHeroes;
