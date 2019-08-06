import React from 'react';
import PropTypes from 'prop-types';

import './styles/Advert.scss';

export default class Advert extends React.Component {
    /* super(props);
    */
   state = {
    liked: (localStorage.getItem(`_id_1_isLiked`)) ? true : false,
} 
    
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

    handleLikedClick = () => {
        console.log('handleLikedClick start');
        console.log(this.state.liked);
        if (this.state.liked !== "null") {
            localStorage.setItem(`_id_${this.props.id}_isLiked`, true);
            this.setState({
                liked: true
            });
        } else {
            localStorage.removeItem(`_id_${this.props.id}_isLiked`);
            this.setState({
                liked: false
            });
        }
        
        console.log('handleLikedClick end');
        console.log(this.state.liked);
     }

    render() {    
        const {title, id, pictures, sellerName, sellerRating} = this.props;
        const stringPrice = this.getStringPrice();
        const amountAddingPictures = this.countAdditionalPictures();  
        const likedIconClassName = this.state.liked ? "fas fa-star" : "far fa-star";

        return <div>
            <div><img className='advert-main-picture' src={pictures[0]} alt=""/></div>
            {title}
            <div>Доп. картинок: {amountAddingPictures}</div>  
            <div>{stringPrice}</div>  
            {sellerName}
            <div>Рейтинг: {sellerRating}</div>
            <span className='fa-star__my-style' onClick={this.handleLikedClick}>
                <i className={likedIconClassName}></i>
            </span>
           </div>    
    }
}