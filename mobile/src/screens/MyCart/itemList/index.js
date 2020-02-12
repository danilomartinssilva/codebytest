import React from 'react';

import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { Container } from './styles';

const ItemListComponent = ({ item }) => {
  const { price, imageUrl, name } = item;

  return (
    <View style={styles.container}>
      <View style={styles.containerImage} >
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={styles.containerInfoProduct}>

        <Text style={styles.txName}> {name}</Text>
        <Text style={styles.infoPrice1}>R$ {String(price / 100).replace('.', ',')}</Text>
        <Text style={styles.infoPrice2}>R$ {String(price / 100).replace('.', ',')}</Text>
      </View>
    </View >

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
    margin: 10
  },
  containerImage: {
    borderWidth: 2,
    borderColor: 'gray',
    margin: 10,
  },
  containerInfoProduct: {
    flexDirection: "column",
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-start'
  },
  txName: { flexWrap: 'wrap', fontWeight: "bold", fontSize: 18 },
  infoPrice1: { fontSize: 14, color: 'gray' },
  infoPrice2: { fontSize: 16, fontWeight: 'bold' }


})

export default ItemListComponent;
