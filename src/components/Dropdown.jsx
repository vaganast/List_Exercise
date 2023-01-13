import React, { useState } from 'react';
import { Box, Container } from '@mui/system';
import {InputLabel, FormControl, Select, MenuItem, OutlinedInput } from '@mui/material';

export default function Dropdown({ users, handleFindUserPost }) {

  const [personName, setPersonName] = useState([]);

  const handleChange = (e) => {       
      setPersonName(
        e.target.value
      )
    }

  return (   
    <Container maxWidth="sm">  
    <Box sx={{   
        p: 1,
        minWidth: 120,
        ml:2
        }}>
      <FormControl  fullWidth sx={{paddingRight: 2}}>
        <InputLabel  id="demo-multiple-name-label" >
          Author
        </InputLabel>  
        <Select 
         labelId="demo-multiple-name-label"
         id="demo-multiple-name"
         onChange={handleChange}
         value={personName}
         input={<OutlinedInput label="Author" />}
        >    
            {users.map((user) => (
                <MenuItem
                onClick={() => handleFindUserPost(user.id)}
                key={user.id}                 
                value={user.name}
                >
                    {user?.name}
                </MenuItem>              
            ))}            
        </Select> 
      </FormControl>
    </Box>
    </Container>
  );
}