const divElement = document.getElementById('myDiv');
divElement.addEventListener('mousemove', function (event) {
    console.log('Mouse is moving:', event.pageX, event.pageY);
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    const username = form.elements['username'].value;
    const email = form.elements['email'].value;
    console.log('Username:', username);
    console.log('Email:', email);
    // 这里可以添加发送数据到服务器的代码
});

form.addEventListener('reset', function () {
    console.log('Form has been reset.');
});

const input = document.getElementById('myInput');

input.addEventListener('focus', function () {
    console.log('Input is focused.');
});

input.addEventListener('blur', function () {
    console.log('Input lost focus.');
});

input.addEventListener('focusin', function () {
    console.log('Input is about to be focused.');
});

input.addEventListener('focusout', function () {
    console.log('Input is about to lose focus.');
});

const inputField = document.getElementById('myInput');
inputField.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
});

