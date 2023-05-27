import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RegionCard } from './RegionCard';
import { Button } from '@rneui/themed';
import { CampsitesScreen } from './CampsitesScreen/CampsitesScreen';

const cards = [
  { photo: "http://d.ibtimes.co.uk/en/full/1438133/mars-sunset.jpg", name: "Jawa Barat", location: "Jawa Barat" },
  { photo: "http://resourcefulenvironment.com/wp-content/uploads/2020/05/Fire-Pit.jpg", name: "Jawa Tengah", location: "Jawa Tengah" },
  { photo: "http://2.bp.blogspot.com/-4hX5dMkSXbM/VTiguJh4a3I/AAAAAAAAALs/HFaF2fuTMvc/s1600/goa-liang-bua.jpg", name: "Jawa Timur", location: "Jawa Timur" }
];

export default function RegionsScreen(props) {

  const [regionsToSelect, setRegionToSelect] = React.useState(null);


  const handleCardClick = (region) => {
    setRegionToSelect(region);
  };

  const handleBackPress = () => {
    setRegionToSelect(null);
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerForCards}>
          {cards.map((item, index) => (
            <RegionCard
              key={index}
              photo={item.photo}
              name={item.name}
              location={item.location}
              onPress={() => handleCardClick(item)}
            />
          ))}
        </View>
      </ScrollView> 
      {regionsToSelect && (
        <CampsitesScreen
          photo={regionsToSelect.photo}
          name={regionsToSelect.name}
          location={regionsToSelect.location}
          onPress={handleBackPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForCards: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  }
});
