import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {ResponseGetImage} from '../../types/ResponseGetImage';
import {FC} from 'react';
import {getFirstSentence} from '../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../types/RootStackParams';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Details'
>;

export const Jumbotron: FC<{image: ResponseGetImage; showImage: boolean}> = ({
  image,
  showImage,
}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  function handleViewPress() {
    navigate('Details', image);
  }

  return (
    <View style={styles.container}>
      {showImage && <Image style={styles.image} source={{uri: image.hdurl}} />}
      <Text style={styles.title}>{image.title}</Text>
      <Text style={styles.date}>{image.date}</Text>
      {showImage && getFirstSentence(image.explanation) && (
        <Text style={styles.excerpt}>
          {getFirstSentence(image.explanation)}.
        </Text>
      )}
      <Button
        onPress={handleViewPress}
        color={`${showImage ? '#CC2338' : '#0C0aaa'}`}
        title="View more"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0777',
    margin: 10,
    padding: 16,
    borderRadius: 7,
  },
  image: {
    height: 220,
    borderRadius: 7,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: '#f8f8f8',
    fontWeight: '700',
  },
  date: {
    fontSize: 13,
    color: '#f8f8f8',
    textAlign: 'justify',
    marginBottom: 10,
  },
  excerpt: {
    fontSize: 13,
    color: '#f8f8f8',
    marginBottom: 16,
    textAlign: 'justify',
  },
});
