import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BasicSelect() {
    const [category, setCategory] = React.useState('');
    const [material, setMaterial] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleCategoryChange = (event) => setCategory(event.target.value);
    const handleMaterialChange = (event) => setMaterial(event.target.value);
    const handleStartDateChange = (event) => setStartDate(event.target.value);
    const handleEndDateChange = (event) => setEndDate(event.target.value);

    // You can define any functionality you want to execute when the "COMPARE" button is clicked.
    const handleCompareClick = () => {
        console.log("Comparing data...");
        // Implement your compare logic here.
    };

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            {/* Category and Material Dropdowns */}
            <Box display="flex" gap={2}>
                {/* Select Category Dropdown */}
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                    <InputLabel id="category-select-label">Select category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={category}
                        label="Select category"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value={"Metal"}>Metal</MenuItem>
                        <MenuItem value={"Wood"}>Wood</MenuItem>
                    </Select>
                </FormControl>

                {/* Select Material Dropdown */}
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                    <InputLabel id="material-select-label">Select material</InputLabel>
                    <Select
                        labelId="material-select-label"
                        id="material-select"
                        value={material}
                        label="Select material"
                        onChange={handleMaterialChange}
                    >
                        <MenuItem value={"Material 1"}>Material 1</MenuItem>
                        <MenuItem value={"Material 2"}>Material 2</MenuItem>
                        <MenuItem value={"Material 3"}>Material 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* Starting and Ending Date Dropdowns */}
            <Box display="flex" gap={2}>
                {/* Pick Starting Date Dropdown */}
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                    <InputLabel id="start-date-select-label">Pick starting date</InputLabel>
                    <Select
                        labelId="start-date-select-label"
                        id="start-date-select"
                        value={startDate}
                        label="Pick starting date"
                        onChange={handleStartDateChange}
                    >
                        <MenuItem value={"22/09/01"}>22/09/01</MenuItem>
                        <MenuItem value={"22/10/01"}>22/10/01</MenuItem>
                        <MenuItem value={"22/11/01"}>22/11/01</MenuItem>
                    </Select>
                </FormControl>

                {/* Pick Ending Date Dropdown */}
                <FormControl fullWidth sx={{ minWidth: 120 }}>
                    <InputLabel id="end-date-select-label">Pick ending date</InputLabel>
                    <Select
                        labelId="end-date-select-label"
                        id="end-date-select"
                        value={endDate}
                        label="Pick ending date"
                        onChange={handleEndDateChange}
                    >
                        <MenuItem value={"22/12/01"}>22/12/01</MenuItem>
                        <MenuItem value={"23/01/01"}>23/01/01</MenuItem>
                        <MenuItem value={"23/02/01"}>23/02/01</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* COMPARE Button */}
            <Button variant="contained" color="primary" onClick={handleCompareClick}>
                COMPARE
            </Button>
        </Box>
    );
}

