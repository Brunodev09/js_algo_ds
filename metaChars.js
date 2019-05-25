let re;

re = /^h/i; // ^ --> must start with
re = /d$/i; // $ --> must end with
re = /^hello$/i;
re = /h.llo/i; // . --> matches any char
re = /h*llo/i; // * --> matches any char 0 or N times

re = /gre?a?y/i; // --> this makes "a" and "e" optional chars
re = /gre?a?y\?/i; // --> escape chars, now "?" is included in the string

// Brackets []
re = /gr[ae]y/i; // Must be "a" or "e"
re = /^[GF]ray/; // Must start with G or F
re = /[A-Z]ray/; // Matches a range of chars from A to Z, uppercase
re = /[a-z]ray/; // Matches a range of chars from a to z, lowercase
re = /[A-Za-z]ray/; // Matches a range of chars from a to z, lowercase and uppercase
re = /[1-9]/ // Matches any digits


// Braces {} - Quantifiers
re = /He{2}lo/i; // Specifying two 'l's. It looks for the chars AFTER the quantifier
re = /He{2,4}lo/i; // Can occur from 2-4 l's
re = /He{2,}lo/i; // Must occur at least 2 times


// Parenthesis
re = /([0-9]x){3}/ // Gets digit+x 3 times

// Shorthand Character Classes
re = /\w/; // One word char - alphanumeric or _
re = /\w+/; // One or more word chars
re = /\W/; // Non word char
re = /\d/; // Match any digit
re = /\d+/; // Match any digit (0 or more)
re = /\D/; // Match non digits
re = /\s/; // Match whitespace space char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary, matches only the word Hell not words that contains it, like Hello

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y



const str = 'Hello';

function regExpTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

regExpTest(re, str);