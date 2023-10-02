import React, { useState } from 'react';
import Card from './Components/Card';
import AddUser from './Components/AddUser';
import Button from './Components/Button';
import UserList from './Components/UserList';
import ErrorModule from './Components/ErrorModule';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [userList, setUserList] = useState([]);
  const [checkError, setCheckError] = useState(null);

  function changeHandler(id, input){
    setCheckError(null);
    if(id === "text"){
      if(name === input){

      }else{
        setName(input);
      }
    }else if(id === "number"){
      setAge(input);
    }else{
      console.log(id,input);
      throw new Error("invalid ID recieved from AddUser.js");
    }
  }
  function submitHandler(){
    if(name !== "" && age !== 0){
      setUserList([...userList, {name: name, age: age}]);
    }

  }
  function errorHandler(id, value){
    setCheckError(value);
    if(id !== "text" && id !=="number"){
      console.log(id,value);
      throw new Error("invalid error ID recieved from AddUser.js");
    }
  }
  function removeError(){
    setCheckError(null);
  }

  return (
    <div>
      {checkError && <ErrorModule error={checkError} remove={removeError} check={false} />}
      <Card>
        <AddUser change={changeHandler} onError={errorHandler} />
        <Button submit={submitHandler} check={true} />
      </Card>
      {userList.length >0 && <UserList data={userList} />} 
    </div>
    
  );
}

export default App;
