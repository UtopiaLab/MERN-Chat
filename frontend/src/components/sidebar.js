import Profile from './sidebar/profile';
import Search from './sidebar/search';
import ChatList from './sidebar/chatlist';

const SideBar = ({handleLogout, friendList}) => {
    return (
        <>
            <Profile handleLogout={handleLogout} />
            <Search />
            <ChatList friendList={friendList} />
        </>
    )
}

export default SideBar;