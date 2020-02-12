import React, { Component } from 'react';

import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Axios from 'axios';
import ItemListComponent from './itemList';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { Container } from './styles';


export default class MyCartScreen extends Component {

  componentDidMount() {

    this.listaAbaixo()
  }
  state = {
    items: [],
    isBusy: false
  }



  listaAbaixo = async () => {
    try {
      this.setState({
        isBusy: true
      })
      const { route } = this.props;
      const { is_shipping } = route.params;
      let data;

      let service;
      if (is_shipping === 'no') {
        service = await fetch('http://10.0.2.2:3000/data')

      }
      else if (is_shipping === 'yes') {
        service = await fetch('http://10.0.2.2:3001/data')

      }
      else {
        service = await fetch('http://10.0.2.2:3002/data')
      }
      data = await service.json()

      const { items } = data
      this.setState({
        items: is_shipping === 'random' ? items.slice(Math.floor(Math.random() * items.length)) : items,
        isBusy: false
      })
    }
    catch (err) {
      console.log(JSON.stringify(err))
      this.setState({
        isBusy: false
      })
    }
  }

  calcTotal = () => {

    const { items } = this.state;
    const prices = items.map((o) => o.price);
    return prices.reduce((total, numero) => total + numero, 0);

  }


  render() {

    const { isBusy } = this.state;
    console.log(this.state.items)
    if (isBusy) {
      return (<ActivityIndicator animating={true} />)
    }
    else {
      return (

        <FlatList
          data={this.state.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ItemListComponent item={item} />
          )}
          ListFooterComponent={(
            <View style={styles.containerFooter}>
              <View style={styles.separator} />
              <View style={styles.containerResume}>

                <Text style={styles.txResume} >Total</Text>
                <Text style={styles.txResume}>R$ {String(this.calcTotal() / 100).replace('.', ',')}</Text>

              </View>
              {this.calcTotal() / 100 > 10 && (
                <View style={styles.shippingMessage}>

                  <Text style>Parabéns, sua compra tem frete grátis!</Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => alert('Compra realizada')}

                style={styles.btnBuyFinish}>
                <Text style={styles.btnText}>Finalizar Compra</Text>

              </TouchableOpacity>



            </View>
          )}


        />
      )
    }


  }
}

const styles = StyleSheet.create({


  containerFooter: {
    flex: 1
  },
  separator: {
    borderWidth: .5,
    borderColor: 'gray',
    marginVertical: 10
  },
  containerResume: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 20
  },
  btnBuyFinish: {
    flex: 1,
    backgroundColor: '#3366FF',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  },
  shippingMessage: {
    flex: 1,
    backgroundColor: '#7BE8A1',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  },
  txResume: { fontWeight: 'bold', fontSize: 18 },
  btnText: { fontSize: 18, color: 'white' }
})
