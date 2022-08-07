import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    toolData : {
        width: '310px',
        height: '120px',
        padding: '0 10px',
        cursor: 'pointer',
    },
    mb4 : {
        marginBottom: '1.5rem !important',
    },
    bgLight : {
        transition: 'all .15s easeInOut',
    },
    dFlex : {
        display: 'flex !important',
    },
    justifyContentCenter : {
        display: 'flex !important',
    },
    alignItemsCenter : {
        alignItems: 'center !important',
    },
    py4 : {
        paddingTop: '1.5rm !important',
    },
    textDecorationNone : {
        textDecoration: 'none !important',
    },
    spriteConvertTools37 : {
        backgroundImage: 'url(https://www.media.io/imagesV4/sprites/convert_tools_3_7.png)',
        backgroundSize: '2880px 73px',
    },
    spriteConvertTool2 : {
        width: '72px',
        height: '72px',
        backgroundPosition: '-792px 0',
    },
    mr2 : {
        marginRight: '0.5rem !important',
    },
    formDivArea : {
        marginTop : '32px',
        position : 'relative',
        margin: '0 auto',
        maxWidth: '335px',
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
    introImage : {
        ['@media screen and (min-width: 800px)']:{
            display : 'block',
        },
        display: 'none',
        width: '28vw',
        maxWidth: '538px',
        flex: '0 0 515px',
        marginLeft: '5vw',
        marginRight : '5px',
    }
});

export default useStyles;