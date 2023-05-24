import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const CampsiteDetail = (props) => {
  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;
  return (
    <View style={[styles.campsite, { height: slidePageHeight }]}>
          <ScrollView contentContainerStyle={styles.scrollForCampsite}>
            <Image style={styles.photoForCampsite} source={{ uri: props.photo }} />
            <View style={styles.infoForCampsite}>
              <Text style={styles.nameForCampsite}>{props.name}</Text>
              <Text style={styles.locationForCampsite}>{props.location}</Text>
              <View style={styles.pricingAndCloutForCampsite}>
                <View style={styles.pricingForCampsite}>
                  <Text style={styles.textForCampsite}>Mulai dari</Text>
                  <Text style={styles.priceForCampsite}>IDR {props.price}/malam</Text>
                </View>
                <MaterialCommunityIcons name="thumb-up-outline" size={30} style={styles.cloutForCampsite}/>
                <Text style={[styles.textForCampsite, styles.cloutForCampsite, {textAlign: "center"}]}>60</Text>
                <MaterialCommunityIcons name="comment-text-outline" size={30} style={styles.cloutForCampsite}/>
                <Text style={[styles.textForCampsite, styles.cloutForCampsite, {textAlign: "center"}]}>60</Text>
              </View>
              
              <Text style={styles.descForCampsite}>{props.desc}</Text>
              <Text style={styles.descForCampsite}>Address: {props.address}</Text>
            </View>
            
            <Button
              title="Back"
              buttonStyle={styles.buttonToCampsites}
              titleStyle={styles.textToCampsite}
              onPress={props.onPress}
            />
          </ScrollView>
          
        </View>
  )
}

const styles = StyleSheet.create({
    campsite: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
    },
    scrollForCampsite: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 18,
      paddingBottom: 144
    },
    infoForCampsite: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: 375
    },
    photoForCampsite: {
      borderRadius: 12,
      height: 324,
      marginBottom: 15,
      overflow: 'hidden',
      width: 375,
    },


    pricingAndCloutForCampsite: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      width: 375,
    },
    pricingForCampsite: {
      flex: 8
    },
    cloutForCampsite: {
      flex:1
    },



    nameForCampsite: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
    },
    locationForCampsite: {
      fontSize: 15,
      fontWeight: '400',
      color: 'rgba(0,0,0,0.5)',
      paddingBottom: 10
    },
    textForCampsite: {
      fontSize: 15,
      fontWeight: '400',
      color: 'black',
    },
    priceForCampsite: {
      fontSize: 25,
      fontWeight: '600',
      color: '#c00000',
      paddingBottom: 10
    },
    descForCampsite: {
      fontSize: 15,
      fontWeight: '400',
      color: 'black',
      paddingBottom: 10
    },


    buttonToCampsites: {
      marginTop: 20,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#ffffff',
    },
    textToCampsite: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#c00000',
    },
  });
  