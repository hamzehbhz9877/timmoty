import React from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

type props={
    data:Array<string>
    title:string
    validation:any
}

const SelectBox = ({data,title,validation}:props) => {
    const {helperText,...rest}=validation
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                name={title}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={title}
                {...rest}
            >
                {data?.map((item,index)=><MenuItem key={index} value={item}>{item}</MenuItem>)}
            </Select>
            <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
    );
};

export default SelectBox;