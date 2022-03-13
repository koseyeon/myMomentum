const quotes = [{
    quote: "생각지 않고 읽는 것은, 씹지 않고 먹는 것과 같다.",
    author: "에드먼드 버크",
  },
  {
    quote: "예술은 인간에게 빵은 아니지만 적어도 포도주이다.",
    author: "쟌 파울",
  },
  {
    quote: "인간은 유순한 동물, 즉 모든 것에 익숙하게 되는 그러한 존재이다",
    author: "도스토예프스키",
  },
  {
    quote: "하기 싫어도 해라 감정은 사라지고, 결과는 남는다.",
    author: "월트 디즈니",
  },
  {
    quote: "소음으로 얻을 수 있는 것은 아무 것도 없다. 암탉이 달걀 하나 낳고서 혹성이나 낳은 것처럼 소리쳐 댄다.",
    author: "마크 트웨인",
  },
  {
    quote: "생각하는 바, 행동하는 바, 그리고 무엇을 먹는가 등의 습관에 따라 30~50년의 삶은 바뀐다.",
    author: "디팩 초프라",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스 다윈",
  },
  {
    quote: "감사하는 마음은 길들여 지는 것이다. 그러므로 아이들에게 감사하는 마음을 가지게 하기 위해서는 그것을 가르쳐 주어야만 한다.",
    author: "데일 카아네기",
  },
  {
    quote: "미래란 내일이 아니라 바로 오늘이다.",
    author: "오슬러",
  },
  {
    quote: "근면이 행운의 어머니이다.",
    author: "벤저민 디즈레일리",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor((Math.random()*10))]
function printTodayQuote(){
  quote.innerText = todayQuote.quote;
  author.innerText = todayQuote.author;
}
printTodayQuote();