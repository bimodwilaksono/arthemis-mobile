import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
 

const getAllOrders = async () => {
    const response = await axiosInstance.get(`/api/v1/order`);
    return response.data;
}

export const UseGetAllOrders = () => {
    const {isLoading, data} = useQuery(['allOrders'],getAllOrders);
    return {data, isLoading};
}