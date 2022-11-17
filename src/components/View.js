import { useState, useEffect } from "react";
import { DataStore } from "../data/DataStore";

//display a box with either a question, answer, or splash screen
export default function View() {

    const [curView, setCurView] = useState(DataStore.view);

    //get current view from datastore
    useEffect(() => {
        DataStore.sortCards();
        DataStore.subscribe(onViewChange);

    }, []);

    function onViewChange() {
        setCurView(DataStore.view)
    }

    //return correct view (Results, Question, Answer)
    return (
        <>
            {curView}
        </>

    );

}