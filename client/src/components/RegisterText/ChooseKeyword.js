import React,{useState, useRef} from "react";

function inputok(){
    alert('작품 등록이 완료되었습니다!');
}

function ChooseKeyword(){


    const [text, setText] = useState('');
    const [arr, setarr] = useState([]);

    const [text1, setText1] = useState('');
    const [arr1, setarr1] = useState([]);
    
    const [text2, setText2] = useState('');
    const [arr2, setarr2] = useState([]);
    
    const [text3, setText3] = useState('');
    const [arr3, setarr3] = useState([]);

    const InputText = (e) => {
        setText(e.target.value);
    }
    const ResetText = () => {
        setText('');
    }

    const handleSubmit = (e) => {
        setarr(arr => [...arr, text]);
        setarr(arr => [...arr,' ']);
        setText('');
    }

    const InputText1 = (e) => {
        setText1(e.target.value);
    }
    const ResetText1 = () => {
        setText1('');
    }

    const handleSubmit1 = (e) => {
        setarr1(arr => [...arr, text]);
        setarr1(arr => [...arr,' ']);
        setText1('');
    }

    const InputText2 = (e) => {
        setText2(e.target.value);
    }
    const ResetText2 = () => {
        setText2('');
    }

    const handleSubmit2 = (e) => {
        setarr2(arr => [...arr, text]);
        setarr2(arr => [...arr,' ']);
        setText2('');
    }

    const InputText3 = (e) => {
        setText3(e.target.value);
    }
    const ResetText3 = () => {
        setText3('');
    }

    const handleSubmit3 = (e) => {
        setarr3(arr=> [...arr, text]);
        setarr3(arr=> [...arr,' ']);
        setText3('');
    }



    return(
        <div>
            <div>
                <h3>객관식 키워드 등록</h3>
            </div>
            <div>
                <h5>독자들이 고를 수 있는 객관식 키워드를 입력하세요.</h5>
            </div>
            <div>
                <h3>캐릭터</h3>
            </div>
            <div>
              <label>키워드 추가</label><input type="text" onChange={InputText} value={text} placeholder="30자 이내" />
              <button onClick={handleSubmit}>추가</button>
              <button onClick={ResetText}>초기화</button>
            </div>
            <div>
                <b>{arr}</b>
            </div>
            <div>
                <h3>몰입도</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText1} value={text1} placeholder="30자 이내" />
            <button onClick ={handleSubmit1}>추가</button>
            <button onClick ={ResetText1}>초기화</button>
            </div>
            <div>
                <b>{arr1}</b>
            </div>
            <div>
                <h3>상업성</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText2} value={text2} placeholder="30자 이내" />
            <button onClick={handleSubmit2}>추가</button>
            <button onClick={ResetText2}>초기화</button>
            </div>
            <div>
                <b>{arr2}</b>
            </div>
            <div>
                <h3>기타</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText3} value={text3} placeholder="30자 이내" />
            <button onClick={handleSubmit3}>추가</button>
            <button onClick={ResetText3}>초기화</button>
            </div>
            <div>
                <b>{arr3}</b>
            </div>
            <div>
                <button onClick={inputok}>다음</button>
            </div>
        </div>
    )

}

export default ChooseKeyword;