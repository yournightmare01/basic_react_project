import { useNavigate } from 'react-router-dom';

type CardProps = {
  imageUrl: string;
  title: string;
  price: string;
  category: string;
  subCategory: string;
  id: string;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  price,
  category,
  subCategory,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div className='card' onClick={() => navigate(`/${id}`)}>
      <img className='card__image' src={imageUrl} alt={title} />
      <div className='card__content'>
        <div className='card__content__title'>
          <h3>{title}</h3>
        </div>
        <div className='card__content__details'>
          <p>Price: {price}</p>
          <p>category: {category}</p>
          <p>subcategory: {subCategory}</p>
        </div>

        <button className='card__button'>ADD TO CART</button>
      </div>
    </div>
  );
};
export default Card;
