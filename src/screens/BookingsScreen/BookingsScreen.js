import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '@rneui/base';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { BookingCard } from './BookingCard';
import {UseGetAllOrders } from "../../shared/query/orders/getAllOrders"

const cards = [
    {image: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Boulevard Boulevard", date: "2048/11/31", type: "Campsite", price: 3600},
    {image: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Boulevard Boulevard", date: "2048/11/31", type: "Campsite", price: 3600},
    {image: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Boulevard Boulevard", date: "2048/11/31", type: "Campsite", price: 3600},
    {image: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Boulevard Boulevard", date: "2048/11/31", type: "Campsite", price: 3600},
    {image: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Boulevard Boulevard", date: "2048/11/31", type: "Campsite", price: 3600},
    {image: "https://media2.fdncms.com/northcoast/imager/u/original/6500641/cal4-cf2659682b34c569.jpg", name: "Boulevard Boulevard", date: "2048/11/31", type: "Campsite", price: 3600},
]

export function BookingsScreen() {
    const {data, isLoading} = UseGetAllOrders();
    return (
        <ScrollView>
            <View style={styles.view}>
                {data?.data?.content?.map((item, index) => (
                    <BookingCard key={index} {...item} />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        marginBottom: 18,
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})