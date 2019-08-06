import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [...this.props.categories, {
                name: "all",
                header: "все",
                id: 0,
            }],             
    }

    }

    static propTypes = {
        nameCurrentCategory: PropTypes.string,
        categories: PropTypes.array,
        changeCategory: PropTypes.func,
    }

    /* componentDidMount() {           
        fetch('/static_src/data/categories.json')
        .then(res => res.json())
        .then(
            (result) => {
                console.dir(JSON.stringify(result));
                let dataCategories = JSON.stringify(result);
                console.log(dataCategories);
            });
    }; */
    
    static defaultProps = {
        nameCurrentCategory:  "all", 
    }

    handleChange = (event) => {
        this.setState({
            nameCurrentCategory: event.target.value,
        });
        this.props.changeCategory(event.target.value);
    }

    handleSubmit = (event) => {
        //console.log('event');
    }

     
      render() {
        const { nameCurrentCategory } = this.props;
        const {  categories, selectedAds} = this.state;

        let optionsCategories = categories.map((elem, ind, array) => {
            return <option value={elem.name} key={ind}>{elem.header}</option>;
        })
        return  <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Выберите категорию:
                        <select value={nameCurrentCategory} onChange={this.handleChange}>
                            {optionsCategories}
                        </select>
                        </label>
                        <input type="submit" value="Отправить" />
                    </form>
                </div>       
        }
      }
