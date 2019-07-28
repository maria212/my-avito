import React from 'react';
import PropTypes from 'prop-types';

export default class Advert extends React.Component {
 
    static propTypes = {

        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        /* url: PropTypes.string.isRequired,
        images: PropTypes.array,
        countImages: PropTypes.number,
        idCategory: PropTypes.number.isRequired,
        seller: PropTypes.object.isRequired,
        price: PropTypes.number.isRequired */
       
    };

    state = {

    } 

    render() {    
        const {title, id} = this.props
        return <div>{title}</div>
    }
}