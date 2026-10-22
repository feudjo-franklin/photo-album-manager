// material-ui

// project import
import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent } from '@mui/material';
import { useEffect } from 'react';
import { fetchGetDataWithAuth } from 'client/client';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const brightPopColors = [
  '#FF3E4D', '#FF5635', '#FFAB00', '#36B37E', '#00B8D9', '#0052CC', '#253858', '#0067B1',
  '#004B8D', '#9C27B0', '#E91E63', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',

];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * brightPopColors.length);
  return brightPopColors[randomIndex];
};

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: getRandomColor(),
    textAlign: 'center',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    height: '250px', // Increase the height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const AlbumDynamicGridPage = () => {
  const [dataArray, setDataArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (!isLoggedIn) {
      navigate('/login');
      window.location.reload();
    }
    fetchGetDataWithAuth('/albums')
    .then(res => {
      setDataArray(res.data);
      console.log("dataArray",dataArray);
    })
  }, []);

  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {dataArray.map((data, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/album/show?id=${data.id}`}>
            <Card className={classes.card} style={{ backgroundColor: getRandomColor() }}>
              <CardContent>
                <h1 style={{ fontSize: '2rem', margin: 0, color: 'white' }}>{data.name}</h1>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default AlbumDynamicGridPage;
