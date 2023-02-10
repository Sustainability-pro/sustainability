import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/global/navbar';
import Sidebar from './components/global/sidebar';
import DashBoard from './pages/dashBoard';
import DataEntry from './pages/dataEntry';
import NavTabs from './components/tabs';
import CustomizedTables from './components/table';



function App() {
  return (
    <Box >
      <Box> <Sidebar/></Box> 
      <Box> <Navbar/></Box>

       <DashBoard/>
      <Box sx={{marginLeft:26}}>
      <div className='container'>
      <Routes>
              <Route path="/dashBoard" element={<DashBoard />} />
              <Route path="/dataEntry" element={<DataEntry />} />
              <Route path="/tabs" element={< NavTabs/>} />
              <Route path="/table" element={<CustomizedTables />} />
      
      </Routes></div>
      </Box> 

    </Box>
  );
}

export default App;
