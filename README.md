# 항해99 미니프로젝트 10조 - 프론트(이서현, 이해원)
[와이어프레임](https://www.figma.com/file/UPBOgboo2mtCfwmDL3sJSO/Untitled?node-id=0%3A1) 

### ![logo 2](https://user-images.githubusercontent.com/90237570/145667526-0c8e918f-b7ef-4edb-b38d-3fcaab878b37.png)



#### 👀 [백엔드 Repository 링크](https://github.com/kwak9898/ChaChaCha_Back_end)

## 🙌🏻member

### view
서현
 회원가입 / 댓글 작성/수정/삭제 
해원
로그인 / 메인페이지 /카드데이터 정렬

### 개요
명칭 : chachacha
개발 인원 : 4명
개발 기간 : 2021.12.06 ~ 2021.12.11
주요 기능 : 정보제공, 커뮤니티
개발 언어 : JavaScript
개발 라이브러리 : React.js
형상 관리 툴 : git
협업 툴 : Slack,gather
간단 소개 : 리액트 - 노드 협업의 정보성 커뮤니티 프로젝트


### `프로젝트 특징`
> chachacha
_자동차 구입을 고민하는 사람들을 위한 국산,수입차 정보 제공과 카종별로 댓글로 의견을 공유하는 커뮤니티 기능_

> 프론트엔드와 백엔드를 분리하여 프로젝트 개발
_각 파트별로 Repository를 생성 후 작업_

_프론트: AWS S3_
_백엔드: AWS EC2_
_빌드 후, S3와 EC2를 연동_

> API 명세서에 따라 API호출 및 응답 확인

> React, Node.js를 기반으로한 커뮤니티 웹 서비스

_회원가입 _
_Validation_
_JWT 로컬 스토리지 저장방식_
_카테고리(태그)별 조회기능_

###`✍🏻 프로젝트 소스`

@최소단위 엘리먼트

Input
Grid
Text
Button 
CardImage

(ttl) index.js

@ 컴포넌트



@shared
Header
App

@API


### `[Package]`
**redux / redux-logger** : 데이터 전역 관리를 위한 리덕스 관리 패키지
**immer** : 리덕스 불변성 관리
**styled-components** : 컴포넌트의 스타일을 설정
**Material-UI** : 리액트와 연동되는 ui 패키지
**connected-react-router, history** : 라우팅 및 페이지 이동
**axios** : 서버 통신

### `Trouble shooting`

1. 헤더와 메인페이지에서 로그인 유지기능을 서버로 로그인체크 요청api를 보내지않고 어떻게 구현할것인가?
 -서버에서 받은 토큰과 쿠키에 저장된 아이디의 유무를 헤더에서 이중으로 확인하고 메인페이지가 렌더링될때 토큰의 유무를 다시 확인하도록 해주었음

2. DB 에서 받은 데이터를 리덕스에 넣어서 map함수로 돌려서 보여주려고 했는데 map function이 아니라는 에러가 떴다.
-받아온 데이터를 콘솔로 찍어보니 {key:[{…},{…},{…}]} 이런형태여서 미들웨어에서 데이터를  배열만 가져오도록 변경해주었음
