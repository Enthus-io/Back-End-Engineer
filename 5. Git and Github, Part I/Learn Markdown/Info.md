# Syntax guide
Here’s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.

## Headers
# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
_You **can** combine them_

## Lists
Unordered
* Item 1
* Item 2
  * Item 2a
  * Item 2b

Ordered
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Images
![GitHub Logo](/images/logo.png)
Format: ![Text](url)

## Links
http://github.com - automatic!
[Text](url)

## Blockquotes
As Kanye West said:
> We're living the future so
> the present is our past.


## Inline code
I think you should use an
`<addr>` element here instead.


# GitHub Flavored Markdown


## Syntax highlighting
Some basic Git commands are:
```
git status
git add
git commit
```
```javascript
let s = "JavaScript syntax highlighting";
console.log(s);
```

## Task Lists
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

## Tables
You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## SHA references
Any reference to a commit’s SHA-1 hash will be automatically converted into a link to that commit on GitHub.
16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac

## Issue references within a repository
Any number that refers to an Issue or Pull Request will be automatically converted into a link.

#1
mojombo#1
mojombo/github-flavored-markdown#1


## Username @mentions
Typing an @ symbol, followed by a username, will notify that person to come and view the comment. This is called an “@mention”

## Strikethrough
~~this~~

