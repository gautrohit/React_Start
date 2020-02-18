import React, { Component } from 'react';
import Cls from './components/Cls';
import Funt from './components/Funt';
import Student from './state/State_ex';
import Employee from './state/With_Contru';
import Doctor from './eventHandling/EventClass';
import Doctor2 from './eventHandling/EventFunction';
import StudentSet from './state/SetState';

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello App.js here *** React!!</h1>
        <Cls>{'rollll:::'}</Cls>
        <Cls age={56}></Cls>
        <Funt>{'roll no -' + 101}</Funt>
        <h3>*************---State---*****************</h3>
        <Student gender="Male"></Student>
        <Employee></Employee>
        <h3>*************---setState---*****************</h3>
        <StudentSet></StudentSet>
        <h3>*************---Event Handling Class---*****************</h3>
        <Doctor></Doctor>
        <h3>*************---Event Handling Function---*****************</h3>
        <Doctor2 name="Event function"></Doctor2>
      </>
    );
  }
}
export default App;
