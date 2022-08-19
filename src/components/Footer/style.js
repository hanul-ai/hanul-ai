import {makeStyles} from '@material-ui/core';

const footerStyles = makeStyles((theme)=>({
  footer: {
    background:'#000000',
    color:'#FFFFFF',
    width:'100%',
    height:'300px',

  },

  divTop:{
    borderBottom:'1px solid',
    display : 'flex',
  },

  divBottom:{
    ['@media screen and (max-width: 900px)']:{
      flexDirection: 'column',
    },
    display : 'flex',
  },

  divLeft:{
    ['@media screen and (max-width: 900px)']:{
      display : 'none'
    },
    width:'250px',
    borderRight:'1px solid'
  },

  divImg:{
    margin: 'auto',
    display: 'block',
    width: '200px',
  },

  divRight:{
    display : 'flex',
    height:'100%',
    flex:1,
  },

  divR:{
    flex : 1,
    paddingTop:'40px',
    marginLeft:'30px',
  },

  foundingYear:{
    ['@media screen and (max-width: 900px)']:{
      alignSelf: 'baseline',
    },
    marginLeft : '30px',
    fontSize: '12px',
    alignSelf: 'center',
  },

  ul:{
    listStyle:'none',
    padding:'0',
    lineHeight:'30px',
    
  },

  li:{
    float:'left',
    marginLeft:'30px',
    fontSize:'12px'
  },

}))

export default footerStyles


  
//   .contents {
//     width: 96%;
//     max-width: 1100px;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto;
//   }
  
//   .title {
//     font-weight: 600;
//     font-size: 20px;
//   }