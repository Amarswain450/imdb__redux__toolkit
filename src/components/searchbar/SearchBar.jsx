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
        let timer;
        timer = setTimeout(() => {
            if (searchItem) {
                dispatch(fetchData(searchItem));
            }
            if (searchItem === "") dispatch(fetchData("game"));
        }, 2000);
        return () => clearTimeout(timer);
    }, [searchItem]);

    return (
        <>
            <Box component="form" noValidate autoComplete="off">
                <FormControl style={{ width: "40%" }}>
                    <OutlinedInput
                        placeholder="Search Here"
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </FormControl>
            </Box>
        </>
    )
}

export default SearchBar
