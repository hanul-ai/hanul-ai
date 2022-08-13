import {makeStyles} from '@material-ui/core';
import { hover } from '@testing-library/user-event/dist/hover';

const headerStyles = makeStyles((theme)=>({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width:'100%',
    height:'72px',
    backgroundColor: '#FFFFFF',
    display:'flex',
    borderBottom:'1px solid',
    zIndex:'1'

    
  },

  contents:{
    display:'flex',
    width:'96%',
    maxWidth:'1100px',
    height:'100%',
    margin:'0 auto',
    alignItems:'center',
    justifyContent:'space-between',
  },

  navigation:{
    display:'flex',
    paddingRight:'100px'
  },

  ul:{
    listStyle:'none',
  },

  li:{
    float:'left',
    marginLeft:'30px',
  },



}))

export default headerStyles



// .header {
//   position: relative;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 80px;
//   background-color: white;
//   border-style:solid;
// }

// .contents {
//   display: flex;
//   width: 96%;
//   max-width: 1100px;
//   height: 100%;
//   margin: 0 auto;
//   align-items: center;
//   justify-content: space-between;
// }

// /* .navigation {
//   ul {
//     display: flex;
//     list-style: none;
//     padding-right: 100px;
//     padding-left: 100px;


//     li + li {
//       margin-left: 50px;
      
//     }
//   }
// } */

// .background{
//   background-color: violet;
// }


