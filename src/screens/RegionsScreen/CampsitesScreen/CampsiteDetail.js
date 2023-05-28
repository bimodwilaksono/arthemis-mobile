import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { OrderScreen } from '../../OrderScreen/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { likeCampsiteById } from '../../../shared/query/campsites/likeCampsiteById';
import {unlikeCampsiteById } from '../../../shared/query/campsites/unlikeCampsiteById';

export const CampsiteDetail = (props) => {
  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;
  const navigation = useNavigation();

  const [orderPage, setOrderPage] = React.useState(null);
  const [like, setLike] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(props.likeCount);

  const handleCardClick = (campsite) => {setOrderPage(campsite);};
  const handleBackPress = () => {setOrderPage(null);};
  const handleLikePress = async () => {
    setLike(!like);
    try {
      let response = {};
      if(like) response = await unlikeCampsiteById(props.id);
      else response = await likeCampsiteById(props.id);
      setLikeCount(response.data.likeCount);
    } catch (error) {
      console.error("Error occurred while updating like count:", error);
    }
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
              <Text style={styles.price}>IDR {props.price}/hari</Text>
            </View>
            <MaterialCommunityIcons
              name={like ? "thumb-up" : "thumb-up-outline"}
              size={30}
              style={styles.clout}
              onPress={handleLikePress}
            />
            <Text style={[styles.text, styles.clout, { textAlign: "center" }]}>{likeCount}</Text>
          </View>
          <Text style={styles.desc}>Alamat: {props.address}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            title="Make reservation"
            buttonStyle={styles.buttonForReservation}
            titleStyle={styles.textForReservation}
            onPress={(props) => handleCardClick(props)}
          />
          <Button
            title="Back"
            buttonStyle={styles.buttonToCampsites}
            titleStyle={styles.textToCampsite}
            onPress={props.onPress}
          />
        </View>
      </ScrollView>
      {orderPage && (
        <OrderScreen
          photo={props.photo}
          name={props.name}
          location={props.location}
          price={props.price}
          onPress={handleBackPress}
        />
      )}
    </View>
  );
};

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
  