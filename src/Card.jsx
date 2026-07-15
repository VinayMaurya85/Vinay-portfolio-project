import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Calculator from "./Calculator.png"
 import "./Card.css"
 import Stack from '@mui/material/Stack';
 
import { styled } from '@mui/material/styles';
export default function MediaCard(  props) {
  return (
    <Card  className={props.className } sx={{  }}   >
      <CardMedia className='cardmedia'
        sx={{ height: 240,  }}
        image= {props.image}
        title="green iguana"
        
        style={{height:"300px"  }}
        
      />
      <CardContent>
         <div className="cardc"  >
            <p>{props.HTML}</p>
            <p>{props.CSS}</p>
            <p>{props.JAVASCRIPT}</p>
           <div className='kk' style={{display:"flex"}}>  <p>{props.REACT}</p>
            <p>{props.BOOTSTRAP}</p></div>
            

        </div>
        <div className='kkk'><p> {props.REACT}</p>
        <p>{props.BOOTSTRAP}</p></div>
        <Typography gutterBottom variant="h5" component="div">
           <b> {props.title}</b>
        </Typography>
        

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.para}  
        </Typography>
      </CardContent>
      <CardActions  >
           <Stack spacing={2} direction="row">
      
     <a href={props.link}><Button  className='mar' variant="contained"  >Live Demo</Button></a>  
     <a href={props. link2}>  <Button className='mar' variant="outlined">GitHub</Button></a>
    </Stack>
         
      </CardActions>
    </Card>
  );
}