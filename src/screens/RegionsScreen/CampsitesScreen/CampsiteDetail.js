import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { OrderScreen } from '../../OrderScreen/OrderScreen';
import { useNavigation } from '@react-navigation/native';


export const CampsiteDetail = (props) => {
  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;
  const navigation = useNavigation();

  const [campsiteToSelect, setCampsiteToSelect] = React.useState(null);

  const handleCardClick = (campsite) => {
    setCampsiteToSelect(campsite);
  };

  const handleBackPress = () => {
    setCampsiteToSelect(null);
  };

  return (
    <View style={[styles.campsite, { height: slidePageHeight }]}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Image style={styles.photo} source={{ uri: props.photo }} />
            <View style={styles.info}>
              <Text style={styles.name}>{props.name}</Text>
              <Text style={styles.location}>{props.location}</Text>
              <View style={styles.pricingAndClout}>
                <View style={styles.pricing}>
                  <Text style={styles.text}>Mulai dari</Text>
                  <Text style={styles.price}>IDR {props.price}/malam</Text>
                </View>
                <MaterialCommunityIcons name="thumb-up-outline" size={30} style={styles.clout}/>
                <Text style={[styles.text, styles.clout, {textAlign: "center"}]}>{props.likeCount}</Text>
                <MaterialCommunityIcons name="comment-text-outline" size={30} style={styles.clout}/>
                <Text style={[styles.text, styles.clout, {textAlign: "center"}]}>60</Text>
              </View>
              
              <Text style={styles.desc}>{props.desc}</Text>
              <Text style={styles.desc}>Address: {props.address}</Text>
            </View>
            <View style={styles.buttons}>
              <Button
                title="Make reservation"
                buttonStyle={styles.buttonForReservation}
                titleStyle={styles.textForReservation}
                onPress={() => handleCardClick(props)}
              />
              <Button
                title="Back"
                buttonStyle={styles.buttonToCampsites}
                titleStyle={styles.textToCampsite}
                onPress={props.onPress}
              />
            </View>
          </ScrollView>
          {campsiteToSelect && (
            <OrderScreen
              photo={campsiteToSelect.photo}
              name={campsiteToSelect.name}
              location={campsiteToSelect.location}
              price={campsiteToSelect.price}
              onPress={handleBackPress}
            />
          )}
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
    scroll: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 18,
      paddingBottom: 144
    },
    info: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: 375
    },
    photo: {
      borderRadius: 12,
      height: 324,
      marginBottom: 15,
      overflow: 'hidden',
      width: 375,
    },


    pricingAndClout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      width: 375,
    },
    pricing: {
      flex: 8
    },
    clout: {
      flex:1
    },



    name: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black',
    },
    location: {
      fontSize: 15,
      fontWeight: '400',
      color: 'rgba(0,0,0,0.5)',
      paddingBottom: 10
    },
    text: {
      fontSize: 15,
      fontWeight: '400',
      color: 'black',
    },
    price: {
      fontSize: 25,
      fontWeight: '600',
      color: '#c00000',
      paddingBottom: 10
    },
    desc: {
      fontSize: 15,
      fontWeight: '400',
      color: 'black',
      paddingBottom: 10
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
    },
    buttonForReservation: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#c00000',
      width: 180
    },
    textForReservation: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    buttonToCampsites: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#ffffff',
      width: 180
    },
    textToCampsite: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#c00000',
    },
  });
  