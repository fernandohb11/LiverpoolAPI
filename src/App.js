import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Layout from './Components/Layout';
import 'antd/dist/antd.css';
import { Card, Col } from 'antd';


class App extends Component {
  state = {
           products:['']
         }
  performSearch = (e) => {
  const searchTerm = e.target.value
  const urlString = "https://www.liverpool.com.mx/tienda/?s="+searchTerm+"&d3106047a194921c01969dfdec083925=json"
        axios.get(urlString)
          .then(r => {
            if (r.data.contents) {
              this.setState({ products: r.data.contents[0].mainContent[3].contents[0].records })
              localStorage.setItem('lastSearch', searchTerm)
            }
          })
          .catch(e => console.log(e))
  }
 
  render() {
    const products = this.state.products
    let val = localStorage.getItem('lastSearch')
    console.log(val)
    return (
      <div >
        <Layout />
        <input style={{
          fontSize: 20,
          display: 'block',
          width: '100%'
        }} placeholder='Busca productos aquí' onChange={this.performSearch}></input>
          <h2>Última Búsqueda : {val}</h2>
        {products.length> 1 ? products.map((element, index) => {
          return (
            
            <Col key={index} span={6}>
            <Card
    style={{ width: '250px', marginTop: '20px', borderRadius:'20px' }}
    hoverable
    cover={<img alt='ProductIMG' width='250px' src={element.largeImage} />}>
    {element.productDisplayName} ${element.productPrice}   
              </Card>
              </Col>
            
             
          )
        }) : <div>No data yet</div>}
             </div>
    );
  }
}

export default App;
