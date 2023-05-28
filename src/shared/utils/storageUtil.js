import * as SecureStore from "expo-secure-store";

//Async Storage
export const setLocalStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await SecureStore.setItemAsync(key, jsonValue);
    } catch (error) {
        console.error(error);
    }
};

export const getLocalStorage = async (key) => {
    try {
        const jsonValue = await SecureStore.getItemAsync(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error(error);
    }
};

export const clearLocalStorage = async (key) => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error(error);
    }
};
