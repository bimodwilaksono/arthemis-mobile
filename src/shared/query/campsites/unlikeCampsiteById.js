import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
 

export const unlikeCampsiteById = async (id) => {
    const response = await axios.post(`${BASE_URL}/api/v1/campsite/removeLike/${id}`);
    return response.data;
};