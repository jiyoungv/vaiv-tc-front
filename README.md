# TC_FRONT
> nextJS, ReactJS를 활용한 UI / UX 구성

## 기술 스택

### - 프로젝트 환경
- nodeJS (ver 16)
- nextJS (ver 13)
- ReactJS (ver 18) 


### - 상태 관리
- ?

### - 기타
- icon: 'react-icons/ri' (https://react-icons.github.io/react-icons/icons?name=ri)
- storybook

### - 개발 환경 구축
1. 프로젝트 내려 받기 <br/>
``` https://gitlab.daumsoft.com/Technology-strategy-team/tc_front.git ```

2. Dependencies install<br/>
``` npm install ```<br/>
install 에러 발생 시  => ```npm install --force ```

3. node 실행 - ( BACKEND가 실행 중이어야 동작 )<br/>
``` npm run dev ``` => 개발 환경으로 시작<br/>
``` npm run build:dev ``` => 개발 환경으로 build<br/>
``` npm run start:dev ``` => 개발 환경으로 시작<br/>
``` npm run build:prod ``` => 배포 환경으로 build<br/>
``` npm run start:prod ``` => 배포 환경으로 시작<br/>
``` npm run start:sb ``` => storybook 시작<br/>
``` npm run build:sb ``` => storybook build<br/>

### - 패키지 구조
+ #### env
> dev, prod 환경에 따른 변수 저장을 위한 파일들
+ #### storybook
> storybook 환경 설정 파일

+ #### public
> 정적 파일 모음 (fonts, images...)

+ #### src
  - ##### apis
    > backend api 호출 함수 모음 ( 비동기 - axios 사용 )

    => 이름 규칙: backend api url에 따라 사용 ( ex. user.js, post.js )
  - ##### components
    > 화면을 구성하는 각각의 요소 모음, 재사용 가능한 component 들은 다시 사용하기 편한 naming 필요 ( ex. Button )

    => 이름 규칙: 대문자로 시작 ( ex. ExampleBtn.js )

    * common: 재사용 가능한 컴포넌트. storybook 작성
    * layout: data 등이 맞물린 재사용이 힘든 컴포넌트

    => component는 묶어서 import 하는 방식으로 작성됨. 각 폴더 index.jsx에 export를 해줘야함
    ```
    import 예시
    
    import { Flex, Title } from '@components/common';
    import { SubLayout, Header } from '@components/layout';
    ```
    ```
    import dynamic 적용 예시
    const { Flex, Title } = dynamic(() => import('@components/common').then(module => module));
    const Modal = dynamic(() => import('@components/common').then(module => module.Modal));
    ```
    ```
    export 예시 (@components/common/index.jsx)

    export { default as Button } from './Button';
    export { default as Flex } from './Flex'
    ...
    ```

  - ##### hooks
    > 커스텀훅 함수들 모음

    => 이름 규칙: use + 함수명 ( ex. useInput.js )
  - ##### pages
    > 화면을 분기시키는 폴더 (분기되는 페이지들로 구성)

    => 이름 규칙: url에 적용될 이름으로 사용 ( ex. profile.js ) -> url: 서버주소/profile

      - ###### _app.js: 최초 실행되는 파일 (최상위 파일)
      - ###### _document.js: 두번째로 실행되는 파일 (CSS의 SSR 적용을 위한 파일)


  - ##### states
  > 전역 상태 관리를 위한 js 모음

  - ##### utils
  > 전역에서 사용할 수 있는 js 모음

+ #### styles
  > 공통 스타일 파일
+ #### .eslintrc.json
> 코딩 컨벤션을 위한 설정 모음

+ #### .prettierrc
> 코딩 컨벤션을 위한 설정 모음

+ #### babel.config.js
> es6+ 문법 적용을 위한 babel 설정

+ #### jsconfig.json
> path alias 설정 파일

+ #### next.config.js
> next 설정 ( plugin, alias, devtool, mode ... )

+ #### package.json
> 프로젝트 정보와 의존성(dependencies)을 관리하는 문서
