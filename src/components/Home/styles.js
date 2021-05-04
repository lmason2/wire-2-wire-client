import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "20px"
      },
      mediumWriting: {
        color: 'black',
        textDecoration: 'none',
        fontFamily: "Raleway, sans-serif",
        fontWeight: "200",
        fontSize: "20pt",
        margin: "auto",
        textAlign: "center"
      },
}));