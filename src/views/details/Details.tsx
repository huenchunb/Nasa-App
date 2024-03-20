import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../types/RootStackParams';
import {Header} from '../../components/header';

export const Details = () => {
  const {
    params: {title, explanation, hdurl, date},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Details'>['route']>();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View>
          <Image source={{uri: hdurl}} style={styles.image} />
        </View>
        <Text style={styles.explanation}>{explanation}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0777',
  },
  content: {
    padding: 16,
  },
  image: {
    borderRadius: 7,
    padding: 16,
    height: 400,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: '#f8f8f8',
    fontWeight: '700',
  },
  date: {
    fontSize: 14,
    color: '#f8f8f8',
    fontWeight: '700',
    marginBottom: 16,
  },
  explanation: {
    fontSize: 14,
    color: '#f8f8f8',
    textAlign: 'justify',
    marginBottom: 50,
  },
});
