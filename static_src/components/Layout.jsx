import React from 'react';
import PropTypes from 'prop-types';
import AdvertsField from './AdvertsField';

import './styles/Layout.scss';
export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          adverts: [],
          sellers: [],
        };
      }

      componentDidMount() {
          const urls = ["https://avito.dump.academy/products", "https://avito.dump.academy/sellers"];
          
          Promise.all(urls.map(u=>fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
            ).then(texts => {
                this.setState({
                    isLoaded: true,
                    adverts: texts[0].data,
                    sellers: texts[1].data
                  });
            })
      }
    
      render() {
        const { error, isLoaded, adverts, sellers } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
              <div className='layoutPosition'>
            <AdvertsField 
                adverts = {adverts}
                sellers = {sellers}
            />  
            </div>          
          );
        }
      }
}