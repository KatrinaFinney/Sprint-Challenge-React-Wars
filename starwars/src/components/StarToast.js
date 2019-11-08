import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const StarToast = (data) => {
  return (
    <div>
      
    
      <div className="p-3 my-2 rounded" style={{ background: 'pink' }}>
        <Toast  style={{ margin: "0 auto", textAlign: "center"}}>
          <ToastHeader style={{ background:'grey' , color: 'white' }}>
            Character:
          </ToastHeader>
          <ToastBody>Name: {data.name}</ToastBody>
          <ToastBody>Height: {data.height}</ToastBody>
          <ToastBody>Mass: {data.mass}</ToastBody>
          <ToastBody>Gender: {data.gender}</ToastBody>
        </Toast>
      </div>
      
    </div>
    
  );
};

export default StarToast;