import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Header} from '../../components/header';
import {Jumbotron} from '../../components/jumbotron';
import {ImageList} from '../../components/ImagesList';
import nasaApi from '../../utils/nasaApi';
import {ResponseGetImage} from '../../types/ResponseGetImage';
import {format, sub} from 'date-fns';

export const Home = () => {
  const [image, setImage] = useState<ResponseGetImage | undefined>(undefined);
  const [arrLastFiveDaysImages, setArrLastFiveDaysImages] = useState<
    ResponseGetImage[] | undefined
  >(undefined);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await nasaApi();

        setImage(response);
      } catch (error) {
        console.error(error);
      }
    };

    const getLastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const todayDate = format(sub(date, {days: 2}), 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 7}), 'yyyy-MM-dd');

        const response = await nasaApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`,
        );

        setArrLastFiveDaysImages(response);
      } catch (error) {
        console.error(error);
      }
    };

    getImages();
    getLastFiveDaysImages();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      {image && <Jumbotron image={image} showImage />}
      {arrLastFiveDaysImages && <ImageList arrImages={arrLastFiveDaysImages} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0666',
  },
});
