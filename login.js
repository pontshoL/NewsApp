import React from "react";
import { Text, View, StyleSheet, Pressable, Image  } from "react-native";
import { TextInput } from "react-native-web";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from './assets/logo.png'


const Login= ({navigation})=>(
    <View style={styles.main}>
        <View style={{width:100, height:100, backgroundColor: '#956b81', alignSelf: 'center',marginTop:110, }}>
            <Image source={logo} style={{width: 80, height: 80, alignSelf: 'center', marginTop: 20}}/>
        </View>
        <Text style={{color: '#956b81', alignSelf: 'center', marginTop:10, fontSize: 20}}>Sign In</Text>
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
            <Pressable onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.login}>
                Log In
            </Text>
            </Pressable>
            <Text style={{color: '#956b81', marginTop: 20}}>Dont have an Account? signUp</Text>
        </View>
       
    </View>
)
export default Login;

const styles = StyleSheet.create({
    main: {
       backgroundColor: "black",
       height: '100%'
    },
    
    password: {
        backgroundColor: "#956b81",
        border: "2px solid black",
        width: 300,
        height:50,
        alignSelf: "center",
        marginTop:6,
        borderRadius: 11,
        top: '15%'
    },
    email: {
        backgroundColor: "#956b81",
        border: "2px solid black",
        width: 300,
        height:50,
        alignSelf: "center",
        marginTop:15,
        borderRadius: 11,
        top: '15%'
    },
    log:{
        backgroundColor: "#956b81",
        border: "2px solid black",
        width: 200,
        height:50,
        alignSelf: "center",
        marginTop:30,
        borderRadius: 11,
        top: '15%'
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