function buat_login() {
  var elem = document.getElementById('X');
  elem.parentElement.removeChild(elem);
  var P = document.createElement('p');
  P.className = 'tulisan_login';
  P.innerHTML = 'SILAHKAN MENDAFTAR';
  var element = document.getElementsByTagName('div')[0];
  element.appendChild(P);
  var form = document.createElement('FORM');
  element.appendChild(form);
  var label = document.createElement('label');
  label.innerHTML = 'Nama User';
  form.appendChild(label);
  var input_user = document.createElement('input');
  input_user.type = 'text';
  input_user.placeholder = 'Nama User...'
  input_user.name = 'Username';
  input_user.className = 'form_login';
  form.appendChild(input_user);
  var label2 = document.createElement('label2');
  label2.innerHTML = 'No Handphone';
  form.appendChild(label2);
  var no_handphone = document.createElement('input');
  no_handphone.type = 'number';
  no_handphone.placeholder = 'No Handphone...'
  no_handphone.name = 'no_handphone';
  no_handphone.className = 'form_login';
  form.appendChild(no_handphone);
  var label3 = document.createElement('label3');
  label3.innerHTML = 'UserName';
  form.appendChild(label3);
  var username = document.createElement('input');
  username.type = 'email';
  username.placeholder = 'Username atau Email...'
  username.name = 'username';
  username.className = 'form_login';
  form.appendChild(username );
  var label4 = document.createElement('label4');
  label4.innerHTML = 'Password';
  form.appendChild(label4);
  var pass = document.createElement('input');
  pass.type = 'Password';
  pass.placeholder = 'Password'
  pass.name = 'Password';
  pass.className = 'form_login';
  form.appendChild(pass );
  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.value ='DAFTAR SEKARANG';
  submit.className = 'tombol_login';
  form.appendChild(submit)

}
