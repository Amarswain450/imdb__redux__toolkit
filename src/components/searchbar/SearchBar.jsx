import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/imdbSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        if (searchItem) {
            dispatch(fetchData(searchItem));
        }
        if (searchItem === "") dispatch(fetchData("game"));
    }, [searchItem]);

    return (
        <>
            <Box component="form" noValidate autoComplete="off">
                <FormControl style={{ width: "40%" }}>
                    <OutlinedInput
                        placeholder="Please enter text"
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </FormControl>
            </Box>
        </>
    )
}

export default SearchBar
