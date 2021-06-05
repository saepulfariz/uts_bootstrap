const nomerHp = 6282216501151;

var send = document.getElementById('send');

send.addEventListener('click', function(){
  console.log('OK');
  var nama = document.getElementById('nama').value;
  var kelas = document.getElementById('kelas').value;
  var npm = document.getElementById('npm').value;
  var pesan = document.getElementById('pesan').value;

  window.open('http://api.whatsapp.com/send?phone=' + nomerHp + '&text=Nama%20%3A%20' + nama + '%0AKelas%20%3A%20' + kelas + '%0ANPM%20%3A%20' + npm +'%0APesan%20%3A%20' + pesan);
  // window.location.href = 'http://api.whatsapp.com/send?phone=' + nomerHp + '&text=Nama%20%3A%20' + nama + '&text=Kelas%20%3A%20' + kelas + '&text=NPM%20%3A%20' + npm +'%0APesan%20%3A%20' + pesan;
})