# First non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

### US-1
As a writer
I want to check which character is non repeating in my 1 char text
So that I will know which char will be used less

#### UAT-1.1
Given the text "a"
When check non repeating chars
Then the result is "a"

#### UAT-1.2
Given the text "z"
When check non repeating chars
Then the result is "z"

### US-2
As a writer
I want to check which character is first non repeating in my 2 char text
So that I will know which char will be used less

#### UAT-2.1
Given the text "ab"
When check non repeating chars
Then the result is "a"

#### UAT-2.2
Given the text "aa"
When check non repeating chars
Then the result is ""

### US-3
As a writer
I want to check which character is first non repeating in my 3 char text
So that I will know which char will be used less

#### UAT-3.1
Given the text "aba"
When check non repeating chars
Then the result is "b"

#### UAT-3.2
Given the text "aaa"
When check non repeating chars
Then the result is ""

#### UAT-3.3
Given the text "aac"
When check non repeating chars
Then the result is "c"