import React, { Component } from 'react';
import Cls from './components/Cls';
import Funt from './components/Funt';
import Student from './state/State_ex';
import Employee from './state/With_Contru';
import Doctor from './eventHandling/EventClass';

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello App.js here *** React!!</h1>
        <Cls>{"rollll:::" }</Cls>
        <Cls age={56}></Cls>
        <Funt>{'roll no -' + 101}</Funt>
        <h3>*************---State---*****************</h3>
        <Student gender="Male"></Student>
        <Employee></Employee>
        <h3>*************---Event Handling---*****************</h3>
        <Doctor></Doctor>
      </>
    );
  }
}
export default App;
