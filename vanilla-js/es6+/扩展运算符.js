// ES9 - ES9

function connect({host, port, ...user}) {
  console.log('host: ', host);
  console.log('port: ', port);
  console.log('user: ', user);
}

connect({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  pass: 'roott',
  type: 'master'
})