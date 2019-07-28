import React from 'react';
import PropTypes from 'prop-types';

import AdvertsField from './AdvertsField';

const styles = {
    window: {
        display: "flex"
    },
};

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          adverts: []
        };
      }

      componentDidMount() {
        fetch("https://avito.dump.academy/products")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                adverts: result.data
              });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, adverts } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
            console.log(adverts[0]);
          return (
            <AdvertsField 
                adverts = { adverts}
            />            
          );
        }
      }
    
    /* static propTypes = {
        idChat: PropTypes.number,    
    };

    static defaultProps = {
        idChat: 1,
    };
 */
}