import React from 'react';
import PropTypes from 'prop-types';
import AdvertsField from './AdvertsField';
import MainMenu from './MainMenu';

import './styles/Layout.scss';
export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          adverts: [],
          sellers: [],
          categories: [],
          nameCurrentCategory: "all"
        };
      }

      componentDidMount() {
          const urls = ["https://avito.dump.academy/products", 
                        "https://avito.dump.academy/sellers",
                          "/static_src/data/categories.json"];
          
          Promise.all(urls.map(u=>fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.json()))
            ).then(texts => {
                this.setState({
                    isLoaded: true,
                    adverts: texts[0].data,
                    sellers: texts[1].data,
                    categories: texts[2]
                  });
            })
      }

      changeCategory = (nameCurrentCategory) => {
        this.setState({nameCurrentCategory: nameCurrentCategory});
        console.log(` в поле лэйаут получили ${nameCurrentCategory}`);

      }
    
      render() {
        const { error, isLoaded, adverts, sellers, categories , nameCurrentCategory } = this.state;
        console.log('categories');
        console.log(categories);
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загружаем...</div>;
        } else {
          return (
              <div className='layoutPosition'>
                  <MainMenu categories={categories} changeCategory={this.changeCategory} nameCurrentCategory={nameCurrentCategory}/>
            <AdvertsField 
                adverts = {adverts}
                sellers = {sellers}
            />  
            </div>          
          );
        }
      }
}