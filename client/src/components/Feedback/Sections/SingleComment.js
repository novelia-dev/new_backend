import React,{useState} from 'react';
import styled from 'styled-components';
import {Comment, Input} from 'antd';
import axios from 'axios';
import {useSelector} from 'react-redux';

const {TextArea} = Input;

  



function SingleComment(props){

    const [CommentValue, setCommentValue] = useState("");
    const [AverageStar, setAverageStar] = useState([])
    const AVR_RATE = AverageStar * 20;
    const STAR_IDX_ARR = ['first','second','third','fourth','last'];
    const [ratesResArr, setRatesResArr] = useState([0,0,0,0,0]);
    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }
    const showResult = () => {
    return(
        <StarRateWrap>
        {STAR_IDX_ARR.map((item, idx) => {
            return <span className='star_icon' key={`${item}_${idx}`}>
                <svg xmlns='http://www.w3.org/2000/svg' width='40' height='39' viewBox='0 0 14 13' fill='#cacaca'>
                    <clipPath id={`${item}StarClip`}>
                        <rect width={`${ratesResArr[idx]}`} height='39' />
                    </clipPath>
                    <path
                        id={`${item}Star`}
                        d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                        transform='translate(-2 -2)'
                    />
                    <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#fadb14'
                    />
                </svg>
            </span>
        })
        }
    </StarRateWrap>
    )
}
    return(
        <div>
            <Comment content={<p>
                <table>
                    <tr>
                    <td><h5>닉네임 &nbsp;</h5></td>
                    <td><h5>남성 &nbsp;</h5></td>
                    <td><h5>20대 &nbsp;</h5></td>
                    <td>{showResult()}</td>
                    <td><img alt="알림"></img></td>
                    </tr>
                    <tr>
                        <h5>좋았던 점</h5>
                        <Input type="text" value="좋다" />
                    </tr>
                    <tr>
                        <h5>아쉬웠던 점</h5>
                        <Input type="text" value="싫다" />
                    </tr>
                </table>
                
            </p>}></Comment>
        </div>
    )
}

export default SingleComment;

const StarRateWrap = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    margin: 0 0 0 15px;
    .star_icon{
        display: inline-flex;
        margin-right: 5px;
    }
`;