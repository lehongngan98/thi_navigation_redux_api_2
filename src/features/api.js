const API_URL = 'https://65718bbbd61ba6fcc012e3b3.mockapi.io/user/1';
const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
export const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log('data:', data);
  return data;
};
export const addData = async (newItem) => {
  try {
    const existingDataResponse = await fetch(API_URL);
    const existingData = await existingDataResponse.json();
    const updatedData = {
      ...existingData,
      massage: [
        ...(existingData.massage || []),
        {
          id: generateUniqueId(),
          content: newItem.content,
        },
      ],
    };
    const response = await fetch(API_URL, {
      method: 'PUT', // Use PUT to update the existing data
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};

export const updateData = async (item) => {
  try {
    const existingDataResponse = await fetch(API_URL);
    const existingData = await existingDataResponse.json();
    const updatedMessages = existingData.massage.map((message) =>
      message.id === item.id ? { ...message, content: item.content } : message
    );
    const updatedData = {
      ...existingData,
      massage: updatedMessages,
    };
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const existingDataResponse = await fetch(API_URL);
    const existingData = await existingDataResponse.json();
    const updatedMessages = existingData.massage.filter((message) => message.id !== id);
    const updatedData = {
      ...existingData,
      massage: updatedMessages,
    };
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
