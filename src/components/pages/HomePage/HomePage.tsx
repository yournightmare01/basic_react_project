import { Product, ProductsService } from '../../../services/productsService';
import Card from '../../molecules/Card';

import React, { useEffect, useState } from 'react';

import noImage from '../../../assets/no-image-icon.png';

const HomePage = () => {
  const [productsData, setProductsData] = useState<Product[]>();

  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductsService.getProducts();

      const products = response.products.data.items;
      setProductsData(products);
    };

    getProducts();
  }, []);

  return (
    <div className='homePage'>
      <div className='cards-wrapper'>
        {productsData &&
          productsData.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              imageUrl={product.images ? product.images[0] : noImage}
              title={product.name}
              category={product.category}
              price={product.price}
              subCategory={product.subcategory}
            />
          ))}
      </div>
    </div>
  );
};
export default HomePage;
