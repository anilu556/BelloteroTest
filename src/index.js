import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class Bellotero extends React.Component{
  render() {
    return(
      <div class='Bitmap'></div>
    );
  }
}
ReactDOM.render(
  <Bellotero />,
  document.getElementById('root')
);