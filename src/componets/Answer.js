import * as React from 'react';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { DataStore } from "../data/DataStore";
import Typography from '@mui/material/Typography';
import Question from "./Question";
import Results from "./Results";

//display an answer (card with condent and three buttons)
export default function Answer({ answer }) {

    //pop 1 answer off top five answer array
    //return a card with an answer and three buttons
    //buttons: set a mastery multiplier, change datastore view

    const [curCard, setCurCard] = useState(DataStore.curCard);

    //get current view from datastore
    useEffect(() => {
        DataStore.subscribe(onCardChange);
    }, []);

    function onCardChange() {
        setCurCard(DataStore.curCard)
    }

    return (
        <Card variant="outlined">

            <CardContent>
                <Typography>Answer:</Typography>
                <Typography>{answer}</Typography>
            </CardContent>

            <CardActions>

                <Button
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
                        DataStore.cardsBank[DataStore.curCard].updateMastery(.5);
                        DataStore.nextCard();
                        if (curCard > 3) {
                            DataStore.setView(<Results />);
                        } else {
                            DataStore.setView(<Question />);
                        }
                    }}
                >didn't get it</Button>

                <Button
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

                        DataStore.cardsBank[DataStore.curCard].updateMastery(.9);
                        DataStore.nextCard();

                        if (curCard > 3) {
                            DataStore.setView(<Results />);
                        } else {
                            DataStore.setView(<Question />);
                        }
                    }}
                >getting it</Button>

                <Button
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

                        DataStore.cardsBank[DataStore.curCard].updateMastery(1.2);
                        DataStore.nextCard();

                        if (curCard > 3) {
                            DataStore.setView(<Results />);
                        } else {
                            DataStore.setView(<Question />);
                        }
                    }}
                >totally understand</Button>

            </CardActions>

        </Card>
    );

}
