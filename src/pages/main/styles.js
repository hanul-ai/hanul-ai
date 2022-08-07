import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textCenter: {
        textAlign: 'center',
        width: '100%'
    },
    uploadContainer: {
        width: '100%',
        maxWidth: '1200px',
        padding: '3rem 2rem',
        margin: '0 auto'
    },
    titleFont: {
        fontWeight: 'bolder',
        fontSize: '2.25rem',
        lineHeight: '1.2',
        marginBottom: '1.5rem',
        fontWeight: 'bolder'
    },
    explanFont: {
        fontSize: '1.125rem',
        fontWeight: '300',
        marginBottom: '1.5rem'
    },
    uploadBlock: {
        boxShadow: '0 2px 40px 0 rgb(0 0 0 / 14%)',
        borderRadius: '5px',
        backgroundColor: 'white',
        position: 'relative'
    },
    uploadConfigTop: {
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        borderBottom: '1px solid #dee2e6',
        paddingLeft: '1rem',
        paddingRight: '1rem'
    },
    w100: {
        width: '100%',
        minHeight: '38px'
    },
    titleConvert: {
        marginRight: '12px'
    },
    dInlineBlock: {
        display: 'inline-block',
        position: 'relative'
    },
    toggleButton: { // 수정
        width: '64px',
        borderWidth: '1px',
        border: '0.125rem solid transparent',
        color: '#313131',
        borderColor: '#313131',
        margin: '0.25rem 0.16rem',
        textTransform: 'uppercase',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        padding: '0.3125rem 0.9375rem',
        fontSize: '.75rem',
        fontWeight: '700',
        // textAlign: 'center',
        // verticalAlign: 'middle',
        lineHeight: '1.5',
        borderRadius: '2px',
        borderWidth: '1px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        backgroundColor: 'transparent'
    },
    dropdownMenu: {
        position: 'absolute',
        willChange: 'transform',
        top: '0px',
        left: '0px',
        transform: 'translated3d(2px, 28px, 0px)',
        display: 'block',
        padding: '0',
        fontSize: '.875rem',
        zIndex: '1000',
        float: 'left',
        minWidth: '10rem',
        margin: '0.125rem 0 0',
        color: '#000',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        backgroundClip: 'paddingBox',
        webkitBoxShadow: '0 0.5rem 1remrgba(0,0,0,0.175)'
    },
    formatSelection: {
        width: '440px',
        display: 'flex'
    },
    formatSelectionForm: {
        width: '100px',
        borderRight: '1px solid #ddd',
        display: 'block', //유의
        marginTop: '0em' //유의
    },
    titleTo: {
        margin: '0 10px'
    },
    taskState: {
        height: '340px',
        position: 'relative'
    },
    itemsCenter: {
        width: '100%',
        height: '100%',
        display: 'flex',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        webkitBoxPack: 'center',
        justifyContent: 'center'
    },
    chooseFiles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none'
    },
    localChoose: {
        width: 'calc(100% - 12.3rem)',
        minWidth: '220px',
        maxWidth: '480px',
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e37ea',
        marginBottom: '20px',
        borderRadius: '2px'
    },
    chooseText: {
        marginRight: '16px',
        fontWeight: '600',
        color: '#fff',
        fontSize: '1.25rem'
    },
    labelInput: {
        margin: '0',
        cursor: 'pointer'
    },
    localUpload: {
        width: '24px',
        height: '24px',
        position: 'relative',
        margin: '0',
        background: 'url(https://www.media.io/imagesV4/Upload/local-upload.png) no-repeat 50%'
    },
    otherChoose: {
        width: '15.625rem',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    classI: {
        marginRight: '24px'
    },
    uploadItem: {
        width: '40px',
        height: '40px'
    }
}))

export default useStyles;