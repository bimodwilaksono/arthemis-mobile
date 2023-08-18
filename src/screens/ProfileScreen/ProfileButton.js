import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const ProfileButton = (props) => {
    return(
        <TouchableOpacity style={styles.buttonForOthers}>
            <MaterialCommunityIcons name={props.icon} size={30} style={styles.spaceForIcon}/>
            <View style={styles.spaceForText}>
              <Text style={styles.textForButtonTitle}>{props.title}</Text>
              <Text style={styles.textForButtonDesc}>{props.desc}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}  style={styles.spaceForIcon}/>
          </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    avatar: {
      borderRadius: 50,
      margin: 15,
      height: 120,
      width: 120
    },
    textForName: {
      flexWrap: "wrap",
      fontSize: 24,
      fontWeight: 600,
      marginBottom: 15,
      textAlign: "center",
      width: 324
    },
    textForButtonTitle: {
      fontSize: 15,
      fontWeight: 500,
      marginBottom: 3.125
    },
    textForButtonDesc: {
      fontSize: 12,
      fontWeight: 400,
      flexWrap: "wrap",
      marginTop: 3.125
    },
    textForLogout: {
      color: "#c00000",
      fontSize: 15,
      fontWeight: 500,
      marginBottom: 3.125,
      textAlign: "center"
    },
    spaceForText: {
      flex: 4,
      marginLeft: 15,
      marginRight: 15
    },
    buttonForOthers: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: 12.5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 12.5,
      paddingBottom: 15,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 15,
      width: 324
    },
    buttonForLogout: {
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderRadius: 12.5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 12.5,
      paddingBottom: 15,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 15,
      width: 200
    }
  })