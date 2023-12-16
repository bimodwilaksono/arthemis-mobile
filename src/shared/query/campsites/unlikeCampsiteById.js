import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
import axiosInstance from '../../utils/axiosInstance';
 

export const unlikeCampsiteById = async (id) => {
    const response = await axiosInstance.patch(`/api/v1/campsite/removeLike/${id}`);
    return response.data;
};