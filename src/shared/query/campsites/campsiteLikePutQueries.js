import { useQuery } from "@tanstack/react-query";
import {BASE_URL} from "@env";
import axios from "axios";
 

export const putCampsiteLikeById = async (props) => {
    const response = await axios.get(`${BASE_URL}/api/v1/campsite/${props.id}`,{likeCount: props.likeCount + 1});
    return response.data;
}

export const UsePutCampsiteLikeById = () => {
    const {isLoading, data} = useQuery(['campsiteById'],putCampsiteLikeById());
    return {data, isLoading};
}