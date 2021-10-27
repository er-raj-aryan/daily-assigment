import React , {useState} from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import { Grid, Typography } from '@mui/material';
import {makeStyles} from "@mui/styles"

const useStyle = makeStyles(() =>({
  container:{
    display:"flex",
    padding:"10px",
  },
  imageContainer:{
    display:"flex",
    height:"450px",
    width:"800px",
    overflow:"hidden",
    margin:"10px",
  },
  controller:{
    padding:"10px",
    border:"1px solid #959191cc",
    boxShadow:"0px 10px 25px rgba(0,0,0,0.1)",
    width:"250px",
    margin:"10px !important"
  },
  image:{
    height:"450px",
     width:"800px",
     position:"absolute",
  },
  overlay:{
    position:"relative",
    height:"800px", 
    width:"800px",
  },
}))

function App() {
  const [change ,setChange] = useState("0")
  const classes = useStyle()
  const handleOnChange = (e) => {
    setChange(e.target.value)
  }

  // logic of gradient
  // background-image: linear-gradient(42deg, rgba(230, 231, 226, 0.792) 29%, rgba(18, 245, 52, 0.7) 77%);
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.imageContainer}>
      <img src="https://source.unsplash.com/1600x900/?nature,water" alt="" className={classes.image}  />
      <div className={classes.overlay} style={{ background: `linear-gradient(271deg, rgba(230, 231, 226, 0.792) ${change}%, rgb(0 0 0 / 72%) 77%)`}}></div>
      </Grid>
      <Grid item className={classes.controller}>
        <Typography variant="h6" color="initial">Assigment DailyCutting</Typography>
        <hr/>
        <Typography variant="subtitle1" color="initial">Transparency {change}%</Typography>
      <Slider  defaultValue={0} valueLabelDisplay="auto" onChange={handleOnChange} />
      </Grid>
    </Grid>
  );
}

export default App;
