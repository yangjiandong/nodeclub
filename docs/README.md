# nodeclub

## 2012.04.01

* vim 已设置tab为2个space,jsbeautify后强制为2 space

vim/plugin/jsbeautify.vim

    "let s:opt_indent_size = 1
    "let s:opt_indent_char = "\t"
    let s:opt_indent_size = 2
    let s:opt_indent_char = " "

* node-inspector debug

npm 安装

```
$ npm install -g node-inspector
```

然后需要通过浏览器连接到node-inspector，需要启动inspector服务

```
$ node-inspector &
```

最后以debug模式运行node.js应用

```
$ node --debug app.js
```

通过URL http://127.0.0.1:8080/debug?port=5858 就可以进行调试了。

Node 以上方式结合了node-js-development-mode.js,不是很好,只能看到node-js-development-mode.js,
不如直接采用sys.debug().另一个方案tracer

```
$ npm -g install tracer
var logger = require('tracer').console();
logger.log('hello');
```

* mongodb

Mongodb实战：MapReduce计算更新频率,mongodb.txt


## 2012.03.31

* git more remote

http://f2e.us/wiki/git-remote.html#!/

    nodeclub,
    git branch yang
    git co yang
    --github create repo
    git remote add yang git@github.com:yangjiandong/nodeclub.git
    git push -u yang yang

    git remote rename yang yh
    --远程更新
    git pull yh
    or
    git fetch yh

    git merge yh/yang

* node.js begin

https://github.com/ManuelKiessling/NodeBeginnerBook

* vim jsbeautify

.vim/plugin/jsbeautify.vim

    vim .vimrc # 設定 <leader> 鍵值 (若已經有設好 <leader> 鍵, 此步驟請跳過)
    let mapleader=","
    use format:
    ,fo

* vim remove ^M 有效方法

http://www.oualline.com/vim-cook.html

    :1,$s/^M//
    :1,$s/{Ctrl+V}{Ctrl+M}//{Enter}

* nodebookcode

    npm install formidable
    p69


