// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //



const SamplePage = () => { 
  
  return (
    <MainCard title="About">
      <Typography variant="body2">
        About frankyeasy and React!
      </Typography>
    </MainCard>
  );
}

export default SamplePage;
