import React from "react";
import TuitItem from "./tuitItem";
import WhatsHappening from "../home/whats-happening";
import {useSelector} from "react-redux";

const HomeTuitsList = () => {
    const tuitsArray = useSelector(state => state.homeTuits)
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <ul className="list-group">
                {
                    tuitsArray.map(tuit =>
                        <TuitItem key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </>
    );
};
export default HomeTuitsList;