import React from "react";
import Card from "../components/Card";

const CardList = () => {
    
    return (
        //TODO: 카드 맵함수 써서 불러오기 카드 한장 리덕스 만들기 백엔드랑 연결해보기.....
        <React.Fragment>
            
            <div> 국산차/수입차 필터버튼 </div>
            {/* <div>카드 하나하나 맵 돌리기</div> */}
            <Card/>
            <div>위로가기 버튼</div>


        </React.Fragment>
    );
}



export default CardList;