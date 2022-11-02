import React, { useEffect } from 'react';
import "./HomeScreen.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/imdbSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Loader from '../components/loader/Loader';
import SearchBar from '../components/searchbar/SearchBar';

const HomeScreen = () => {
    const { datas: movies, loading, error } = useSelector((state) => state.imdb);
    // console.log(movies);
    //console.log(error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData("game"));
    }, [dispatch]);

    return (
        <>
            <Container style={{ marginTop: "20px" }}>
                <Box>
                    <SearchBar />
                </Box>
                {
                    error && (
                        <Box>
                            <Typography style={{color: "red", fontWeight: "bold"}}>{error}</Typography>
                        </Box>
                    )
                }
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: "30px 0" }}>
                            {
                                // movies.filter((val) => {
                                //     // console.log(val.l);
                                //     if (searchItem === "") {
                                //         return val;
                                //     } else if (val.l.toLowerCase().includes(searchItem)) {
                                //         return val;
                                //     } else if (val.l.toUpperCase().includes(searchItem)) {
                                //         return val;
                                //     }
                                // }).
                                movies.map((movie) => {
                                    return (
                                        <Grid item xs={2} sm={4} md={4} key={movie.id}>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardMedia
                                                    component="img"
                                                    alt="img"
                                                    height="140"
                                                    image={movie.i.imageUrl}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {movie.l}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                }
            </Container>
        </>
    )
}

export default HomeScreen
