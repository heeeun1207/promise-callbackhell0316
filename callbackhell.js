//get 요청을 위한 비동기 함수 
const get = (url,callback) =>{
  // function get(url) {}
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200 ) {
    // 서버의 응답을 반환한다. 
    callback(JSON.parse(xhr.response));
  } else{
    console.error(`${xhr.console} ${xhr.statusText}`);
    } 
  };
};
  // 2. id 가 1 인 post 를 취득 
  const url=('https://jsonplaceholder.typicode.com');
  // console.log(response); //undefined
  get(`${url}/posts/10`, ({id}) => {
    console.log(id);  // 1 ,2,3 ...10 
    get(`${url}/users/${id}`, userInfo => {
      console.log(userInfo)});
      })  // 1 ...10 

