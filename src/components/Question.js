import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataStore } from "../data/DataStore";
import Answer from "./Answer";

//display a question (card with content and a button)
export default function Question() {

    //return a card with a quesiton and a button to show answer (button press changes datastore view)

    const [curQuestion, setCurQuestion] = useState(DataStore.cardsBank[DataStore.curCard]);

    //get current view from datastore
    useEffect(() => {
        DataStore.subscribe(onCardChange);
    }, []);

    function onCardChange() {
        setCurQuestion(DataStore.cardsBank[DataStore.curCard])
    }

    return (
        <Card sx={{width:1/2}} variant="outlined">

            <CardContent>
                <Typography>Question:</Typography>
                <Typography>{curQuestion.question}</Typography>
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
                        DataStore.setView(<Answer answer={curQuestion.answer}/>);
                    }}
                >Show Answer</Button>

            </CardActions>

        </Card>
    );

}