import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Withdraw from './pages/Withdraw/Withdraw';
import MyPage from './pages/MyPage/MyPage';
import MyPageModify from './pages/MyPageModify/MyPageModify';
import PostCategory from './pages/PostCategory/PostCategory';
import PostList from './pages/PostList/PostList';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/my-page-modify" element={<MyPageModify />} />
        <Route path="post-category" element={<PostCategory />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
