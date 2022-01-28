let computer = document.querySelector('#computer');
let count = 1;

let interval = setInterval(function(){
  computer.src = `./img/img${count % 3 + 1}.jpg`;
  count++;
}, 100);  //가위 보 바위
//변수를 설정해 주는 이유는 clearInterval을 사용하기 위해서?


const rock = document.querySelector('#rock');
const scissor = document.querySelector('#scissor');
const paper = document.querySelector('#paper');
const rspTarget = [rock,scissor,paper];

function rsp(event){
  console.log('rsp',interval);
  clearInterval(interval);
  const msg1 = '비겼습니다';
  const msg2 = '플레이어가 승리했습니다';
  const msg3 = '컴퓨터가 승리했습니다';
  const selected = event.target.textContent;
  let i = count % 3;
  if (i === 2) { //rock(컴퓨터)
    if (selected === '바위') {
      result.textContent = msg1;
    } else if (selected === '보') {
      result.textContent = msg2;
    } else if (selected === '가위') {
      result.textContent = msg3;
    }
  } else if (i === 1) {  //가위
    if (selected === '바위') {
      result.textContent = msg2;
    } else if (selected === '보') {
      result.textContent = msg3;
    } else if (selected === '가위') {
      result.textContent = msg1;
    }
  } else if (i === 0) {  //보
    if (selected === '바위') {
      result.textContent = msg3;
    } else if (selected === '보') {
      result.textContent = msg1;
    } else if (selected === '가위') {
      result.textContent = msg2;
    }
  }
}

for (let i = 0; i < rspTarget.length; i++) {
  rspTarget[i].addEventListener('click', rsp);
}

const replay = document.querySelector('#replay');

replay.addEventListener('click',function(){
  result.textContent = '';
  count = 1;
  interval = setInterval(function(){
    computer.src = `./img/img${count % 3 + 1}.jpg`;
    count++;
  }, 100);
  console.log('replay',interval);
});