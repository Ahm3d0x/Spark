let boxMasg = document.querySelector('.box-masg');
let messageInput = document.getElementById('message-input');
let sendButton = document.getElementById('send-button');
let stat = document.querySelector('.stat');
let progres = document.querySelector('.progres');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let message;
let last_ask;
let last_res; 
let spark_respond;
let i;

messageInput.focus();
function checkInternetConnection() {
  if (navigator.onLine) {
    stat.innerHTML = 'online'
    led1()
    function runPythonScript() {
      // Create an XMLHttpRequest object
      var xhr = new XMLHttpRequest();
  
      // Specify the Python script's path on the server
      var scriptPath = 'spark.py';
  
      // Open a GET request to the Python script
      xhr.open('GET', scriptPath, true);
  
      // Set the callback function to handle the response
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
              // The Python script has been executed successfully
              console.log('Python script executed successfully.');
          }
      };
  
      // Send the request
      xhr.send();
  }
  runPythonScript()
  } else {
    stat.innerHTML = 'offline';
    stat.style.color = 'red';
    p1.style.color = 'red';
    p2.style.color = 'red';
    p3.style.color = 'red';
    p4.style.color = 'red';
    p5.style.color = 'red';

}
}
checkInternetConnection()

function sendMessage() {
  message = messageInput.value.trim();
  last_ask = message;
  if (message !== '') {
    stat.innerHTML = 'sind data...'

    led2()
    myAsk(message);
    runApp(message);
    messageInput.readOnly = true;
    messageInput.value = '';

  }
}

sendButton.addEventListener('click', () => {
  sendMessage();
});

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

function myAsk(message) {
  boxMasg.insertAdjacentHTML('beforeend',
    `<div class="me">${message}</div>`
  );
}

function sparkRes(respond) {
  boxMasg.insertAdjacentHTML('beforeend',
    `<div class="spark">${respond}</div>`
  );
}
const jsonFilePath = 'data.json';

function runApp(question) {
  const jsonData = JSON.stringify({ "ask": question });
  const serverAddress = 'http://127.0.0.1:5000';
fetch(`${serverAddress}/run-python-script`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: jsonData,
})
fetch(jsonFilePath)
.then(response => {
  if (!response.ok) {
    throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
  }
  return response.json();
}).then(data => {
  
  if ( data.spark != null || data.spark != '') {
    last_res = data.spark;
    console.log(last_res)

  } else {
     last_res = null;
     console.log('no old responses')
  }}).catch(error => {console.error('Error fetching JSON:', error);})
  i=0
getting_Response()
}

function getting_Response(){
    
  if(i == 1){ led3();stat.innerHTML = 'get data...'}
  if(i == 3){ led4()}
  if (i == 9){  runApp(last_ask)}
  setTimeout(() => {
  console.log(i);
  fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }).then(data => {
    if (data.spark != last_res){
        led5()
        spark_respond = data.spark;
        last_ask = spark_respond;
        sparkRes(spark_respond)
        messageInput.readOnly = false;
        setTimeout(() => {led1();stat.innerHTML = 'online';}, 1000);
        messageInput.focus()
    }else{
        getting_Response()
      }
  }).catch(error => {
    console.error('Error fetching JSON:', error);
  })}, 1500);
  i++

}




function led1(){
   p1.style.color = '#7b8080';
   p2.style.color = '#7b8080';
   p3.style.color = '#7b8080';
   p4.style.color = '#7b8080';
   p5.style.color = '#00ffd9';
}
function led2(){   
   p1.style.color = '#7b8080';   
   p2.style.color = '#7b8080';
   p3.style.color = '#7b8080';
   p4.style.color = '#00ffd9';
   p5.style.color = '#00ffd9';
}
function led3(){
  p1.style.color = '#7b8080';
  p2.style.color = '#7b8080';
  p3.style.color = '#00ffd9';
  p4.style.color = '#00ffd9';
  p5.style.color = '#00ffd9';

}
function led4(){
  p1.style.color = '#7b8080';
  p2.style.color = '#00ffd9';
  p3.style.color = '#00ffd9';
  p4.style.color = '#00ffd9';
  p5.style.color = '#00ffd9';
}

function led5(){
  p1.style.color = '#00ffd9';
  p2.style.color = '#00ffd9';
  p3.style.color = '#00ffd9';
  p4.style.color = '#00ffd9';
  p5.style.color = '#00ffd9';
}

