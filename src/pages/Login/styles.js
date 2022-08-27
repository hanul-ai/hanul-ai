import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    pageWrap : {
        background: 'linear-gradient(89.03deg,#0d0521,#31137c 51.85%,#761796 99.06%)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    form : {
        ['@media screen and (min-width: 900px)']:{
            maxWidth: '400px',
            flex: '0 0 400px',
            borderRadius: '8px',
            marginRight: '5vw',
        },
        ['@media screen and (max-width: 900px)']:{
            height : '100%'
        },
        backgroundColor: '#fff',
        padding: '40px 32px 16px',
        minHeight: '512px',
        width: '100%',
        boxSizing: 'border-box',
    },
    formName : {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '24px',
    },
    formLogo : {
        width : '85px',
        height : '30px',
    },
    formInputBox : {
        marginTop : '32px',
    },
    formInputIsError : {
        marginBottom : '20px',
    },
    formInput : {
        paddingLeft : '15px',
        paddingRight : '30px',

        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid #dcdfe6',
        boxSizing: 'border-box',
        color: '#606266',
        display: 'inline-block',
        fontSize: '14px',
        height: '40px',
        lineHeight: '40px',
        outline: 0,
        padding: '0 15px',
        transition: 'border-color .2s cubic-bezier(.645,.045,.355,1)',
        width: '100%',

        "&::placeholder" : {
            color : 'rgba(0,0,0,.4)',
        },
    },
    formInputStar : {
        color: '#f56c6c',
        verticalAlign: 'middle',
        paddingLeft: '5px',
        textAlign: 'center',
        lineHeight: '45px',
        position: 'absolute',
        left: '35px',
    },
    formPrimaryButton : {
        "&:hover" : {
            backgroundColor: '#006bde',
            borderColor: '#006bde',
        },
        width : '100%',
        background: '#66b1ff',
        fontSize: '14px',
        borderRadius: '100px',
        color: '#fff',
        borderColor: '#409eff',
        backgroundColor: '#007bff',
        display: 'inline-block',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        border: '1px solid #dcdfe6',
        textAlign: 'center',
        boxSizing: 'border-box',
        outline: 0,
        margin: '0 0 12px 0',
        transition: '.1s',
        padding: '12px 20px',
    },
    formLinkArea : {
        textAlign: 'center',
    },
    formToLoginLink : {
        "&:hover" : {
            color: '#66b1ff',
        },
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '#007bff',
        fontSize : '14px',
        cursor: 'pointer',
        wordBreak : 'keep-all',
        textDecorationLine : 'none',
    },
    formToLoginLinkMargin : {
        display : 'block',
        marginTop : '12px',
    },
    formSignUpLinkArea : {
        marginBottom : 0,
        fontSize: '14px',
        color: 'rgba(0,0,0,.72)',
    },
    formToPolicyArea : {
        fontSize: '12px',
        lineHeight: '16px',
        color: 'rgba(0,0,0,.4)',
        textAlign: 'center',
        marginTop: '32px',
        wordBreak : 'keep-all',
    },
    formToPolicyLink : {
        padding: 0,
        fontSize: '12px',
        color: '#007bff',
        cursor: 'pointer',
    },
    introImage : {
        ['@media screen and (max-width: 1200px)']:{
            maxWidth: '450px',
        },
        ['@media screen and (max-width: 900px)']:{
            display: 'none',
        },
        display : 'block',
        width: '28vw',
        maxWidth: '538px',
        flex: '0 0 515px',
        marginLeft: '5vw',
        marginRight : '5px',
    }
});

export default useStyles;