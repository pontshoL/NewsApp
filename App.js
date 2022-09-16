import React,{useEffect, useState} from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login";
import Register from "./register";
import { getArticles} from '././service/news';
import { articles_url, _api_key, category, country_code} from './config/rest-config';
import MoreDetails from "./MoreDetails";
import icon from './assets/broken.png';
const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {

  const [news, setNews] = useState([])


  //fetching data
const getData = () =>{

  fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e738c7a8ae604d9ba592389999c267b0`).then((results)=>results.json()).then((data)=>{
         console.log(data.articles)
         setNews(data.articles)
  })
}

useEffect(()=>{
getData()    
console.log('i am running')
},[])
  
  return(
    
    
    <View style= {styles.main}>
    <ScrollView>
              <View style={styles.line}>
              </View>
    
              <View style={styles.languages}>
                <Text style={styles.headerText}>
                  Latest News Updates
                </Text>
              </View>

              {
                news.map((results, index)=>(
                  
                    <View style={[styles.boxes, styles.horizontal1]}>
                      <Pressable onPress={() => navigation.navigate('details',{
                        description:results.description,
                        image:results.urlToImage,
                        content:results.content,
                        author: results.author,
                        title: results.title
                      })}>
                        {
                            results.urlToImage ? (
                              
                                 <View style={styles.box1}>
                                 <Image style={{height:300, width:'100%'}} source={results.urlToImage} />
                                  <Text style={styles.langText}>
                                  {results.title}
                                  </Text>
                                  <Text style={{padding:7, color:'white'}}>
                                  {results.publishedAt
                                                      } 
                          </Text>
                        </View>
                            
                           ):(
                               
                                   <View style={styles.box1}>
                                 <Image style={{height:300, width:'100%'}} source={icon} />
                                  <Text style={styles.langText}>
                                  {results.title}
                                  </Text>
                                  <Text style={{padding:7, color:'white'}}>
                                  {results.publishedAt
                                                      }
                          </Text>
                        </View>
                               
                           )
                        }
                        
                      </Pressable>

            </View>
                  
                ))
              }
           </ScrollView>
    </View>          


  )
  
}
export default function App(){
   return(
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/> */}
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name='details' component={MoreDetails}/>
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
     backgroundColor: "black",
     height: '100%'
  },
  boxes: {
    marginTop:20,
    display: "flex",
    justifyContent: "center",

  
  },
  box1: {
     width: 320,
 
     backgroundColor: "#956b81",
     borderRadius:10,
     display: "flex",
     justifyContent: "center",
     border: "2px solid black",
     marginBottom: 18,
     alignSelf: "center"
     
  },
  headerText: {
    fontSize: 17,
    color: '#956b81'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  horizontal1: {
     flexDirection: "column"
  },
  text: {
    // backgroundColor: "red",
    padding:10,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: 800,
   
  },
  profile: {
    // backgroundColor: "red",
    padding:10,
    backgroundColor: 'white'
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
    color: 'white',
    padding:10
  }
});


