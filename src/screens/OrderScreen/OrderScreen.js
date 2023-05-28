import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '@rneui/base';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';


export const OrderScreen = (props) => {
  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;

  
  return (
    <View style={[styles.campsite, { height: slidePageHeight }]}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <ListItemTitle style={styles.title}>Order</ListItemTitle>
            <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}>
                <Image style={styles.photo} source={{ uri: props.photo }} />
                <View style={styles.info}>
                    
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.location}>{props.location}</Text>
                    <Text style={styles.price}>IDR {props.price}</Text>
                    
                </View>
                <View style={styles.counterAndNight}>
                    <Text style={styles.text}>Hari</Text>
                    <View style={styles.counter}>
                        <MaterialCommunityIcons name="plus-circle" size={27} style={styles.count}/>
                        <Text style={[styles.text, styles.count, {textAlign: "center"}]}>1</Text>
                        <MaterialCommunityIcons name="minus-circle" size={27} style={styles.count}/>
                    </View>
                </View>
                
            </Card>
            <ListItemTitle style={styles.title}>Payment methods</ListItemTitle>
            <View style={styles.buttons}>
              <Button
                title="Pay"
                buttonStyle={styles.buttonForReservation}
                titleStyle={styles.textForReservation}
                onPress={props.onPress}
              />
              <Button
                title="Cancel"
                buttonStyle={styles.buttonToCampsites}
                titleStyle={styles.textToCampsite}
                onPress={props.onPress}
              />
            </View>
            
            
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
    scroll: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 9,
      paddingBottom: 144
    },
    cardContainer: {
        backgroundColor: "#ffffff",
        borderColor: "transparent",
        borderRadius: 16,
        margin: 0,
        shadowColor: "transparent",
        width: 375
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info: {
        flex: 6,
        marginLeft: 10,
        marginRight: 10
    },
    photo: {
        flex: 3,
        width: 81,
        height: 81,
        borderRadius: 10
    },



    counterAndNight: {
        alignItems: 'center',
        flex: 3,
        justifyContent:'center',
    },
    counter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
    },
    count: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5
    },



    title: {
        fontSize: 20,
        fontWeight: "800",
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'left',
        width: 375
    },
    name: {
        fontSize: 16,
        marginBottom: 0,
        textAlign: 'left',
    },
    location: {
        color: "rgba(0, 0, 0,0.5)",
        fontSize: 12
    },
    text: {
      fontSize: 15,
      fontWeight: '400',
      color: 'black',
    },
    price: {
        color: "#c00000",
        fontSize: 15,
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
  