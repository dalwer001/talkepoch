import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/counter/userSlice';
import TalkMessage from './TalkMessage';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <TalkMessage/>
      {
        user ? <TalkMessage/> : <h2>You need to login.</h2>
      }
    </div>
  );
}

export default App;
