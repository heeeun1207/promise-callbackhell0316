//get 요청을 위한 비동기 함수 
const get =  (url , successCallback, failureCallback) => {
  // function get(url,successCallback,failureCallback){}
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  
  xhr.onload = () => {
    if (xhr.status === 200 ) {
      // 서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속처리를 한다. 
      successCallback(JSON.parse(xhr.response));
    } else {
      //에러 정보를 콜백함수에 인수로 전달하면서 호출하여 에러처리를한다 
      failureCallback(xhr.status);
      }
    }; 
};
  // 2. id 가 1 인 post 를 취득 
  // 서버의 응답에 대한 후속 처리를 위한 콜백 함수를 비동기 함수인 get 에게 전달한다 . 
 get('https://jsonplaceholder.typicode.com/posts/1', console.log, console.error);
