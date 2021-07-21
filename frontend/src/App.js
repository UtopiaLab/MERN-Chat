import './styles/App.scss';
import Login from './components/login';
import ChatBody from './components/chatbody';
import SideBar from './components/sidebar';

function App() {
  return (
    <>
    {true ? (
      <Login />
      ) : (
      <div className="App">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <ChatBody />
        </div>
      </div>
      )}
    </>
  );
}

export default App;
