let search = document.getElementById("search");

search.addEventListener('click', function(){
    // 새로운 브라우저 열기
    /*window.open("주소",대상,옵션);
      괄호안에 첫번째로 주소 두번째로 어디에 띄울건지 대상을 정해야함 세번째로 크기 와 이런저런 옵션을
      지정해줌 이렇게 총 3개를 넣어줘야함
      
      새창옵션
      크기 : width, height
      위치 : top, left
      창크기 조절가능 여부 : resizable = yes, no
      스크롤바 표시 : scroolbars = yes, no
      툴바 표시 : tollbat = yes, no
      주소창 표시여부 : location = yes, no*/

      //새창 띄우기 전에 이름 입력했는지 확인
      if(document.querySelector("#name").value == ''){
        alert("이름을 입력하세요");
        return;
      }

      
    window.open("child.html","_blank","width =500,height=700,top=100,left=400");


});