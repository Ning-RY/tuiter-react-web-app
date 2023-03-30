import React from "react";
import TuitStatus from "./tuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": "0",
            "topic": "Space",
            "username": "SpaceX",
            "handle": "@spacex",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "spaceXlogo.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li key={tuit._id} className="list-group-item">
            <div className="row">
                {/*left-part image*/}
                <div className="col-1">
                    <img className="rounded-circle" src={"/images/" + tuit.image} width="40px"/>
                </div>
                {/* right-part post */}
                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-2">
                        <div>
                            <div>
                                <span className="fw-bolder">{tuit.username}</span>
                                <span className="ms-1 fa fa-circle-check fa-1x"></span>
                                <span className="text-secondary">{' ' + tuit.handle}</span>
                                <span className="text-secondary">{' · ' + tuit.time}</span>
                            </div>
                        </div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}/>
                    </div>
                    <div className="ps-2">
                        {tuit.tuit}
                    </div>
                    {/* delete tuit */}

                    <TuitStatus tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;