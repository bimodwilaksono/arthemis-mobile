import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
 

const getAllOrders = async () => {
    const response = await axios.get(`${BASE_URL}/api/v1/order`);
    return response.data;
}

export const UseGetAllOrders = () => {
    const {isLoading, data} = useQuery(['allOrders'],getAllOrders);
    return {data, isLoading};
}