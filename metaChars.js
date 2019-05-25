let re;

re = /^h/i; // ^ --> must start with
re = /d$/i; // $ --> must end with
re = /^hello$/i;
re = /h.llo/i; // . --> matches any char
re = /h*llo/i; // * --> matches any char 0 or N times

re = /gre?a?y/i; // --> this makes "a" and "e" optional chars
re = /gre?a?y\?/i; // --> escape chars, now "?" is included in the string


const str = 'grxy';

function regExpTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

regExpTest(re, str);