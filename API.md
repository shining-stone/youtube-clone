회원 관리

POST /user/account/auth : 로그인

GET /user/account/check-duplicate/id/{id} : id 중복체크 API

GET /user/videos : 유저가 업로드한 리스트 API

GET /user/likes : 유저가 좋아요한 동영상

GET /user/subscribes : 유저가 구독한 채널

GET /user/{username} : 유저 본인 채널

게시글 관리

GET /videos : 영상 목록 API

POST /videos/upload : 게시글 작성 API

GET /videos/{id} : 해당 영상 및 정보 불러오기

PATCH /videos/{id} : 해당 영상의 정보 수정

DELETE /videos/{id} : 영상 삭제

댓글/좋아요/구독

GET /videos/{id}/comments 게시글 댓글 목록 API

POST /videos/{id}/comments 게시글 댓글 작성 API

POST /likes/{id}/like 좋아요

POST /likes/{id}/unlike 좋아요 취소

POST /subscribe/{id}/subscribe 구독

POST /subscribe/{id}/unsubscribe 구독 취소

/_
유저가 구독한 채널의 영상만 추천 목록에 뜨게함.
_/
