import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { setLocalStorage } from "../../utils/storageUtil";

const createUser = async (payload) => {
    const response = await axiosInstance.post("/register", payload);
    return response.data;
};

const UseCreateUser = (navigation) => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(createUser, {
        onSuccess: (data) => {
            const token = data.data;
            setLocalStorage("token", token);
            navigation.navigate("HOME");
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
