import React,{ useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import './Table.css';


const useStyles = makeStyles({
    formControl: {
      minWidth: 120,
      maxWidth: 300,
    },
    Sel:{
      position: "fixed",
    }
  });
function MultipleSelect({column,cols}) {

    const classes = useStyles();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        
        if(!event.target.value.includes('cases') && !event.target.value.includes('active') && !event.target.value.includes('recovered') && !event.target.value.includes('countryInfo') && !event.target.value.includes('deaths') && !event.target.value.includes('country'))
        {
          setPersonName(event.target.value);
          cols(event.target.value);
        }
        
    };

    return (
        
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Column</InputLabel>
                <Select
                  className={classes.sel}
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(', ')}
                  input={<Input />}
                >
                {column.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name.toUpperCase()} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default MultipleSelect;
