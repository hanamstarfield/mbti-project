## MBTI-TEST
---
MBTI를 통해 몰랐던 나의 내면 모습을 확인할 수 있습니다.

## 프로젝트 구조
----
<details>
 <summary>프로젝트 구조</summary>

  ![image](https://github.com/user-attachments/assets/c627d56b-5796-4dcd-93cc-2f772aae103e)
</details>

## 주요 기능
----

### 로그인/ 회원가입
![image](https://github.com/user-attachments/assets/b97ec8b6-5976-487c-b780-144749895e5b)
![image](https://github.com/user-attachments/assets/a6d00000-2cb3-4702-b270-2f1bba4ec03c)
#### 1. 회원가입 - 아이디,비밀번호,닉네임을 입력받아 간단히 가입할 수 있습니다.
#### 2. 로그인 - 가입한 아이디, 비밀번호를 이용해 로그인 가능합니다.


### 테스트
----
![](https://velog.velcdn.com/images/qnfdmlto/post/1e38f585-f352-4c0e-8579-c1c22c2cf251/image.png)
#### 1. 테스트 - 20개의 문항으로 테스트를 볼 수 있습니다.

### 결과 목록
----
![](https://velog.velcdn.com/images/qnfdmlto/post/295b23dc-05fb-4579-9d3a-6acd1260c75c/image.png)
![](https://velog.velcdn.com/images/qnfdmlto/post/1c79934e-5372-433a-931d-e3c022001b5f/image.png)
#### 1. 전체 테스트 결과 - 테스트를 본 여러 유저의 결과를 확인할 수 있습니다.
#### 2. 내 테스트 결과 - 내가 본 테스트 결과만 확인할 수 있습니다. 

## 프로필
----
![](https://velog.velcdn.com/images/qnfdmlto/post/9d527c50-e87d-4600-8f62-fedd30b9eb43/image.png)
#### 1. 프로필 - 닉네임 수정이 가능합니다.

## 트러블 슈팅
----
|문제|원인|해결|
|------|---|---|
|로그인하고 새로고침하면 상태가 초기화 됨|zustand를 사용하면 막연하게 클라이언트의 로컬 상태를 관리한다고 생각했고, 그것이 로그인 상태를 유지시켜 줄것이라고 판단함. |Zustand의 미들웨어 persist를 사용해 sessionStorage에 상태를 저장하여 새로고침하여도 상태를 잃지 않게함.|
|named export,default export 생각|zustand나 모듈에서 어떤 방식으로 export해줬는지 생각하지 않고 막연하게 사용하려다 보니 오류가 뜸|오류를 보고 구글링을 통해, 무슨 문제인지 파악했고, export에 맞게 import 수정함. |

## 회고
----
심화 주차에서 zustand,tanstack query, axios 등 많은것을 배웠지만, 아직 내것으로 만들지 못한 것 같습니다. tanstack query를 이번 프로젝트에서 적용시켜 보지 못하여 굉장히 아쉽고, 시간이 있었다면 사용해볼 수 있었을까? 라고 생각됩니다. 트러블 슈팅 관련도 정리를 못하고 있는데, 확실히 시간이 지나닌까 저번에 봤던 오류인데 제대로 처리하지 못하는 모습을 보고 중요성을 깨달을 수 있었습니다. 최근에 좀 공부량이 많아지다 보니 집중력이 떨어지는데 이번 프로젝트 완성도를 보며 다시한번 끌어올려야겠다 생각됩니다. 공부하자 화이팅!
