/**
 * 성명서, 이 프로젝트는 모든 사람이 기술과 엔터테인먼트를 배우는 데 도움을 주기 위한 것일 뿐이며 침해를 피하기 위해 수정된 웹사이트를 대규모로 확산 및 상업화하지 마십시오!！
 */

// 추가 점수: 숫자 수정
let extraScore = 1;

// 추가 점수: 수정된 숫자
let wuDi = true;

// 첫 번째 과일: 숫자를 0-10으로 수정, 0은 포도, 9는 수박 반 Default = 0
let firstFruit = 0;

// 과일 합성 반전: 거짓에서 참으로 변경됨
let reverseLevelUp = false;

// 생성할 과일 지정: 기본값: 반전 안 함 0-5, 반전 켜기 6-11, 해당 숫자를 수정하여 무작위로 생성되는 과일 범위 제어
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 무작위 과일 생성 최소값(0-10) 0은 포도, 9는 수박 반쪽
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 무작위 과일 생성 최대치(1-11) 0은 포도, 9는 수박 반쪽
let setFruits = {
// 처음 몇 번 생산된 과일의 경우, 0은 포도, 9는 수박 반 개에 해당하는 임의의 수의 숫자를 입력할 수 있습니다.
//  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
//  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [9, 9, 10, 10, 10, 10],
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일을 Q로 만들기 : false 0보다 크고 1보다 작은 임의의 소수로 변경 (권장 0.9)
let fruitQTan = false;

// 과일 낙하를 느리게 하기: false는 0보다 큰 임의의 수로 변경되며 값이 클수록 저항이 커지고 낙하가 느려집니다(권장 5).
let fruitSlowDown = false;

// 오른쪽 상단 아이콘을 눌러 과일 바꾸기: false true로 바꾸면 됩니다
let clickChangeFruit = true;

// 광고 링크: false 또는 빈 문자열은 광고로 이동하지 않음을 나타냅니다
let adLink = '';

// 웹 페이지 제목 수정: "합성된 큰 수박"으로 바꾸기
document.getElementsByTagName("title")[0].innerText = '제이호 : 수박게임';

// 선택 팝업 열기: false를 true로 바꿉니다
let selectModal = false;

