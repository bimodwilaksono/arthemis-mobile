import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@rneui/themed';
import { CampsiteCard } from './CampsiteCard';
import { CampsiteDetail } from './CampsiteDetail';
import { UseGetAllCampsites } from '../../../shared/query/campsitesQueries';

// const cards = [
//   { 
//     photo: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", 
//     name: "Basketball Perimaria", 
//     location: "Cikelinci, Jawa Utara",
//     price: 3600,
//     desc: "This campsite is well-known for its sightings of bigfoots. In fact, this area has been designed meticulously to provide you the ambience of North American forests, especially with the inclusions of bigfoots. They're hard to find, but if you manage to find ones, you can ask them for selfies for free!",
//     address: "Cikelinci, Grobogan Regency, North Java 3600" 
//   },
//   { 
//     photo: "https://i1.wp.com/doesgodexist.today/wp-content/uploads/2019/02/Crater-Meteor-Barringer.jpg?resize=1024%2C683&ssl=1", 
//     name: "Boulevard van Diego", 
//     location: "Citikus, North Java" ,
//     price: 3600,
//     desc: "This campsite is based on the Chicxulub crater.",
//     address: "[redacted]" 
//   },
//   { 
//     photo: "http://assets.climatecentral.org/images/uploads/news/10_29_14_upton_Antarctic_storm_winds_windy.jpg", 
//     name: "Cochon le Bouffon", 
//     location: "Cicelurut, North Java" ,
//     price: 3600,
//     desc: "[redacted]",
//     address: "[redacted]" 
//   },
//   { 
//     photo: "http://d.ibtimes.co.uk/en/full/1438133/mars-sunset.jpg", 
//     name: "Boulevard Something", 
//     location: "Citupai, North Java" ,
//     price: 3600,
//     desc: "[redacted]",
//     address: "[redacted]" 
//   },
//   { 
//     photo: "http://resourcefulenvironment.com/wp-content/uploads/2020/05/Fire-Pit.jpg", 
//     name: "Boulevard Encore", 
//     location: "Cibajing, North Java" ,
//     price: 3600,
//     desc: "[redacted]",
//     address: "[redacted]" 
//   },
//   { 
//     photo: "http://2.bp.blogspot.com/-4hX5dMkSXbM/VTiguJh4a3I/AAAAAAAAALs/HFaF2fuTMvc/s1600/goa-liang-bua.jpg", 
//     name: "Boulevard Lagi", 
//     location: "Cikelelawar, North Java" ,
//     price: 3600,
//     desc: "[redacted]",
//     address: "[redacted]" 
//   }
// ];

export const CampsitesScreen = (props) => {
  const [campsitesToSelect, setCampsitesToSelect] = React.useState(null);


  const {data, isLoading} = UseGetAllCampsites();



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
            <Image style={styles.photoForRegion} source={{ uri: props.photo }} />
            <Text style={styles.nameForRegion}>{props.name}</Text>
              <Text style={styles.locationForRegion}>{props.location}</Text>
              <Button
                title="Back"
                buttonStyle={styles.buttonToRegions}
                titleStyle={styles.textToRegions}
                onPress={props.onPress}
              />
              <View style={styles.campsitesForRegion}>
                {data.data.content.map((item,index)=> (
                  <CampsiteCard 
                    key={index}
                    photo={item.photo}
                    name={item.name}
                    location={item.province}
                    
                    onPress={() => handleCardClick(item)}
                  />
                ))}
              </View>
            </ScrollView>
        ) : (<Text>Data not found</Text>)
      }
      {campsitesToSelect && (
        <CampsiteDetail
          photo={campsitesToSelect.photo}
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
  