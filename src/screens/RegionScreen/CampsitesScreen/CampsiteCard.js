import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CampsiteCard = (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <ImageBackground style={styles.picture} source={{ uri: props.photo }}>
          <View style={styles.content}>
            <Text style={styles.textForCardName}>{props.name}</Text>
            <Text style={styles.textForCardLocation}>{props.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  picture: {
    borderRadius: 12,
    height: 256,
    marginBottom: 15,
    overflow: 'hidden',
    width: 173,
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textForCardName: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 3.125,
    color: 'white',
  },
  textForCardLocation: {
    fontSize: 12,
    fontWeight: 400,
    flexWrap: 'wrap',
    marginTop: 3.125,
    color: 'white',
  }
});
