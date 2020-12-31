import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Witgets from './Witgets.js';
import Login from './Login.js';
import { useStateValue } from './StateProvider'

function App() {
const [ {user}, dispatch] = useStateValue();


  return (
    <div className="app">    
    {!user ? (
      <Login />
    ):(

      <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed/>
          <Witgets />
        </div> 
      </>

      )}        
    </div>
  );
}

export default App;
