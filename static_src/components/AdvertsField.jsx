import React from 'react';
import PropTypes from 'prop-types';
import Advert from './Advert';

import './styles/AdvertsField.scss';

export default class AdvertsField extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
          adverts: [],
          sellers: []
        };
      } */

    static propTypes = {
        adverts: PropTypes.array,
        sellers: PropTypes.array,
    }

    findSellerByID= (idSeller) => {
        let arr = this.props.sellers.find(seller => seller.id === idSeller);    
        return (arr !== undefined) ? arr : {err: 'Пользователь не найден'}; // в БД id  уникальны
    }

    render() {
        const {adverts, sellers} = this.props;
        // TODO пока вывод первых 10 элементов, потом сделать фильтры
        let adverts10 = adverts.slice(1,10);

        const advertElements = [];
        adverts10.forEach((advert, index) => {
            let seller = this.findSellerByID(advert['relationships']['seller']);
            let advertElem = <div key={index} className='advert'>
                            <Advert 
                            title = {advert.title}
                            id = {advert.id}
                            price = {advert.price}
                            pictures = {advert.pictures}
                            category = {advert.category}
                            sellerName = {seller.name}
                            sellerRating = {seller.rating}
                            />
                        </div>;

            advertElements.push(advertElem);
        });

        return  <div className="advertsField">

            {advertElements} 
            </div>
    }

    


}