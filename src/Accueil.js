import React from 'react'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';

const Accueil = () => {
    return (
        <div>


            <Products heading='Nos crêpes et sandwichs' data={productData} />
      <Feature />
      <Products heading='Jus 100% naturels' data={productDataTwo} />
 
        </div>
    )
}

export default Accueil
