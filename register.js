import React from "react";
import { Text, View, StyleSheet,  } from "react-native";
import { TextInput } from "react-native-web";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const Register= ({navigation})=>(
    <View style={styles.main}>
       
        <View style={styles.email}>
            <Text style={styles.mail}>
                Email
            </Text>
        </View>
        <View style={styles.password}>
            <Text style={styles.mail}>
                password
            </Text>
        </View>
        
        <View style={styles.log}>
            <Text style={styles.login}>
                Sign Up
            </Text>
        </View>
    </View>
)
export default Register;

const styles = StyleSheet.create({
    main: {
       backgroundColor: "#52bfa2",
       height: '100%'
    },
    
    password: {
        backgroundColor: "#a0dac7",
        border: "2px solid white",
        width: 300,
        height:50,
        alignSelf: "center",
        marginTop:6,
        borderRadius: 20,
        top: '40%'
    },
    email: {
        backgroundColor: "#a0dac7",
        border: "2px solid white",
        width: 300,
        height:50,
        alignSelf: "center",
        marginTop:15,
        borderRadius: 20,
        top: '40%'
    },
    log:{
        backgroundColor: "#a0dac7",
        border: "2px solid white",
        width: 300,
        height:50,
        alignSelf: "center",
        marginTop:12,
        borderRadius: 20,
        top: '40%'
    },
    mail: {
        color: "white",
        marginLeft: 15,
        marginTop: 10
    },
    login:{
        color: "white",
        marginLeft: 15,
        marginTop: 10,
        alignSelf: "center"
    }
    
})