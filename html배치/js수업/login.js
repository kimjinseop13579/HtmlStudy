// id가 loginBt인 버튼 태그를 클릭하면 singIn.html 이동

//1. 태그에 이벤트 발생시 동작할 함수 연결 - 이벤트 등록이라고한다
//  (addEventListener)

//id가 loginBt인 태그 가져오기 - document.getElementById()

//window.onload=function(){}
//(function(){}) html 구조를 완벽하게 파악이 안될수있음
// 위의 두개가 같음
window.onload = function () {
  let bt = document.getElementById("loginBt");
  console.log(bt); //개발자도구의 콘솔(결과화면) 에출력
  //태그(객체)를 가져왔으면 어떤 이벤트에 대해 등록할것인가
  // .addEventListener("이벤트면", 함수명 또는 익명함수)
  bt.addEventListener("click", 로그인페이지);
}

function 로그인페이지() {
  //singIn.html
  location.href = "signIn.html";
}
