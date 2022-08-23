import React from "react";
import { Text, View, StyleSheet,  } from "react-native";



const ReactNative = () => (
      <>
          <View style={styles.main}>
             <View style={styles.mainCon}>
                <View style={styles.bugs}>
                  <Text style={styles.loreum}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eu sodales leo. Integer mollis facilisis nulla,
                    ut lacinia risus consectetur nec.
                  </Text>
                </View>

                <View style={styles.bugs}>
                  <Text style={styles.loreum}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eu sodales leo. Integer mollis facilisis nulla,
                    ut lacinia risus consectetur nec.
                  </Text>
                </View>

                <View style={styles.bugs}>
                  <Text style={styles.loreum}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eu sodales leo. Integer mollis facilisis nulla,
                    ut lacinia risus consectetur nec.
                  </Text>
                </View>

             </View>
           </View>
      </>
);
export default ReactNative;
const styles = StyleSheet.create({
  main: {
    height:"100%",
    display: "flex",
    backgroundColor: '#52bfa2',
    justifyContent: "flex-end",
    
  },
   mainCon: {
      height: '95%',
      backgroundColor: "#52bfa2",
      display: "flex",
      justifyContent: "flex-start",

   },

   bugs: {
      width: '100%',
      // height:"15%",
      backgroundColor: "#a0dac7",
      alignSelf: "center",
      marginTop: '1%',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: "white",
   },
   loreum: {
      padding:6,
      fontWeight: 500
   }
});

