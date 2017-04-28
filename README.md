# PyNodeJS

Dear AWESOME users,

First, I have to say this module is not a complete Python language inside JavaScript(DUH), instead this module is some core build in function I think is useful Python have :P

@felixfong227

---

# Basic output
```python
# Python
print ("Howdy y'all")
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
pynodejs.print("Howdy y'all")
```

# List
```python
# Python
splitString = list('This is a string')
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
const splitString = pynodejs.list('This is a string')
```

# Read file
```python
# Python
fo = open('textfile.txt', 'r')
fileContent = fo.read()
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
const fileContent = pynodejs.read('textfile.txt')
```

# Write file
```python
# Python
fo = open('textfile.txt', 'w')
fo.write('pony!')
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
pynodejs.write('textfile.txt', 'pony!')
```

# Typing checking
```python
# Python
isStringRight = isinstance('String', 'char');
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
pynodejs.isinstance('String', 'char')
```

# Length
```python
# Python
stringLength = len('This is a string')
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
const stringLength = pynodejs.len('This is a string')
```

# Round
```python
# Python
rounded = round(3.14)
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
const rounded = pynodejs.round(3.14)
```

# MD5
```python
# Python
m = md5.new()
m.update("Howdy")
 m.hax()
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
const encrypttion = pynodejs.encrypt.md5('Howdy')
```

# SHA224
```python
# Python
m = md5.new()
m.update("Howdy")
 m.hax()
```

```javascript
// JavaScript
const pynodejs = require('pynodejs')
const encrypttion = pynodejs.encrypt.sha224('Howdy')
```