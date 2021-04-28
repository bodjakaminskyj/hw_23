import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import List from './contents/List';

function App() {
  useEffect(
    () => {

    },
    [],
  )
  return (
    <div className="App">
      <h1>Redux</h1>
      
      <List/>
      
    </div>
  );
}
const mapDispatchToProps = {
  
}

export default connect(null, mapDispatchToProps)(App);
