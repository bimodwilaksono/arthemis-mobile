import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
import axiosInstance from '../../utils/axiosInstance';
 

const getCampsiteById = async (id) => {
    const response = await axiosInstance.get(`/api/v1/campsite/${id}`);
    return response.data;
}

export const UseGetCampsiteById = (id) => {
    const {isLoading, data, error, refetch} = useQuery(['campsiteById', id],() => getCampsiteById(id));
    return {data, isLoading, error, refetch};
}