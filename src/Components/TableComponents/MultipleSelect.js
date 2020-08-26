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
      position:"relative",
    },
  });
function MultipleSelect({column}) {

    // const classes = useStyles();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };
    return (
        
        <div>
          <FormControl>
            <InputLabel id="demo-mutiple-checkbox-label">Column</InputLabel>
            <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            variant="outlined"
            onchange={handleChange}
            
            renderValue={(selected) => selected.join(', ')}
            input={<Input />}
            >
              {column.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                ))}

            </Select>
          </FormControl>
            {/* <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Column</InputLabel>
                <Select
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
                      <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl> */}
        </div>
    )
}

export default MultipleSelect;
