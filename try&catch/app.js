const user = {email: 'dt@email.com'};

try {
  // make a refrence error
  //myfunction();

  //make a typeError
  //null.myfunction();

  // make a syntaxError
  // eval('Hello world');

  // make a URIError
  //decodeURIComponent('%');

  if(!user.name){
    //throw 'user has no name';
    throw new SyntaxError('user has no name')
  }

} catch (error) {
  console.log(error.message);
  //log error
  /* console.log(error.message);
  console.log(error.name);
  console.log(error instanceof ReferenceError); */

} finally{
  console.log('finally runs no matter the result')
}

console.log('program continues')