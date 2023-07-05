import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import AddHeader from './AddHeader';

const AddProductContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  label {
    margin-bottom: 5px;
  }

  input,
  select {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type='submit'] {
    margin-right: 10px;
  }
`;

const MessageText = styled.p`
  color: #ff0000;
  font-style: italic;
`;


function AddProductPage() {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      sku,
      name,
      price,
      selectedValue,
      inputValue
    };
    console.log(formData);

    // Make a POST request to the PHP file
    //'http://localhost:8000/scandiweb/scandiweb/backend/index.php'
    fetch('https://scandiwebsimplestore.000webhostapp.com/backend/Add.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the PHP file
        setSku('');
        setName('');
        setPrice('');
        setInputValue('');
        setInputValue1('');
        setInputValue2('');
        setInputValue3('');


      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('Response:', error.response); // Log the response object

      });
      navigate('/');
  };

  

  const handleComboBoxChange = (event) => {
    setSelectedValue(event.target.value);
    setInputValue(''); // Reset the input value when the combobox value changes
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);


  };
  const handleInputChangeBeta = (event) => {
    const { id, value } = event.target;

  if (id === 'height') {
    setInputValue1(value);
  } else if (id === 'width') {
    setInputValue2(value);
  } else if (id === 'length') {
    setInputValue3(value);
  }
  setInputValue(inputValue1+" X "+inputValue2+" X "+inputValue3)


  };

  const renderInputBasedOnValue = () => {
    if (selectedValue === 'DVD') {
      return (
        <div>
          <label htmlFor="size">Size MB:</label>
          <input type="number" id="size" value={inputValue} onChange={handleInputChange} required/>
          <p>Please enter the size in Mega Bytes</p>
        </div>
      );
    } else if (selectedValue === 'Furniture') {
      return (
        <div>
          <label htmlFor="height">Height:</label>
          <input type="number" id="height" value={inputValue1} onChange={handleInputChangeBeta} required/>
          <label htmlFor="width">Width:</label>
          <input type="number" id="width" value={inputValue2} onChange={handleInputChangeBeta} required/>
          <label htmlFor="length">Length:</label>
          <input type="number" id="length" value={inputValue3} onChange={handleInputChangeBeta} required/>
          <p>Please enter dimensions in HxWxL format</p>
        </div>
      );
    } else if (selectedValue === 'Book') {
      return (
        <div>
          <label htmlFor="weight">Weight:</label>
          <input type="number" id="weight" value={inputValue} onChange={handleInputChange} required />
          <p>Please enter the weight in Kilograms</p>
        </div>
      );
    }
  };

  return (
    <AddProductContainer>
    <AddHeader />
      <Form id='product_form' onSubmit={handleSubmit}>
        <label htmlFor="sku">SKU:</label>
        <input type="text" id="sku" value={sku} onChange={(e) => setSku(e.target.value)} required />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="price">Price ($):</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <select name="type" id="productType"  value={selectedValue} onChange={handleComboBoxChange}>
          <option value="" id="hold" disabled >
            Select your option
          </option>
          <option value="DVD" id="productType">
            DVD
          </option>
          <option value="Furniture" id="productType">
            Furniture
          </option>
          <option value="Book" id="productType">
            Book
          </option>
        </select>
        {renderInputBasedOnValue()}

      </Form>
      <Footer/>
    </AddProductContainer>
  );
}

export default AddProductPage;
