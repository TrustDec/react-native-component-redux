### 功能集合
- [x] 热更新 code-push
- [x] carousel 
- [x] redux 案例
- [x] react-navigation 案例
- [x] Android 硬更新
- [x] iOS 硬更新
- [ ] native 层

#### 案例效果图
<center class="half">
    <img src="./assets/new_login.jpg" width="300px"/>
    <img src="./assets/new_list.jpg" width="300px"/>
    <img src="./assets/new_image.jpg" width="300px"/>
</center>

<figure>
   <img src="./assets/new_info.jpg" width="300px"/>
</figure> 

### 快捷地址：
> [immutable doc][immutable]

> [immutable blog][immutable-blog]

> [react-navigation doc][react-navigation]

> [React Native Express ][React-Native-Express]

> [react-navigation-redux-helpers doc][react-navigation-redux-helpers]

> [react-navigation-redux error][new-nav-redux]

<img src="./assets/tab-navigator.png"/>

### 介绍 Redux 中间件（Middleware）
还记得Redux的GIF嘛

<img src="./assets/redux.gif" width="550px"/>

我们需要稍微改变一下

<img src="./assets/change-redux.gif" width="550px"/>

正如你所看到的，这里还有一个概念：Middleware
#### 什么是Middleware
从[文档][Middleware]中看到：

```
    It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
```

简而言之，这是一个函数，在Action到达Reducer之前，将使用Action调用该函数。

在这个功能中，你可以让Action继续前进，你可以阻止它继续前进，或者你可以改变它，并把它发送给下一个。


[new-nav-redux]:http://blog.csdn.net/qq_33323251/article/details/79430398
[immutable-blog]: https://github.com/camsong/blog/issues/3
[Middleware]: http://redux.js.org/docs/advanced/Middleware.html
[immutable]: https://facebook.github.io/immutable-js/docs/#/
[react-navigation]: https://reactnavigation.org/docs/getting-started.html
[React-Native-Express]: http://www.reactnativeexpress.com/
[react-navigation-redux-helpers]:https://github.com/react-navigation/react-navigation-redux-helpers


