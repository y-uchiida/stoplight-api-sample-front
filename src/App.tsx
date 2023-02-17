import './App.css';
import { useEffect, useState } from 'react';
import * as $axios from "@/lib/axiosUtils";

const fetchPosts = () => $axios.request({
  url: "/api/posts",
  method: "get",
});

const fetchUsers = () => $axios.request({
  url: "/api/users",
  method: "get"
});

type Post = {
  id: string;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: string | undefined;
  emailVerified: boolean;
  createDate?: string | undefined;
};

function App() {
  const [PostList, setPostList] = useState<Post[]>([]);
  const [UserList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    fetchPosts().then(res => setPostList(res.data));
    fetchUsers().then(res => setUserList(res.data));
  }, []);

  return (
    <div>
      <h1>Open API 仕様書を利用して型定義を生成するサンプル</h1>
      <h2>投稿データリスト (GET /api/posts)</h2>
      <ul>
        {PostList.map(post => {
          return (
            <li key={post.id}>投稿タイトル: {post.title} (投稿ID: {post.id})</li>
          );
        })}
      </ul>

      <h2>ユーザーリスト (GET /api/users)</h2>
      <ul>
        {UserList.map(user => {
          return (
            <li key={user.id}>{user.firstName} {user.lastName} (email: {user.email})</li>
          );
        })}
      </ul>
    </div>
  )
}

export default App
