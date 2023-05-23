import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ProfileScreen() {
  const navigation = useNavigation()
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])
    return (
      <ScrollView>
        <View style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center' ,
          marginTop: 60
        }}>
          <Image 
            style={styles.avatar}
            source={require("../../../assets/icon.png")}
          />
          <Text style={styles.textForName}>Marquis Soliloquy de Camouflage</Text>
          <TouchableOpacity style={styles.buttonForOthers}>
            <MaterialCommunityIcons name="account" size={30} style={styles.spaceForIcon}/>
            <View style={styles.spaceForText}>
              <Text style={styles.textForButtonTitle}>Click</Text>
              <Text style={styles.textForButtonDesc}>Manage your account</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}  style={styles.spaceForIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForOthers}>
            <MaterialCommunityIcons name="security" size={30} style={styles.spaceForIcon}/>
            <View style={styles.spaceForText}>
              <Text style={styles.textForButtonTitle}>Security</Text>
              <Text style={styles.textForButtonDesc}>Set two-factor authentification</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}  style={styles.spaceForIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForOthers}>
            <MaterialCommunityIcons name="tune-vertical" size={30} style={styles.spaceForIcon}/>
            <View style={styles.spaceForText}>
              <Text style={styles.textForButtonTitle}>Preference</Text>
              <Text style={styles.textForButtonDesc}>Set dark mode</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}  style={styles.spaceForIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForOthers}>
            <MaterialCommunityIcons name="book" size={30} style={styles.spaceForIcon}/>
            <View style={styles.spaceForText}>
              <Text style={styles.textForButtonTitle}>Bookings</Text>
              <Text style={styles.textForButtonDesc}>Manage all your bookings</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}  style={styles.spaceForIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForOthers}>
            <MaterialCommunityIcons name="cog" size={30} style={styles.spaceForIcon}/>
            <View style={styles.spaceForText}>
              <Text style={styles.textForButtonTitle}>Settings</Text>
              <Text style={styles.textForButtonDesc}>Set notifications and others</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25}  style={styles.spaceForIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForLogout}>
              <Text style={styles.textForLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    );
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