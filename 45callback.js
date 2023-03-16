// get 요청을 위한 비동기 함수 
// 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 
//종료된다 . 
const get = url =>{
  // function get(url) {}
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200 ) {
    // 서버의 응답에 콘솔에 출력한다 .
    console.log(JSON.parse(xhr.response));
  } else {
    console.error(`${xhr.console} ${xhr.statusText}`);
    } 
  };
};
//setTimeout 함수는 비동기 함수다 . 
//비동기 함수인 이유는 콜백 함수의 호출이 비동기로 동작하기 때문이다 . 
//
//id 가 1 인 post 를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
// console.log(get);
// "userId" : 1,
// "id" : 1,
// "title": "sunt aut fecere..."
// "body" : "quia at suscipit"
let  g =0;
// 비동기 함수인 setTimeout 함수는 콜백함수의 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당한다.
setTimeout(()=> {g= 100
console.log(g)}
,0)
// console.log(g)








