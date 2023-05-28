import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
import axiosInstance from '../../utils/axiosInstance';
 

export const likeCampsiteById = async (id) => {
    const response = await axiosInstance.post(`/api/v1/campsite/addLike/${id}`);
    return response.data;
};