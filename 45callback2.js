//get 요청을 위한 비동기 함수 
const get = url =>{
  // function get(url) {}
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200 ) {
    // 서버의 응답을 반환한다. 
    return(JSON.parse(xhr.response));
  } 
    console.error(`${xhr.console} ${xhr.statusText}`);
    } 
  };
  // 2. id 가 1 인 post 를 취득 
  const response = get('https://jsonplaceholder.typicode.com/posts/1');
  console.log(response); //undefined
  //get 함수는 반환 문이 생략되었으므로 암묵적으로 undefined 를 반환한다.
