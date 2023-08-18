import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { getLocalStorage, setLocalStorage } from "../../utils/storageUtil";

const createUser = async (payload) => {
    const response = await axiosInstance.post("/api/v1/register", payload);
    return response.data;
};

const UseCreateUser = (navigation) => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(createUser, {
        onSuccess: (data) => {
            const token = data.data;
            setLocalStorage("token", token);
            // navigation.navigate("Campsites");
        },
        onError: (error) => {
            console.log(error);
        },
        onSettled: () => {
            queryClient.invalidateQueries("create");
        },
    });
    return {
        mutate,
        isLoading,
    };
};

export default UseCreateUser;
