import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '@rneui/base';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';


export const OrderScreen = (props) => {
  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;
  const [dateIn, setDateIn] = React.useState(new Date())
  const [dateOut, setDateOut] = React.useState(new Date())
  

  
  return (
    <View style={[styles.campsite, { height: slidePageHeight }]}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <ListItemTitle style={styles.title}>Order</ListItemTitle>
            <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}>
                <Image style={styles.photo} source={{ uri: props.photo }} />
                <View style={styles.info}>
                    
                    <Text style={styles.name} numberOfLines={1}>{props.name}</Text>
                    <Text style={styles.location}>{props.location}</Text>
                    <Text style={styles.price}>IDR {props.price}/hari</Text>
                    
                </View>
            </Card>
            <ListItemTitle style={styles.title}>Options</ListItemTitle>



            <View style={styles.check}>
              <Text style={styles.text}>Check-in: {dateIn.toISOString()}</Text>
              <Text style={styles.text}>Check-out: {dateOut.toISOString()}</Text>
              <Text style={styles.text}>Cash</Text>
            </View>
            
            

            <ListItemTitle style={styles.title}>Your bill</ListItemTitle>
            <View style={styles.check}>
              <Text style={styles.bill}>IDR {props.price}</Text>
            </View>
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
        flex: 9,
        marginLeft: 10,
        marginRight: 10
    },
    photo: {
        flex: 3,
        width: 81,
        height: 81,
        borderRadius: 10
    },
    check: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: "left",
      width: 375
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
    bill: {
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
      marginTop: 10
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
  