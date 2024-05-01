import { makeStyles } from '@mui/styles';

 const useStyles = makeStyles((theme)=>({
    fadingText: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 5, // Limit to 5 lines
      '-webkit-box-orient': 'vertical',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '70%',
        height: '20px', // Adjust according to your design
        background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1) 90%)', // Add fading effect
      },
    },
  }));

  export default useStyles