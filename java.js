import React from "react";
import { Text, View, StyleSheet,  } from "react-native";


const Java = ()=>(
    <>
    <View style={styles.Container}>
       <View style={styles.innerCon}>
          <View style={styles.List}>
            <Text style={styles.loreums}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent eu sodales leo. Integer mollis facilisis nulla,
              ut lacinia risus consectetur nec.
            </Text>
          </View>

          <View style={styles.List}>
            <Text style={styles.loreums}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent eu sodales leo. Integer mollis facilisis nulla,
              ut lacinia risus consectetur nec.
            </Text>
          </View>

          <View style={styles.List}>
            <Text style={styles.loreums}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent eu sodales leo. Integer mollis facilisis nulla,
              ut lacinia risus consectetur nec.
            </Text>
          </View>

       </View>
     </View>
</>
);

export default Java;
const styles = StyleSheet.create({
    Container: {
    height:"100%",
    display: "flex",
    backgroundColor: '#52bfa2',
    justifyContent: "flex-end",
    
  },
      innerCon: {
      height: '95%',
      backgroundColor: "#52bfa2",
      display: "flex",
      justifyContent: "flex-start",

   },

      List: {
      width: '100%',
      // height:"15%",
      backgroundColor: "#a0dac7",
      alignSelf: "center",
      marginTop: '1%',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: "white",
   },
   loreums: {
      padding:6,
      fontWeight: 500
   }
});
