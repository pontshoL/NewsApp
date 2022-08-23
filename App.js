import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import ReactNative from "./reactNative";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReactJS from "./reactJs";
import Java from "./java";

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return(
    <>
        <View style={styles.main}>
              
          <View style={[styles.container, styles.horizontal]}>
            <View style={styles.text}>
                <Text>
                  Hello, Pontsho
                </Text>
            </View>
            
            <View style={styles.profile}>
              {/* <ActivityIndicator size="large" color="pink" /> */}
              <FontAwesome name="user-circle-o" size={28} color="black" />
            </View>
          </View>
          <View style={styles.line}>
          </View>
          <View style={styles.languages}>
            <Text style={styles.headerText}>
              Programming Languages
            </Text>
          </View>
          <View style={[styles.boxes, styles.horizontal]}>
          <Pressable onPress={()=>navigation.navigate('React Bugs')}>
              <View style={styles.box1}>
                    <Text style={styles.langText}>
                      React Native
                    </Text>
              </View>
          </Pressable>
            
            <Pressable onPress={()=>navigation.navigate('React JS')}>
                <View style={styles.box1}>
                    <Text style={styles.langText}>
                      React JS
                    </Text>
                </View>
            </Pressable>
            
            
          </View>

          <View style={[styles.boxes, styles.horizontal]}>
            <Pressable onPress={()=>navigation.navigate('Java')}>
                   <View style={styles.box1}>
                      <Text style={styles.langText}>
                        Java
                      </Text>
                  </View>
            </Pressable>
                
            <View style={styles.box1}>
                <Text style={styles.langText}>
                  C++
                </Text>
            </View>
            
          </View>
          
          <View style={[styles.boxes, styles.horizontal]}>
          <View style={styles.box1}>
                <Text style={styles.langText}>
                  C#
                </Text>
            </View>
            <View style={styles.box1}>
                <Text style={styles.langText}>
                  Python
                </Text>
            </View>
            
          </View>
       </View>
        

</>

  )
  
}
export default function App(){
   return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="React Bugs" component={ReactNative} />
          <Stack.Screen name="React JS" component={ReactJS} />
          <Stack.Screen name="Java" component={Java} />
        </Stack.Navigator>
      </NavigationContainer>
   )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:40,
    justifyContent: "center"
  },
  main: {
     backgroundColor: "#52bfa2",
     height: '100%'
  },
  boxes: {
    marginTop:20,
    display: "flex",
    justifyContent: "center",
  
  },
  box1: {
     width: 120,
     height: 90,
     backgroundColor: "#a0dac7",
     


     borderRadius:10,
     display: "flex",
     justifyContent: "center",
     border: "2px solid white",
     
  },
  headerText: {
    fontSize: 17
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  text: {
    // backgroundColor: "red",
    padding:10,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: 800
  },
  profile: {
    // backgroundColor: "red",
    padding:10,
  },
  line: {
    width: 250,
    height: 2,
    backgroundColor: "grey",
    alignSelf: "center",
    marginTop: 50
  },
  languages: {
    padding:15,
    marginLeft:50
  },
  langText: {
    alignSelf: "center",
   
  }
});


