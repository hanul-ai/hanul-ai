import {makeStyles} from '@material-ui/core';

const footerStyles = makeStyles((theme)=>({
  footer: {
    background:'#000000',
    color:'#FFFFFF',
    width:'100%',
    height:'559px',
    marginBottom:'10px'

  },

  divTop:{
    width:'100%',
    height:'80%',
    float:'top',
    borderBottom:'1px solid'

  },

  divBottom:{
    width:'100%',
    height:'20%',
    float:'bottom',
    //flex:1
  },

  divLift:{
    width:'31%',
    float:'left',
    height:'100%',
    borderRight:'1px solid'

    //flex:1
  },

  divRight:{
    width:'68%',
    float:'right',
    height:'100%',

    //flex:1

  },

  divR1:{
    float:'left',
    width:'33%',
    paddingTop:'70px',


  },

  divR2:{
    float:'left',
    width:'33%',
    paddingTop:'70px'

  },

  divR3:{
    float:'left',
    width:'33%',
    paddingTop:'70px'

  },


  divImg:{
    marginLeft:'100px',
    marginTop:'100px',
    // vertical_align:'right'
    // width:'100%',
    // height:'100%'

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

  select:{
    width:'15%',
    float:'right',
    color:'#000000',

  }



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