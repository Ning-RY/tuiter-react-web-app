import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStatus = ({tuit}) => {
    const dispatch = useDispatch();
    const updateTuitHandler = (tuit) => {
        dispatch(updateTuitThunk(tuit));
    }
    return (
        // status
        <div className="row ps-3 pe-3 mt-3">
            {/* comment */}
            <div className="col">
                <i className="fa-regular fa-comment" style={{"color": "gray"}}/>
                <span className="text-secondary ms-1">{tuit.replies}</span>

            </div>

            {/* retweet */}
            <div className="col">
                <i className="fa-solid fa-retweet" style={{"color": "gray"}}/>
                <span className="text-secondary ms-1">{tuit.retuits}</span>

            </div>

            {/* likes */}
            <div className="col">
                <i className="fa-solid fa-heart text-danger"
                   onClick={() => updateTuitHandler(
                       {
                           ...tuit,
                           likes: tuit.likes + 1
                       })
                   }
                />
                <span className="text-secondary ms-1">{tuit.likes}</span>

            </div>

            {/* dislikes */}
            <div className="col">
                <i className="fa-solid fa-thumbs-down" style={{"color": "grey"}}
                   onClick={() => updateTuitHandler(
                       {
                           ...tuit,
                           dislikes: tuit.dislikes + 1
                       })
                   }
                />
                <span className="text-secondary ms-1">{tuit.dislikes}</span>

            </div>

            {/* share */}
            <div className="col">
                <i className="fa-solid fa-share-alt" style={{"color": "grey"}}/>
            </div>
        </div>
    );
};
export default TuitStatus;