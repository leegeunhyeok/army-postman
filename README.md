# army-postman

📮 유익한 정보를 담아 육군훈련소 인편을 보내주는 우체부

## Setup

1. 상단의 Use this template 버튼 눌러 저장소 복사
2. [.env](./env) 파일 수정
   - 받는 사람 정보 및 계정 정보를 저장소에 노출하고 싶지 않으신 경우 비워두고, 저장소의 Secret에 정보를 등록합니다. + 하단 C 작업 필수
3. [.github/workflows/send.yml](.github/workflows/send.yml) 파일 수정
   - 파일 내에 표기해둔 A, B, C 작업 진행
   - 수정사항 커밋 후 푸쉬!
4. 매일 오후 3시에 인편을 작성하여 보냅니다!

### .env

```
NAME=
BIRTHDAY=
ENTER_DATE=
TYPE=
TO=

EMAIL=
PASSWORD=
```

- 받는사람 정보
  - NAME: 이름
  - BIRTHDAY: 생년월일 (예: 20000101)
  - ENTER_DATE: 입영일 (예: 20000101)
  - TYPE: 입영부대 (예: 논산훈련소-육군) > 더캠프에 있는 텍스트와 일치하도록 작성!
  - TO: 해당 날짜까지 인편 발송
- 더캠프 계정
  - EMAIL: 이메일
  - PASSWORD: 비밀번호

## Run

```bash
# GitHub Actions를 사용하지 않는 경우 (수동 실행)
node app.js
```
