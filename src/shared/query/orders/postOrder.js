import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { setLocalStorage } from "../../utils/storageUtil";
 

const postOrder = async () => {
    const response = await axiosInstance.get(`/api/v1/order`);
    return response.data;
}

export const UsePostOrder = () => {
    const queryClient = useQueryClient();
    const {isLoading, mutate} = useQuery(postOrder, {
        onSuccess: (data) => {},
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries("create");
        },
    }
    );
    return {
        mutate,
        isLoading,
    };
}