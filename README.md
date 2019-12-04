# codesquad_masters
codesquad_masters_frontend_exam


# <1단계 구현 코딩 설명> #
  -크게(포괄적으로) 보면 스트라이크, 볼, 아웃, 안타 네가지가 나오는 것이고 그 각자마다 세부적인 조건들이 있다고 생각했다.
   때문에 먼저 네가지를 담은 숫자가 0으로 초기화된 baseball.score 객체를 만들었고 
  -baseball.score객체 안의 각각의 프로퍼티들을 관리할 수 있게(상황에 맞는 추가 조건 생성하기 위해)
   baseball.processStrike, baseball.processBall, baseball.processOut, baseball.processHit메소드들을 만들었다.
  -baseball.processStrike메소드에스트라이크가 3회이면 아웃이 되는 조건 추가
   baseball.processBall메소드에 볼이 4회면 안타가 되는 조건 추가
   baseball.processOut메소드에 아웃이 3회가 되기 전 까지는 다음타자가 나오는 메시지를 함께 출력하라는 조건 추가
  -안타or아웃이 나올경우에는 스트라이크와 볼 수를 초기화 하는 baseball.resetStrikeBallCount메소드를 생성











<!-- # var baseball = {}
  일단 함수 메소드들을 담고 관리해줄 빈 부모객체 생성
# 부모객체 안에 baseball.score 객체 생성
        baseball.score = {
            strike : 0,
            ball : 0,
            out : 0,
            hit : 0
        }
        위 객체를 생성해서 나올수 있는 네가지 가능성을 담았다.
# baseball.getSign 메소드 생성
        변하는 숫자와 같이 보여야 할 sign을 출력할 수 있는 메소드 생성
 -->

