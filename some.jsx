import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
