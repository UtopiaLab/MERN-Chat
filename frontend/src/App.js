import './styles/App.scss';
import ChatBody from './components/chatbody';
import SideBar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="body">
        <ChatBody />
      </div>
    </div>
  );
}

export default App;
