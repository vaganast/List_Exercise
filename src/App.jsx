import React, { useState, useEffect } from 'react';
import { Posts } from './components/Posts';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dropdown from './components/Dropdown';
import axios from 'axios'; 

export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
      root: {
        "& .hidden-button": {
          display: "none"
        },
        "&:hover .hidden-button": {
          display: "flex"
        }
      }
    }
  }
  }
})

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/' 
})

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  const getPosts = async () => {
    try {
      const response = await client.get('/posts')    
      setPosts(response.data)
      } catch (error) {
      console.log(error)
    }   
  }

  const getUsers = async () => {
    try {
      const response = await client.get('/users')
      setUsers(response.data)    
    } catch (error) {
      console.log(error);
    }     
  }

  const handleResults = () => {    
    setList(posts?.map((post) => {  
     return {
        ...post,
        userName: users?.find((user) => user.id === post.userId)
        }        
    })
    )
    console.log(list)}
    
    const handleDelete = async (id) => {      
       await client.delete(`/posts/${id}`)
        setPosts(
           posts.filter((post) => { // setList(list?.filter((list) => list.id !== id)) 
              return post.id !== id;
           })
        )
     }          

     const getPostById = async (id) => {
      const response = await client.get(`/posts?userId=${id}`)    
      setPosts(response.data)
     }

    useEffect(() => {
      getPosts()
      getUsers()
    }, [])

    useEffect(() => {
      handleResults()
      }, [posts, users])

    return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Dropdown users={users} handleFindUserPost={getPostById}/>
      <Posts list={list} handleDelete={handleDelete}/>
    </ThemeProvider>
    </>
  )
}
export default App