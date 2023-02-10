import * as React from 'react';
import {AppBar, Box} from '@mui/material';
import {Tabs} from '@mui/material';
import {Tab} from '@mui/material';
import { Link } from 'react-router-dom';

// function LinkTab(props) {
//   return (
//     <Tab 
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box ml='15%' mr='15%' mt='-4%' color= 'white' sx={{bgcolor: "#063970" ,p: 1 }}>
  
      <Tabs 
        centered
        value={value}
        wrapped
        onChange={handleChange} 
        aria-label="nav tabs example" 
        textColor="white"
        indicatorColor="secondary">
        <Tab label="PETROL" component={Link} to="/table" />
        <Tab label="HSD" component={Link} to="/table" />
        <Tab label="LPG" component={Link} to="/spam" />
        <Tab label="ACETYLENE" component={Link} to="/drafts" />
        <Tab label="CNG" component={Link} to="/trash" />
        <Tab label="PNG" component={Link} to="/spam" />
        <Tab label="BMCG" component={Link} to="/spam" />
       
      </Tabs>
      
      {/* <TabPanel>Item 1</TabPanel> */}
    </Box>
  );
}