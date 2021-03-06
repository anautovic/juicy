import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Formule Petit déjeuner</h1>
      <p>Ajoutez de la vitalité dans vos journées</p>
      <FeatureButton><a href="tel:+237 656136898" style= {{textDecoration:"none", color:'white'}}>Commandez </a></FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
