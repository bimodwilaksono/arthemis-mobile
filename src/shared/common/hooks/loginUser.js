import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { setLocalStorage } from "../../utils/storageUtil";

const loginUser = async (payload) => {
    const response = await axiosInstance.post("/api/v1/login", payload);
    return response.data;
};

const UseLogineUser = (login) => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(loginUser, {
        onSuccess: (data) => {
            const token = data.data;
            setLocalStorage("token", token);
            login(token);
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

export default UseLogineUser;
