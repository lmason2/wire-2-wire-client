import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, deepPurple } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: blueGrey[900]
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: "Raleway, sans-serif",
    fontWeight: "200"
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginLeft: "20px"
  },
  toolbarMargin: {
    marginLeft: "20px"
  }
}));