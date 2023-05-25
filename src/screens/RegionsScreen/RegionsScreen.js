import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RegionCard } from './RegionCard';
import { Button } from '@rneui/themed';
import { CampsitesScreen } from './CampsitesScreen/CampsitesScreen';

const cards = [
  { photo: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Basketball Perimaria", location: "Cikelinci" },
  { photo: "https://i1.wp.com/doesgodexist.today/wp-content/uploads/2019/02/Crater-Meteor-Barringer.jpg?resize=1024%2C683&ssl=1", name: "Boulevard van Diego", location: "Citikus" },
  { photo: "http://assets.climatecentral.org/images/uploads/news/10_29_14_upton_Antarctic_storm_winds_windy.jpg", name: "Cochon le Bouffon", location: "Cicelurut" },
  { photo: "http://d.ibtimes.co.uk/en/full/1438133/mars-sunset.jpg", name: "Boulevard Something", location: "Cibajing" },
  { photo: "http://resourcefulenvironment.com/wp-content/uploads/2020/05/Fire-Pit.jpg", name: "Boulevard Encore", location: "Citupai" },
  { photo: "http://2.bp.blogspot.com/-4hX5dMkSXbM/VTiguJh4a3I/AAAAAAAAALs/HFaF2fuTMvc/s1600/goa-liang-bua.jpg", name: "Boulevard Lagi", location: "Cikelelawar" },
  { photo: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Basketball Perimaria", location: "Cikelinci" },
  { photo: "https://i1.wp.com/doesgodexist.today/wp-content/uploads/2019/02/Crater-Meteor-Barringer.jpg?resize=1024%2C683&ssl=1", name: "Boulevard van Diego", location: "Citikus" },
  { photo: "http://assets.climatecentral.org/images/uploads/news/10_29_14_upton_Antarctic_storm_winds_windy.jpg", name: "Cochon le Bouffon", location: "Cicelurut" },
  { photo: "http://d.ibtimes.co.uk/en/full/1438133/mars-sunset.jpg", name: "Boulevard Something", location: "Cibajing" },
  { photo: "http://resourcefulenvironment.com/wp-content/uploads/2020/05/Fire-Pit.jpg", name: "Boulevard Encore", location: "Citupai" },
  { photo: "http://2.bp.blogspot.com/-4hX5dMkSXbM/VTiguJh4a3I/AAAAAAAAALs/HFaF2fuTMvc/s1600/goa-liang-bua.jpg", name: "Boulevard Lagi", location: "Cikelelawar" }
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
