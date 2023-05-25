import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileButton } from './ProfileButton';
import { Button } from '@rneui/themed';


const buttons = [
  {icon: "account", title: "Account", desc: "Manage your account"},
  {icon: "security", title: "Security", desc: "Set two-factor authentification"},
  {icon: "tune-vertical", title: "Preference", desc: "Set dark mode"},
  {icon: "book", title: "Bookings", desc: "Manage all your bookings"},
  {icon: "cog", title: "Settings", desc: "Set notifications and others"}
]


export default function ProfileScreen() {
  const navigation = useNavigation()
  const alertForLogout = () => Alert.alert('You are about to logging out', 'Are you sure?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK', 
      onPress: () => console.log('OK Pressed'),
      style: "ok",
    },
      
  ]);
  
  
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
          {buttons?.map((item, index) => (
            <ProfileButton
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
          <Button 
            title="Logout" 
            buttonStyle={styles.buttonForLogout}
            titleStyle={styles.textForLogout}
            onPress={alertForLogout}
          />
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