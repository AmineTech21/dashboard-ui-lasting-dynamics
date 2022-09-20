import { MenuItem, NativeSelect, Select, TextField } from '@mui/material';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import ExpandMore from '@mui/icons-material/ExpandMore';

const companies = [
    {
        name: 'Fenoh Store'
    }
];

const BottomSection = () => {
    return (
        <div className="ml-4 mb-6">
            <h3 className=" text-base mb-4">Select your shop</h3>
            <Select className=" w-[215px] h-[50px] text-[#233B53]" id="outlined-select-currency" value={companies[0].name} IconComponent={ExpandMore}>
                {companies.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default BottomSection;
