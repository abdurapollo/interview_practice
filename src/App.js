import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import CountEachSecond from './CountEachSecond'
import UseReducer3 from './codevolution/hooks/UseReducer3'
// import Counter from './components/Counter'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';

//export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
   {/*   <Greet name="Abd" heroName="Superman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Sonu" heroName="batman">
        <button>Click me!</button>
      </Greet>
      <Greet name="Zaid" heroName="Antman"/>
      <Welcome name="Abd" heroName="Superman"/>
      <Welcome name="Sonu" heroName="batman"/>
      <Welcome name="zaid" heroName="Antman"/>
  */}
      {/*<Hello />*/}
     {/* <CountEachSecond /> */}
     {/*<FunctionClick />*/}
     {/*<ClassClick />*/}
     {/* <CountEachSecond /> */}
     {/* <UserContext.Provider value={'Abdur'}>
        <ComponentC />
     </UserContext.Provider> */}
     <ClickCounter />
     <HoverCounter />
    </div>
  );
}

export default App;
