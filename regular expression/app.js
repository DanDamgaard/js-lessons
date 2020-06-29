let re;
re = /hello/i; // i = case insentitive
//re = /hello/g; // global seach

// console.log(re);

// console.log(re.source);

// exec() - return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() returns true or false
// const result = re.test('Hello');
// console.log(result);

//match() return array or null
// const str = 'hello tree';
// const result = str.match(re);

// console.log(result);

// search() returns index of first match if not returns -1
// const str = 'hello There';
// const result = str.search(re);
// console.log(result);

// replace() returns new string with some or all matches of a pattern
// const str = 'hello there';
// const newStr = str.replace(re, 'hi');
// console.log(newStr);