import Profile from './sidebar/profile';
import Search from './sidebar/search';
import ChatList from './sidebar/chatlist';

const SideBar = ({handleLogout}) => {
    return (
        <>
            <Profile handleLogout={handleLogout} />
            <Search />
            <ChatList />
        </>
    )
}

export default SideBar;