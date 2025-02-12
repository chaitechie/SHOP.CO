import {useState,SyntheticEvent} from 'react';
import {Box,Tabs,Tab} from '@mui/material'
function Auth() {
 const [value,setValue] = useState<number>(0)

 const handleChange = (_event:SyntheticEvent, newValue:number) => {
  setValue(newValue)
 }
  return (
  <Box sx={{width:'100%',bgcolor:'beige'}} >
    <Tabs value={value} onChange={handleChange} centered >
      <Tab label="Item One"></Tab>
      <Tab label="Item Two"></Tab>
    </Tabs>
  </Box>
  )
}

export default Auth