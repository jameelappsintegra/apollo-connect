import React, { useState, useEffect } from "react";
import './App.css';
import { useQuery } from "@apollo/react-hooks";
import Header from "./Header";
import Posts from "./Posts";
import { GET_ALL_POSTS } from "./graphql";

function App() {
  const { data: postList } = useQuery(GET_ALL_POSTS);
  const [postListItems, setPostListItems] = useState([]);
  useEffect(() => {
    if (postList) {
      setPostListItems(postList.posts);
    }
  }, [postList]);
  console.log(postListItems);

  return (
    <div>
      <Header  title="Posts"/>
      {postListItems && postListItems.map((item,i)=>(
        <Posts key={item.id} postTitle={item.title} postDesc={item.description} />
      ))
      }
    </div>
  )
}
export default App;
