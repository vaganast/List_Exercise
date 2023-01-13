import { Box, Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Typography, CardContent, CardActions, Card } from '@mui/material';

export const Posts = ({ list, handleDelete }) => {

  return (       
      <Container maxWidth="sm">       
          <Box sx={{   
            p: 2,
            minWidth: 300,
            }}>                    
              {list?.map((list) => 
                  <Card key={list.id} sx={{
                      bgcolor: "primary.dark",
                      boxShadow: 4,
                      borderRadius: 4,
                      p: 1,
                      m: 1,
                      minWidth: 300,
                      color: 'white'                            
                    }}>
                      <CardContent>
                          <Typography variant="h5">Title: {list.title}</Typography>
                          <Typography varian="body1">Post: {list.body}</Typography>  
                          <Typography variant="h6" sx={{fontWeight: "bold", }}>{list?.userName.name}</Typography>
                              <CardActions sx={{paddingLeft: 0}}>
                                  <Button size="medium" 
                                  variant="contained" 
                                  className="hidden-button" 
                                  color='error'
                                  onClick={()=>handleDelete(list.id)}
                                    >Delete
                                    <DeleteIcon />
                                  </Button>
                              </CardActions>  
                      </CardContent>                        
                  </Card>
              )}
          </Box>
      </Container> 
    )
  }