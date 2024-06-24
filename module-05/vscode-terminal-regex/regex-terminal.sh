find . -name *.test.js
find . -name *.test.js -not -path "./node_modules/*"
find . -name *.js -not -path "./node_modules/*"

npm i -g ipt
find . -name *.js -not -path "./node_modules/*" | ipt

CONTENT='use strict;'
find . -name *.js -not -path "./node_modules/*" \
    | xargs -I '{file}' sed -i "" -e '1s\^/\'$CONTENT'\
/g' ipt -o \

1s = first line
^-> first column
replaced by $CONTENT
break the line to  create a new line

xargs = execute command for each line
sed = replace content in file
