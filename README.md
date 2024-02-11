\D: This is a special character class in regex that matches any non-digit character.
/g: This is a flag indicating that the search should replace all occurrences of the pattern in the string, not just the first one.
When combined, \D matches any non-digit character, and /g ensures that all such characters are replaced with an empty string, effectively removing them from the string. This regex pattern helps clean up the input string by removing any non-digit characters, leaving only the digits for further processing.
 
