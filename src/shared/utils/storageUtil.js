import * as SecureStore from "expo-secure-store";

//Secure Store
export const setLocalStorage = async (key, value) => {
    try {
        await SecureStore.setItemAsync(key, value);
        console.log(`${key} saved successfully`);
    } catch (error) {
        console.error(error);
    }
};

export const getLocalStorage = async (key) => {
    try {
        const jsonValue = await SecureStore.getItemAsync(key);
        return jsonValue;
    } catch (error) {
        console.error(error);
    }
};

export const clearLocalStorage = async (key) => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error(error);
        const jsonValue = JSON.stringify(value);
    }
};
