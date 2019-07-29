import React from 'react';
import PropTypes from 'prop-types';

import './styles/Advert.scss';

export default class Advert extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
        pictures: PropTypes.array,
        countImages: PropTypes.number,
        idCategory: PropTypes.number,
        sellerName: PropTypes.string,
        sellerRating: PropTypes.number,
        price: PropTypes.number,
        stringPrice: PropTypes.string,
    };

    getStringPrice = () => {
       return (typeof this.props.price === "number") ? String(this.props.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "Цена не указана";
    }

    countAdditionalPictures = () => {
        return this.props.pictures.length;
    }

    render() {    
        const {title, id, pictures, sellerName, sellerRating} = this.props;
        const stringPrice = this.getStringPrice();
        const amountAddingPictures = this.countAdditionalPictures();  

        return <div>
            <div><img className='advert-main-picture' src={pictures[0]} alt=""/></div>
            {title}
            <div>Доп. картинок: {amountAddingPictures}</div>  
            <div>{stringPrice}</div>  
            {sellerName}
            <div>Рейтинг: {sellerRating}</div>
           </div>    
    }
}