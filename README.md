ohmage 2.x js library
=========


Description
------------
A JavaScript library for interacting with the 2.x version of the ohmage server API.


Usage
-----
Include the `ohmage.js` or `ohmage.min.js` file with your project (along with the direct dependencies `jQuery` and `jquery.cookie`). Take a look at the sample app in the `examples/` directory for some inspiration!


Documentation
-------------
In general, the code is documented inline.  If you'd like to see details on how to interact with the ohmage 2.x api see details [here](https://github.com/ohmage/server/wiki/APIs-for-2.x-Top-Level-Entities).


Development
------------
If you'd like to add API calls or change code it'd be great if you could add a git pre-commit hook to minify the code.  Make sure uglifyjs is installed (`npm install -g uglifyjs`) and add this file:

```bash
localhost:ohmage.js$ cat .git/hooks/pre-commit
#!/bin/bash

# minify/compress ohmage.js
uglifyjs ohmage.js -m -c -o ohmage.min.js

# add to commit
git add ohmage.min.js

# thanks and exit
echo 'ohmage.js minified successfully'
exit
```

and then `chmod +x .git/hooks/pre-commit`.
