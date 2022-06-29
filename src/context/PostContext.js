import React, {createContext, useState, useEffect} from 'react';
import {app_id, postsListGet} from '../constants';

export const PostContext = createContext();

const PostContextProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPostList(18, page);
  }, [page]);

  const getPostList = (q_limit, q_page) => {
    fetch(postsListGet(q_limit, q_page), {headers:{
      'app-id': app_id
    }})
      .then(response => response.json())
      .then(data => {
        setPosts(prevState => [
          ...prevState,
          ...data.data,
        ]);
      })
      .catch(error => console.log(error));
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    
  };
  return (
    <PostContext.Provider
      value={{
        posts,
        fetchMoreData
      }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
