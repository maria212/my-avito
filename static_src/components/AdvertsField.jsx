import React from 'react';
import PropTypes from 'prop-types';
import Advert from './Advert';

export default class AdvertsField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          adverts: []
        };
      }

    static propTypes = {
        adverts: PropTypes.array,
    }



    render() {
        //console.log(this.props.adverts); 
        const {adverts} = this.props;
        return  <div className="window"> 
        Это Поле объявлений!
        <Advert 
            title = {adverts[0].title}
            id = {adverts[0].id}
        />
        </div>
    }

    


}