# 说明
这是保险前端开发小组的react学习框架

# 开启服务器的方法
在项目下打开git命令行，然后输入：
```
npm install
```
等待所需的依赖安装完毕后，在输入：
```
npm run start
```
``npm run start``仅仅是开启了生产环境的代码服务器，但是我们还需要开启一个后台服务器来开启异步环境。在server文件夹下打开git命令行，然后输入：
```
node app
```
我们的环境就正式搭建完成了，所需要的就是在浏览器上打开localhost:3000的网页。

## 服务器端使用supervisor
有时候我们需要在服务器端修改一些东西，然后进行调试，但是每次都需要关闭服务器然后再重新启动很麻烦，效率比较低，我们可以安装一个叫supervisor的工具提交效率，不过注意的是需要安装在nodejs全局
```
npm i supervisor -g
```
启动服务器的时候我们就可以使用supervisor的命令启动，每次修改后都supervisor都会帮我们自动重启服务器。
```
supervisor app
```

# 简单的git教程
首先将项目拷到本地
```
git clone https://github.com/tcbaoxian/react-stage.git
```
然后切到文件夹中
```
cd react-stage
```
一般开发都在develop分支开发，master是线上的分支，所以我们需要切换到develop分支：
```
git checkout -b develop origin/develop
```
当开发完成后我们需要将代码上传：
```
git add .
git commit -m 'descriptions'
git push
```
