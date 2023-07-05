import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';


const MainDiv = styled.div`
  flex-direction: column;
  align-items: center;
`;

function Home() {
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //https://scandiwebsimplestore.000webhostapp.com/
        //http://localhost:8000/scandiweb/scandiweb/backend/index.php
        const response = await axios.get('https://scandiwebsimplestore.000webhostapp.com/backend/Get.php'); // Replace with your API endpoint
        console.log('Response data:', response.data); // Log the response data to check its structure
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (sku) => {
    if (checkedItems.includes(sku)) {
      setCheckedItems(checkedItems.filter((item) => item !== sku));
    } else {
      setCheckedItems([...checkedItems, sku]);
    }
  };

  const handleSendToServer = async () => {
    // try {
    //   await axios.delete('https://scandiwebsimplestore.000webhostapp.com/backend/router.php', {
    //     data: {
    //       checkedItems: checkedItems,
    //     },
    //   });
    //   console.log(checkedItems);
    //   console.log('Data sent successfully!');
    //   // Perform any additional actions after sending data to the server
    // } catch (error) {
    //   console.error('Error sending data:', error);
    // }
    try {
      const response = await axios.post('https://scandiwebsimplestore.000webhostapp.com/backend/Delete.php', {data: {checkedItems: checkedItems,},});
      console.log('Data sent successfully!');
      console.log('Response:', response.data);
      // Perform any additional actions with the response data
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <MainDiv>
      <Header onSendToServer={handleSendToServer} />
      {data.map((item) => (
        <ProductCard
          sku={item.sku}
          name={item.name}
          price={item.price}
          value={item.info}
          checked={checkedItems.includes(item.sku)}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
      <Footer />
    </MainDiv>
  );
}

export default Home;
