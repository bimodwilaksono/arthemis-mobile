import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
 

const getAllCampsites = async () => {
    const response = await axios.get(`${BASE_URL}/api/v1/campsite`);
    return response.data;
}

export const UseGetAllCampsites = () => {
    const {isLoading, data} = useQuery(['allCampsites'],getAllCampsites);
    return {data, isLoading};
}