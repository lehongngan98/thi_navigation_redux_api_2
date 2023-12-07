import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAction, addDataAction, updateDataAction, deleteDataAction } from '../features/actions';

const ListScreen = ({ navigation, data, fetchData, addData, updateData, deleteData }) => {
  const [newItemText, setNewItemText] = useState('');
  // const [newItemImage, setNewItemImage] = useState('');
  // const [newItemPrice, setNewItemPrice] = useState('');
  // const [newItemType, setNewItemType] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  console.log('data massage:', data.massage);
  const goToDetailScreen = (item) => {
    navigation.navigate('Detail', {
      item,
      onEdit: (editedItem) => {
        updateData(editedItem);
        fetchData(); // Lấy dữ liệu cập nhật sau khi chỉnh sửa
      },
      onDelete: (id) => {
        deleteData(id);
        fetchData(); // Lấy dữ liệu cập nhật sau khi xoá
      },
    });
  };
  const handleAddItem = async () => {
    if (newItemText) {
      const newItem = {
        content: newItemText,
        // image: newItemImage,
        // price: newItemPrice,
        // type: newItemType,
      };
      await addData(newItem);
      setNewItemText('');
      // setNewItemImage('');
      // setNewItemPrice('');
      // setNewItemType('');
      fetchData(); // Lấy dữ liệu cập nhật sau khi thêm
    }
  };
  return (
    <View>
      <TextInput
        placeholder="New item name"
        value={newItemText}
        onChangeText={setNewItemText}
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 ,fontSize:16}}
      />
      {/* <TextInput
        placeholder="New link image"
        value={newItemImage}
        onChangeText={setNewItemImage}
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 ,fontSize:16}}
      />
      <TextInput
        placeholder="New item price"
        value={newItemPrice}
        onChangeText={setNewItemPrice}
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 ,fontSize:16}}
      />
      <TextInput
        placeholder="New item type"
        value={newItemType}
        onChangeText={setNewItemType}
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 ,fontSize:16}}
      /> */}
      <Button title="Add" onPress={handleAddItem} />

      <FlatList
        data={data.massage}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => goToDetailScreen(item)}
            style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 ,borderRadius:10}}  
          >
            <View style={{flexDirection:'row'}}>
              
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>{item.content}</Text>
               
              </View>
            </View>
            
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
});
const mapDispatchToProps = {
  fetchData: fetchDataAction,
  addData: addDataAction,
  updateData: updateDataAction,
  deleteData: deleteDataAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
