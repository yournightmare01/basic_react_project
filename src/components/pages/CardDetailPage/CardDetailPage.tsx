import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Product, ProductsService } from '../../../services/productsService';

import { EffectCards, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import noImage from '../../../assets/no-image-icon.png';

import PlusIcon from '../../atoms/icons/PlusIcon';
import MinusIcon from '../../atoms/icons/MinusIcon';

import 'swiper/css';
import 'swiper/css/effect-cards';

const CardDetailPage = () => {
  const [productsData, setProductsData] = useState<Product[]>();
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductsService.getProducts();

      const products = response.products.data.items;

      setProductsData(products);
    };

    getProducts();
  }, []);

  let product;
  let slider;

  if (productsData) {
    product = productsData.find((item) => item.id === id);

    if (product?.images) {
      slider = (
        <Swiper
          effect={'cards'}
          grabCursor={true}
          loopAdditionalSlides={1}
          modules={[EffectCards, Navigation]}
          className='mySwiper'
          loop={true}
          navigation={true}
          initialSlide={2}
          cardsEffect={{
            slideShadows: true,
          }}
        >
          {product.images.map((image, i) => (
            <SwiperSlide>
              <img src={image} alt={`slide ${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } else {
      slider = (
        <img
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          src={noImage}
          alt='noImage'
        />
      );
    }
  }

  return (
    <div className='cardDetailPage'>
      <div className='cardDetailPage__container'>
        <div className='cardDetailPage__slider'>{slider}</div>

        {product ? (
          <div className='cardDetailPage__content'>
            <div className='cardDetailPage__breadcrumbs'>
              <p>{`${product.category} / ${product.subcategory}`}</p>
            </div>

            <div className='cardDetailPage__title'>
              <h1>{product.name}</h1>
            </div>

            <div className='cardDetailPage__description'>
              <h2>Product Desciption</h2>
              <p>{product.description}</p>
            </div>
            <div className='cardDetailPage__button-group'>
              <MinusIcon className='cardDetailPage__button-group--icon' />

              <div className='cardDetailPage__button-group--price'>
                {product.price}
              </div>

              <PlusIcon className='cardDetailPage__button-group--icon' />
            </div>
          </div>
        ) : (
          <h1>Oops could not find product info...</h1>
        )}
      </div>
    </div>
  );
};
export default CardDetailPage;
