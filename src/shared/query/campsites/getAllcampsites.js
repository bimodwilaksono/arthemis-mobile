import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axiosInstance from '../../utils/axiosInstance';
 

const getAllCampsites = async () => {
    const response = await axiosInstance.get(`/api/v1/campsite`);
    return response.data;
}

export const UseGetAllCampsites = () => {
    const {isLoading, data} = useQuery(['allCampsites'],getAllCampsites);
    return {data, isLoading};
}