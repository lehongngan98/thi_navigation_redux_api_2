//DetailScreen.js
import React, { useState ,useEffect} from 'react';
import { View, Text, Button, TextInput ,Alert, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { updateDataAction, deleteDataAction } from '../features/actions';

const DetailScreen = ({ route, navigation, updateData, deleteData }) => {
  const { item, onEdit, onDelete } = route.params;

  const [editedName, setEditedName] = useState(item.content);

  const handleUpdate = () => {
    const editedItem = { ...item, content: editedName };
    // updateData(editedItem);
    onEdit(editedItem);
    navigation.goBack();
  };

  const handleDelete = () => {
    // deleteData(item.id);
    onDelete(item.id);
    navigation.goBack();
  };
  return (
    <View>
      
      <TextInput
        placeholder="Edit item name"
        value={editedName}
        onChangeText={setEditedName}
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10,
                padding: 10 ,fontSize:16,color:'red',textAlign:'center',fontWeight:'bold'}}
      />
      <TouchableOpacity  onPress={handleUpdate} style={{alignItems:'center',marginTop:'20'}}>
        <View style={{width:100,height:30,backgroundColor:'#3eaaee',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:'white',textAlign:'center',fontWeight:'bold'}}>Update</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={handleDelete} style={{alignItems:'center',marginTop:10}}>
        <View style={{width:100,height:30,backgroundColor:'#3eaaee',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:'white',textAlign:'center',fontWeight:'bold'}}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapDispatchToProps = {
  updateData: updateDataAction,
  deleteData: deleteDataAction,
};
export default connect(null, mapDispatchToProps)(DetailScreen);
