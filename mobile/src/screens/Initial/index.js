import React, { Component } from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


// import { Container } from './styles';

export default class InitialScreen extends Component {
  render() {
    const { navigation } = this.props;
    return <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyCartScreen', { is_shipping: 'random' })}

        style={styles.btnNavigate}>
        <Text style={styles.btnText}>Simular Carrinho</Text>

      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyCartScreen', { is_shipping: 'yes' })}

        style={styles.btnNavigate}>
        <Text style={styles.btnText}>Sem Frete Grátis</Text>

      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyCartScreen', { is_shipping: 'no' })}

        style={styles.btnNavigate}>
        <Text style={styles.btnText}>Frete Grátis</Text>

      </TouchableOpacity>


    </View>;
  }
}
const styles = StyleSheet.create({
  btnNavigate: {
    backgroundColor: '#3366FF',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  },
  btnText: { fontSize: 18, color: 'white' }
})