import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';

export default class Products extends Component {
  render() {
    return (
      <Col span={6}>
            <Card
    style={{ width: '250px', marginTop: '20px', borderRadius:'29px' }}
    hoverable
    cover={<img alt='ProductIMG' width='250px' src={element.largeImage} />}>
    {element.productDisplayName} ${element.productPrice}   
              </Card>
              </Col>
            
    )
  }
}
