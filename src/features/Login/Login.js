import React, { useState } from "react";
import { Input, Button, Text, CheckBox, makeStyles } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { REGISTER } from "../../shared/constants/routes";
import { View } from "react-native";
import UseLoginUser from "../../shared/common/hooks/loginUser";

import * as SecureStore from "expo-secure-store";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { mutate, isLoading } = UseLoginUser(navigation);

    const styles = useStyles();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Enter your email...'
                        label='Email'
                        onBlur={onBlur}
                        value={value}
                        onChangeText={(value) => onChange(value)}
                        errorMessage={errors?.email?.message}
                    />
                )}
                name='email'
                rules={{
                    required: true,
                }}
            />

            <Controller
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                        placeholder='Enter your password...'
                        label='Password'
                        value={value}
                        onChangeText={(value) => onChange(value)}
                        secureTextEntry={!showPassword}
                        errorMessage={errors?.password?.message}
                    />
                )}
                name='password'
                rules={{ required: true }}
            />

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: 18,
                    marginBottom: 18,
                    backgroundColor: "#fff",
                }}>
                <CheckBox
                    title='Show Password'
                    checked={showPassword}
                    size={20}
                    onPress={() => setShowPassword(!showPassword)}
                />

                <Text onPress={() => navigation.navigate(REGISTER)} style={styles.text}>
                    Register here
                </Text>
            </View>

            <Button
                onPress={handleSubmit(onSubmit)}
                radius={"md"}
                containerStyle={{ width: "100%" }}
                style={{ textAlign: "center" }}>
                Login
            </Button>
        </View>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
        backgroundColor: "#fff",
    },
    text: {
        color: theme.colors.primary,
    },
}));

export default Login;
