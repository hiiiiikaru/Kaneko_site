document.querySelector('#targetID').addEventListener("click", function(){
  const element = document.querySelector('#targetID');
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  const succeeded = document.execCommand('copy');
  if (succeeded) {
      alert('コピーが成功しました！');
  } else {
      alert('コピーが失敗しました!');
  }
  selection.removeAllRanges();
});













// const address = $('#mail').attr('href');
// console.log(address)
//
//  mail.onclick = function(){
//    if(execCopy(textarea.value)){
//      alert('コピーできました');
//    }
//    else {
//      alert('このブラウザでは対応していません');
//    }
//  };


// $("#mail").on("click",function(){
//  document.execCommand('copy');
//  return false
// });


// function execCopy(string){
//   var temp = document.createElement('div');
//   temp.appendChild(document.createElement('pre')).textContent = string;
//   var s = temp.style;
//   s.position = 'fixed';
//   s.left = '-100%';
//   document.body.appendChild(temp);
//   document.getSelection().selectAllChildren(temp);
//   var result = document.execCommand('copy');
//   document.body.removeChild(temp);
//   return result;
// }
//
// var textarea = document.getElementById('textarea');
// var button = document.getElementById('button');
//
// button.onclick = function(){
//   if(execCopy(textarea.value)){
//     alert('コピーできました');
//   }
//   else {
//     alert('このブラウザでは対応していません');
//   }
// };
//
//
// // var textarea = document.getElementById('7kane.kohi.karu11@gmail.com');
// // var button = document.getElementById('.mail');
// //
// // button.onclick = function(){
// //   if(execCopy(textarea.value)){
// //     alert('コピーできました');
// //   }
// //   else {
// //     alert('このブラウザでは対応していません');
// //   }
// // };
