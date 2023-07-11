import {React,useState} from 'react'
import { Stack , Typography , Box,Paper} from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const columns = [
  { 
    Name: 'Name', 
    headerName: 'Name', 
    width: 150,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'Message',
    headerName: 'Message',
    width: 422,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
  },
  {
    field: 'reply',
    headerName: '',
    width: 150,
  }
];

const rows = [
    {   
     id : '1',
     Name: 'Jordi Alba',
     Email: 'alba@gmail.com',
     Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tincidunt lacus, nec hendrerit.',
     date : '05/29/2023 01:12 PM',
     reply : 'Reply'
    }
];

const SearchBar = ({setSearchQuery}) => (
  <Paper sx={{borderRadius:'25px', width:'300px'}}>
    <IconButton type="submit" aria-label="search">
      <SearchIcon/>
    </IconButton>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      sx={{
      "& fieldset": { border: 'none' },
      }}
      placeholder="Search"
      size="small"
    />
   
  </Paper>
);

const Contactqueries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Box sx = {{margin : '25px'}}>
    <Stack direction= "row"   justifyContent="space-between" alignItems="center">
        <Typography sx={{
            fontSize:'25px',
            fontWeight : '600',
            LineHeight : '30.45px',
            color : '#424242',
        }}>
           Contact Forms
        </Typography>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Stack>
     <Box sx={{ height: 400, width: '100%', marginTop:'25px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooterPagination={true}
        filterable={false}
        disableColumnMenu
    />
    </Box>
    </Box>
)
}


export default Contactqueries
