import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Descriptions} from 'antd'


function ChooseFeedback(props){
    
    const [AverageStar, setAverageStar] = useState([])
    const AVR_RATE = AverageStar * 20;
    const STAR_IDX_ARR = ['first','second','third','fourth','last'];
    const [ratesResArr, setRatesResArr] = useState([0,0,0,0,0]);

    const calcStarRates = () => {
        let tempStarRatesArr = [0,0,0,0,0];
        let starVerScore = (AVR_RATE * 70) / 100;
        let idx = 0;
        while(starVerScore > 14){
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };

    useEffect(() => {
        setAverageStar()
        setRatesResArr(calcStarRates)
    },[])

    const RoundAverageStar = Number(AverageStar).toFixed(1);

    const showStar = () =>{
        return(
            <Descriptions layout='horizontal'>
                <Descriptions.Item>
                    
                </Descriptions.Item>
                <Descriptions.Item>
                    {`${RoundAverageStar}점`}
                </Descriptions.Item>
            </Descriptions>
        )
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
            <div>
            <h4>피드백 열람</h4>
            <h5>해당작품의 피드백 결과입니다.</h5>
            </div>
            <div>
            <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        <h6>현대 판타지 &nbsp; <button>열람완료</button></h6>
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                        </table>
                                        <table>
                                            <td> 
                                                <input type="text" value="『자금이라는 것은 주인인 내가 알지 머슴이 뭘 압니까』" style={{width:"578px", height:"133px"}}/> 
                                            </td>
                                        </table>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <br />
            <div>
               <h4>별점</h4>
               <table>
                <td>{showResult()}</td>
                <td>{showStar()} </td>
                </table>
               
            </div>
            <br />
            <div>
                <h4>독자분석</h4>
            </div>
            <div>
                <table>
                    <tr>
                    <td>피드백 참여자 목록 &nbsp;</td>
                    <td>참여자 성비 &nbsp;</td>
                    <td>참여자 연령층 &nbsp;</td>
                    <td>참여자가 주로 선호한 태그 &nbsp;</td>
                    <td>참여자가 주로 금지한 태그 &nbsp;</td>
                    </tr>
                    <tr>
                       <td><h6>참여자 닉네임1</h6></td>
                       <td><h6>남성 90%</h6><h6>여성 10%</h6></td>
                       <td><h4>20대 80%</h4><h5>10대 15%</h5><h6>30대 5%</h6></td> 
                       <td>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                       </td>
                       <td>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                       </td>
                    </tr>
                    
                </table>
            </div>
            <br />
            <div>
               <h4>캐릭터</h4>
            </div>
            <table>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <h4>몰입도</h4>
                </tr>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <h4>상업성</h4>
                </tr>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <h4>캐릭터</h4>
                </tr>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
            </table>
            <br />
            <button>주관식 보기</button>
        </div>
    )
}

export default ChooseFeedback;

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