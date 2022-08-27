import {makeStyles} from '@material-ui/core';

const footerStyles = makeStyles((theme)=>({
  footer: {
    background:'#000000',
    color:'#FFFFFF',
    width:'100%',
  },

  divTop:{
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
    width:'130px',
    borderRight:'1px solid'
  },

  divImg:{
    margin: 'auto',
    display: 'block',
    width: '70px',
  },

  foundingYear:{
    ['@media screen and (max-width: 900px)']:{
      alignSelf: 'baseline',
      paddingBottom: '20px',
    },
    marginLeft : '30px',
    fontSize: '12px',
    alignSelf: 'center',
  },

  ul:{
    ['@media screen and (max-width: 900px)']:{
      margin: 'revert'
    },

    listStyle:'none',
    padding:'0',
    margin:'0',
    alignSelf: 'center',
  },

  li:{
    float:'left',
    marginLeft:'30px',
    fontSize:'12px'
  },

}))

export default footerStyles