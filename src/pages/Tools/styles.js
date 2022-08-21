import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    leftText: {
        textAlign: 'left',
        width: '40%',
        position: 'relative',
    },
    uploadContainer: {
        textAlign: 'left',
        width: '100%',
        maxWidth: '1200px',
        padding: '3rem 2rem',
        margin: '0 auto'
    },
    rightButton: {
        textAlign: 'right',
        width: '50%',
        position: 'relative',
    },
    buttonContainer: {
        textAlign: 'right',
        width: '60%',
        position: 'relative',
    },
    mainDescription: {
        fontWeight: 'bolder',
        fontSize: '1.5rem',
        lineHeight: '1.2',
        marginBottom: '1.5rem',
    },
    servDescription: {
        fontSize: '1rem',
        fontWeight: '300',
        marginBottom: '1.5rem',
        color: 'grey'
    },
}))

export default useStyles;