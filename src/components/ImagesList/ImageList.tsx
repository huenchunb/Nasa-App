import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ResponseGetImage} from '../../types/ResponseGetImage';
import {Jumbotron} from '../jumbotron';

export const ImageList: FC<{
  arrImages: ResponseGetImage[];
}> = ({arrImages}) => {
  return (
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Last 5 days</Text>
      </View>
      <View>
        {arrImages.reverse().map((image, index) => (
          <Jumbotron key={index} image={image} showImage={false} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F8F8F8',
  },
});
