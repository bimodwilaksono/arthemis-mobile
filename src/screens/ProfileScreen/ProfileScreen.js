import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileButton } from './ProfileButton';
import { Button } from '@rneui/themed';
import { clearLocalStorage } from '../../shared/utils/storageUtil';


const buttons = [
  {icon: "account", title: "Account", desc: "Manage your account"},
  {icon: "security", title: "Security", desc: "Set two-factor authentification"},
  {icon: "tune-vertical", title: "Preference", desc: "Set dark mode"},
  {icon: "book", title: "Bookings", desc: "Manage all your bookings"},
  {icon: "cog", title: "Settings", desc: "Set notifications and others"}
]


export default function ProfileScreen() {
  const navigation = useNavigation()
  const [modalVisibility, setModalVisibility] = React.useState(false);
  
  
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
            onPress={() => setModalVisibility(true)}
          />
        </View>

        <Modal 
          animationType='slide' 
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisibility(!modalVisibility);
          }}
          transparent={true} 
          visible={modalVisibility}
        >
          <View style={styles.containerForModal}>
            <View style={styles.cardForModal}>
              <Text style={styles.textForModal}>Are you sure?</Text>
              <View style={styles.buttonFlexForModal}>
                <Pressable
                  style={[styles.buttonForModal, styles.buttonForCancelling]}
                  onPress={() => setModalVisibility(!modalVisibility)}>
                  <Text style={styles.textForCancelling}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.buttonForModal, styles.buttonForContinuing]}
                  onPress={() => {
                    clearLocalStorage('token')
                    setModalVisibility(!modalVisibility)}}>
                  <Text style={styles.textForContinuing}>Ok</Text>
                </Pressable>
              </View>
            
          </View>
        </View>
        </Modal>
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
  },







  containerForModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  cardForModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 27,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonFlexForModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonForModal: {
    borderRadius: 10,
    padding: 10,
    width: 81
  },
  buttonForCancelling: {
    backgroundColor: '#c00000',
    marginRight: 10,
  },
  buttonForContinuing: {
    backgroundColor: '#ffffff',
    marginLeft: 5
  },
  textForCancelling: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  textForContinuing: {
    color: '#c00000',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
  },
  textForModal: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
})