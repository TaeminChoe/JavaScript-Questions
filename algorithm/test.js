const solution = (dailyReport) => {};

let str = `"▶ 꿀스테이 업주PC/Mobile
- 상용서버 배포 (2.6.0)
   + [PLTF2022-99]업주웹개선
- 업소 사진 최대수 300장 => 600장 수정 요청
   + 코드 분석 후 수정
- [PLTF2022-110] 찜, 클릭, 조르기   
   + 업주 웹 Mobile 예약 고객관리 페이지 수정
- 업주 웹 페이지에서 현재 사용하지 않는 API 검토"	"▶ 꿀스테이 업주PC/Mobile
- [PLTF2022-110] 찜, 클릭, 조르기
   + 개발된 페이지 자체 테스트 및 오류 수정
   + UID 최신 버전 검토

"	"▶ 꿀스테이 업주PC/Mobile
- 이슈 수정
   + [C][COOL-595][업주모바일][IOS] 쿠폰 선물하기 - 쿠폰사용기간 달력 선택 시 다른 월에 같은날짜가 포커스표시되어 있는 문제
   + [B][COOL-596][업주모바일] 선물한쿠폰목록 - 마일리지 상세검색 팝업창 설정값 저장되지 않는 문제"`;

// console.log(str);
// daily로 나누기
str = str.substr(1, str.length - 2);
str = str.trim().split(`"\t"`);

const reportObj = {
  title: [
    {
      subTitle: [],
    },
  ],
};

const dailyReport = [];

console.log(str[0].split("\n"));

str.forEach((daily) => {
  daily.split("\n").forEach((line) => {
    const trimLine = line.trim();
    const obj = [...reportObj];

    switch (trimLine[0]) {
      case "▶":
        console.log("title: ", trimLine);
        break;
      case "-":
        console.log("subTitle: ", trimLine);
        break;
      case "+":
        console.log("contents: ", trimLine);
        break;
    }
  });
});
