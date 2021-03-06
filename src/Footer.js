import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

 render() {
   return (
    <div className="footContain">
      <div className="itemCount footItem">  <span className="number">X</span> items left</div>
      <div className="allItems footItem">All</div>
      <div className="activeItems footItem">Active</div>
      <div className="completedItems footItem">Completed</div>
    </div>
   );
 }
}
