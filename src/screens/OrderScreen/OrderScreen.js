import * as React from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, CheckBox } from '@rneui/base';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';
import DateTimePicker from '@react-native-community/datetimepicker';
import { UsePostOrder } from '../../shared/query/orders/postOrder';


export const OrderScreen = (props) => {
  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;
  const [dateIn, setDateIn] = React.useState(new Date())
  const [dateOut, setDateOut] = React.useState(new Date())
  const [mode, setMode] = React.useState("date")
  const [pickDateIn, startPickDateIn] = React.useState(false)
  const [pickDateOut, startPickDateOut] = React.useState(false)
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)



  const {mutate, isLoading} = UsePostOrder();



  const handleSelectDateIn = (event, dateInSelected) => {
    const dateInNow = dateInSelected || date;
    startPickDateIn(false);
    setDateIn(dateInNow);
  }
  const handleSelectDateOut = (event, dateOutSelected) => {
    const dateOut = dateOutSelected || date;
    startPickDateOut(false);
    setDateOut(dateOut);
  }
  const handlePickDateIn = (modeNow) => {
    startPickDateIn(true);
    setMode(modeNow);
  }
  const handlePickDateOut = (modeNow) => {
    startPickDateOut(true);
    setMode(modeNow);
  }
  const handleCancel = () => {
    startPickDateIn(false);
    startPickDateOut(false);
  }
  const handleOk = () => {
    startPickDateIn(false);
    startPickDateOut(false);
  }
  const handleToggleCheckBox = () => {
    setToggleCheckBox(!toggleCheckBox);
  }



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


        <View style={styles.optionsWrapper}>
          <View style={styles.buttons}>
            <Button 
              title="Check in" 
              buttonStyle={styles.buttonForCheck}
              titleStyle={styles.textForReservation} 
              onPress={() => handlePickDateIn("date")}/>
            <Button 
              title="Check out" 
              buttonStyle={styles.buttonForCheck}
              titleStyle={styles.textForReservation} 
              onPress={() => handlePickDateOut("date")}/>
          </View>
          {pickDateIn && (
            <DateTimePicker
              value={dateIn}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={handleSelectDateIn}
              onCancel={handleCancel}
              onConfirm={handleOk}/>
          )}
          {pickDateOut && (
            <DateTimePicker
              value={dateOut}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={handleSelectDateOut}
              onCancel={handleCancel}
              onConfirm={handleOk}/>
          )}
          <View style={styles.billWrapper}>
            <Text style={[styles.text, {marginTop: 5}]}>Check in: {dateIn.toDateString()}</Text>
            <Text style={[styles.text, {marginTop: 5}]}>Check out: {dateOut.toDateString()}</Text>
            <View style={[styles.cashWrapper, {marginTop: 5}]}>
              <CheckBox checked={toggleCheckBox} containerStyle={styles.checkboxContainer} onPress={handleToggleCheckBox}/>
              <Text style={styles.text}>Cash</Text>
            </View>
            
          </View>
        </View>


        <ListItemTitle style={styles.title}>Your bill</ListItemTitle>
        <View style={styles.billWrapper}>
          <Text style={styles.bill}>IDR {props.price*((dateOut-dateIn)/86400000+1)}</Text>
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
  checkboxContainer: {
    padding: 0,
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


  cardWrapper: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsWrapper: {
    alignItems: "center",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 375
  },
  billWrapper: {
    alignItems: "flex-start",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 4,
    paddingRight: 4,
    width: 375
  },
  cashWrapper: {
    alignItems: "center",
    display: 'flex',
    flexDirection: 'row',
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
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
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
  marginForBareText: {
    marginLeft: 4
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  
  buttonForCheck: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#c00000',
    width: 180
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
