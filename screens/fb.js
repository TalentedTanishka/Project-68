import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FACEBOOK extends React.Component{
  render()
  {
    return (
                 <View>
     
             <Text style={{backgroundColor:"yellow",textAlign:"center",fontSize:100,borderWidth:10, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,}}>BUZZ APP</Text>
     <Text style={{textAlign:"center",fontSize:95,marginTop:150}}>FaceBook</Text>
         </View>
        
         
        
       

      );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
