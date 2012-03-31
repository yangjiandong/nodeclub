# nodeclub

## 2012.03.31

1. git more remote
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

2. node.js begin

https://github.com/ManuelKiessling/NodeBeginnerBook   

3. vim jsbeautify

   .vim/plugin/jsbeautify.vim
   
   vim .vimrc # 設定 <leader> 鍵值 (若已經有設好 <leader> 鍵, 此步驟請跳過)
   let mapleader=","

   use format: 
   ,fo

4. vim remove ^M 有效方法
   http://www.oualline.com/vim-cook.html
   :1,$s/^M//
   :1,$s/{Ctrl+V}{Ctrl+M}//{Enter}






