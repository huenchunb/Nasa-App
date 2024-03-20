import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Explore</Text>
      <Image
        source={require('../../assets/img/nasa.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8f8f8',
  },
  image: {
    width: 60,
    height: 60,
  },
});
