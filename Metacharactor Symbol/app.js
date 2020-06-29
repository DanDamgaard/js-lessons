let re;
// literal charactor
re = /hello/;
re = /hello/i;

//metacharactor symbols
re = /^h/i;  // must start with
re = /d$/i;  // must ends with
re = /^hello$/i;  // must start and end with
re = /^h.llo/i;  // . matches any ONE charactor
re = /h*llo/;  // * matches any charactor 0 or more times

re = /gre?a?y/i; // optional charactor
re = /gre?a?y\?/i; // escape charactor


//brackes [] charactor sets
re = /gr[ea]y/i; // must be a or e
re = /[gf]rey/i; // must be g or f
re = /[^gf]rey/i; // matches anything but g or f
re = /[A-Z]rey/; // matches any uppercase letter
re = /[a-z]rey/; // matches any lowercase letter
re = /[A-Za-z]rey/; // matches any uppercase letter and lowercase letter
re = /[0-9]rey/; // matches any digit

// braces {} quantifiers
re = /hel{2}o/i; // must repeat specific charactors 2 times
re = /hel{2,4}o/i; // must repeat specific charactors 2-4 times
re = /hel{2,}o/i; // must repeat specific charactors at least 2 times

// parentheses () grouping
re = /([0-9]x){3}/; // link a group or digit together

//shothand charactor classes
re = /\w/; // word charactor alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // non-word charactor
re = /\d/; // match any digit
re = /\d+/; // match one or more digit
re = /\D/; // match any non-digit
re = /\s/; // match whitespace char
re = /\S/; // match non-whitespace char
re = /Hell\b/i; // word boundary

// assertions
re = /x(?=y)/; // match only if x is followed by y
re = /x(?!y)/; // match only if x is not followed by y

//string to log
const str = 'x';

//log results
const result = re.exec(str);
console.log(result);



function reTest(re, test){
 if(re.test(str)){
   console.log(`${str} Matches ${re.source}`);
 } else {
  console.log(`${str} does not matchs ${re.source}`);
 }
}

reTest(re,str);