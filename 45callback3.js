let todos;

//get 요청을 위한 비동기 함수 
const get = url =>{
  // function get(url) {}
  // 비동기 함수 get 이 호출되면 
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200 ) {
    // 1.서버의 응답을 상위 스코프 변수에 할당한다 . 
    todos = JSON.parse(xhr.response);
    console.log(todos); // 호출한 url의 모든 정보를 가져옴 
  } else {
    console.error(`${xhr.console} ${xhr.statusText}`);
    console.log(todos);
    } 
  };
};
  //  id 가 1 인 post 를 취득 
get('https://jsonplaceholder.typicode.com/posts/1');
//   console.log(todos); //2 .undefined
//전역변수 todos 에 응답 결과가 할당되기 이전이다. 

//  1. 문서 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고 
//  2. response / return 
//  3. 상위 스코프의 변수에도 할당할수없다
