import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Image } from '@rneui/base';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

export const BookingCard = (props) => {
    return (
        <Card containerStyle={styles.cardContainer} wrapperStyle={styles.cardWrapper}>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={styles.textContainer}>
                <CardTitle style={styles.textName}>{props.name}</CardTitle>
                <Text style={styles.textType}>{props.type}</Text>
                
                <Text style={styles.textPrice}>IDR {props.price}</Text>
                <Text style={styles.textDate}>Dibuat pada {props.date}</Text>
                    
            </View>
            <MaterialCommunityIcons style={styles.action} size={24} name="square-edit-outline"/>
            <MaterialCommunityIcons style={styles.action} size={24} name="trash-can-outline"/>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: "transparent",
        borderRadius: 16,
        margin: 10,
        shadowColor: "transparent",
        width: 375
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        flex: 3,
        width: 81,
        height: 81,
        borderRadius: 10
    },
    textContainer: {
        flex: 8,
        marginLeft: 10,
        marginRight: 10
    },
    textName: {
        fontSize: 16,
        marginBottom: 0,
        textAlign: 'left',
    },
    textType: {
        fontSize: 15,
    },
    textPrice: {
        color: "#c00000",
        fontSize: 15,
    },
    textDate: {
        color: "rgba(0, 0, 0,0.5)",
        fontSize: 12
    },
    action: {
        flex: 1
    }
})