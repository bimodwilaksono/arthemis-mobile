import { Button, CheckBox, Input, Text, makeStyles } from "@rneui/themed";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LOGIN } from "../../shared/constants/routes";
import { View } from "react-native";
import { register } from "../../shared/redux/commonstate/authAction";
import { connect } from "react-redux";
import UseCreateUser from "../../shared/common/hooks/registerUser";

const schema = yup.object({
    name: yup.string().required().min(2),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Register = (props) => {
    const { navigation, register } = props;
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const { mutate, isLoading } = UseCreateUser(navigation);

    const styles = useStyles();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        // console.log(data);
        // register(data, () => console.log("success register"));
        mutate(data);
    };
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                    <Input
                        placeholder='Enter your name...'
                        label='Name'
                        onBlur={onBlur}
                        value={value}
                        onChangeText={(value) => onChange(value)}
                        errorMessage={errors?.name?.message}
                    />
                )}
                name='name'
                rules={{
                    required: true,
                }}
            />

            <Controller
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
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
                        onBlur={onBlur}
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

                <Text onPress={() => navigation.navigate(LOGIN)} style={styles.text}>
                    Sign in here
                </Text>
            </View>

            <Button onPress={handleSubmit(onSubmit)}>Register</Button>
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

const mapStateToProps = (state) => ({
    token: state.auth.token,
});

// export default connect(null, { register })(Register);
export default Register;
