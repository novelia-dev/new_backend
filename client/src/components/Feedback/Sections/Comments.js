import React , {useState} from 'react';
import {Button, Input} from 'antd';
import axios from 'axios';
import {useSelector} from 'react-redux';
import SingleComment from './SingleComment';


const {TextArea} = Input;

function Comments(props){
    const [Comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    return(
        <div>
            <br />
            <div>
                <div style={{fontSize: '20px', fontWeight: 'bold'}}>
                    주관식 피드백
                </div>
            </div>
            <React.Fragment>
                <SingleComment comment={Comment} />
            </React.Fragment>
        </div>
    )
}   

export default Comments;