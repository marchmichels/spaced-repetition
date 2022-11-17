import * as React from 'react';
import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import { DataStore } from "./../data/DataStore";
import Question from "./Question";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

//display (card with a button)
export default function Results() {

    const [cards, setCards] = useState(DataStore.cardsBank);

    useEffect(() => {
        DataStore.sortCards();
        DataStore.subscribe(onCardChange);
    }, []);

    function onCardChange() {
        setCards(DataStore.cardsBank);
    }

    return (
        <Container>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/marchmichels/spaced-repetition">View GitHub Repository</Link>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">Question</TableCell>
                            <TableCell align="right">Mastery</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map((card) => (
                            <TableRow
                                key={card.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {card.id}
                                </TableCell>
                                <TableCell align="right">{card.question}</TableCell>
                                <TableCell align="right">{card.mastery}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                variant='contained'
                size="small"
                sx={{
                    borderRadius: 50,
                    bgcolor: "#9d8854",
                    color: "black",
                    '&:hover': {
                        bgcolor: "#cab287",
                        color: "black"
                    }
                }}
                onClick={() => {
                    DataStore.setView(<Question />);
                }}
            >Start</Button>

        </Container>

    );

}