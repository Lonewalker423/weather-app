import React from 'react';

const form =  props =>
(     
      <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="city..."  />
            <input type="text" name="country" placeholder="Country..."  />
            <button>Get Weather</button>
      </form>
);


export default form;