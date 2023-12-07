import React from 'react';
import { View, Button ,Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  

  return (
    <View>
      <Text style={{color:'red',fontSize:30,textAlign:'center',marginTop:200,marginBottom:50}}>Welcome to the Vietnam People's Army</Text>
      <TouchableOpacity  
        style={{width:200,height:50,backgroundColor:'green',marginLeft:100,marginRight:100,borderRadius:10}}
        onPress={() => navigation.navigate('List')}  
      >
        <Text style={{color:'white',fontSize:30,textAlign:'center',marginTop:5}}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
