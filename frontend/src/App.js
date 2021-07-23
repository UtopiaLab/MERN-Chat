import './styles/App.scss';
import Login from './components/login';
import ChatBody from './components/chatbody';
import SideBar from './components/sidebar';
import {BASE_URL, LOGIN} from './utils/apiEndpoints';
import {postRequest} from './utils/apiRequests';
import { useState } from 'react';
import {useCookies} from 'react-cookie';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(["MERNChat"]);
  const [error, setError] = useState(null);
  const [userObj, setUserObj] = useState(() => {
    return cookies.user;
  });

  const handleLogin = async (userData) => {
    const formData = new FormData();
    if(userData.file) {
      formData.append("profileImg", userData.file, userData.file.name);
    }
    formData.append("payload", JSON.stringify({name: userData.name}));

    const response = await postRequest(`${BASE_URL}${LOGIN}`, formData);
    console.log(response);

    if(response.error) {
      setError(response.error);
      return false;
    }

    setCookie("user", response);
    setUserObj(response);
  }

  const handleLogout = () => {
    removeCookie("user");
    setUserObj(null);
  }

  return (
    <>
    {!(userObj && userObj.sessionId) ? (
      <Login handleLogin={handleLogin} />
      ) : (
      <div className="App">
        <div className="sidebar">
          <SideBar handleLogout={handleLogout} />
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
