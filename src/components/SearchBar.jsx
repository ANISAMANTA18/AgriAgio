import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(https://i.ibb.co/ZzDG8Jt/register2.jpg)',
    backgroundSize: 'cover',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: theme.spacing(6)
  },
  searchField: {
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    '& .MuiOutlinedInput-root': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.23)'
      }
    }
  },
  searchIcon: {
    color: 'grey'
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
        What are you looking for?
      </Typography>
      <TextField
        className={classes.searchField}
        label="Search"
        variant="outlined"
        placeholder='Search for Products, Tools and more...'
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
          )
        }}
      />
    </div>
  );
}
