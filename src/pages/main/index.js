import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {
    
    //quando o componente for exebido em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/products`);

        console.log(response.data.docs);
    };
    
    render(){
        return <h1>Hello World</h1>
    }
}