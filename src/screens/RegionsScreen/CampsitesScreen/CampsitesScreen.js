import * as React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import { CampsiteCard } from './CampsiteCard';
import { CampsiteDetail } from './CampsiteDetail';
import { UseGetAllCampsites } from '../../../shared/query/campsites/getAllcampsites';



export const CampsitesScreen = (props) => {
  const [campsitesToSelect, setCampsitesToSelect] = React.useState(null);
  


  const {data, isLoading} = UseGetAllCampsites();
  const photoAsPlaceholder = "https://img.lovepik.com/element/40021/7866.png_1200.png"


  const handleCardClick = (campsite) => {
    setCampsitesToSelect(campsite);
  };

  const handleBackPress = () => {
    setCampsitesToSelect(null);
  };

  const windowDimensions = Dimensions.get('window');
  const slidePageHeight = windowDimensions.height;
  const slidePageWidth = windowDimensions.width;
  return (
    <View style={[styles.region, { height: slidePageHeight }]}>
      {isLoading ? (<Text style={styles.progress}>Loading...</Text>): data? (
          <ScrollView contentContainerStyle={styles.content}>
            <ImageBackground style={[styles.photo, {width: slidePageWidth}]} source={{ uri: props.photo}}>
              <View style={styles.unnamed}>
                <Text style={styles.name}>{props.name}</Text>
                <Button
                title="Back"
                buttonStyle={styles.buttonToRegions}
                containerStyle={styles.containerToRegions}
                titleStyle={styles.textToRegions}
                onPress={props.onPress}
              />
              </View>
              
            </ImageBackground>
              
              <View style={styles.campsites}>
              {data.data.content.map((item, index) => {
                if (item.province === props.name) {
                  return (
                    <CampsiteCard
                      key={index}
                      photo={item.photo ? item.photo : photoAsPlaceholder}
                      name={item.name}
                      location={item.province}
                      onPress={() => handleCardClick(item)}
                    />
                  );
                }
              })}
              </View>
            </ScrollView>
        ) : (<Text style={styles.progress}>Data not found</Text>)
      }
      {campsitesToSelect && (
        <CampsiteDetail
          id={campsitesToSelect.id}
          photo={campsitesToSelect.photo ? campsitesToSelect.photo : photoAsPlaceholder}
          name={campsitesToSelect.name}
          location={campsitesToSelect.province}
          price={campsitesToSelect.price}
          desc={campsitesToSelect.desc}
          address={campsitesToSelect.address}
          likeCount={campsitesToSelect.likeCount}
          onPress={handleBackPress}
        />
      )}
          
    </View>
  )
}

const styles = StyleSheet.create({
    region: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff'
    },
    campsites: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      alignItems: 'center',
      paddingBottom: 100,
      paddingTop: 25
    },
    content: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBottom: 25,
      paddingLeft: 25,
      paddingRight: 25,
    },
    photo: {
      height: 300,
      overflow: 'hidden',
    },
    unnamed: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },




    name: {
      fontSize: 24,
      fontWeight: '500',
      color: 'white',
    },
    location: {
      fontSize: 18,
      fontWeight: '400',
      color: 'black',
    },


    buttonToRegions: {
      marginTop: 4,
      padding: 4,
      borderRadius: 8,
      backgroundColor: '#ffffff',
    },
    containerToRegions: {
      alignItems: "flex-start",
    },
    textToRegions: {
      fontSize: 16,
      fontWeight: "normal",
      color: 'black',
    },


    progress: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      fontSize: 20,
      textAlign: "center",
      textAlignVertical: "center",
      paddingBottom: 120
    }
  });
  