import React, {createContext, useState, useEffect} from 'react';
import {app_id, perfilGet, postsListUserGet} from '../constants';

export const ProfileContext = createContext();

const ProfileContextProvider = ({children}) => {
  const [userId, setUserId] = useState('60d0fe4f5311236168a109ca');
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPerfil(userId);
  }, [userId]);

  useEffect(() => {
    getPostList(userId, 14, page);
  }, [page]);

  const getPerfil = q_user => {
    fetch(perfilGet(q_user), {
      headers: {
        'app-id': app_id,
      },
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => console.log(error));
  };

  const getPostList = (q_user, q_limit, q_page) => {
    fetch(postsListUserGet(q_user, q_limit, q_page), {
      headers: {
        'app-id': app_id,
      },
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => console.log(error));
  };

  const fetchMoreData = () => {
    if (posts.total > 12) {
      setPage(page + 1);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        posts,
        fetchMoreData,
        setUserId,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
