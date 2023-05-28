import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
  return (
    <View style={[styles.region, { height: slidePageHeight }]}>
      {isLoading ? (<Text style={styles.progress}>Loading...</Text>): data? (
          <ScrollView contentContainerStyle={styles.contentForRegion}>
            <Image style={styles.photoForRegion} source={{ uri: props.photo}} />
            <Text style={styles.nameForRegion}>{props.name}</Text>
              <Text style={styles.locationForRegion}>{props.location}</Text>
              <Button
                title="Back"
                buttonStyle={styles.buttonToRegions}
                titleStyle={styles.textToRegions}
                onPress={props.onPress}
              />
              <View style={styles.campsitesForRegion}>
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
        ) : (<Text>Data not found</Text>)
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
    campsitesForRegion: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      alignItems: 'center',
      paddingBottom: 100,
      paddingTop: 25
    },
    contentForRegion: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 25
    },
    photoForRegion: {
      borderRadius: 12,
      height: 362,
      marginBottom: 15,
      overflow: 'hidden',
      width: 362,
    },
    nameForRegion: {
      fontSize: 24,
      fontWeight: '500',
      color: 'black',
    },
    locationForRegion: {
      fontSize: 18,
      fontWeight: '400',
      color: 'black',
    },
    buttonToRegions: {
      marginTop: 20,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    textToRegions: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#c00000',
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
      textAlignVertical: "center"
    }
  });
  