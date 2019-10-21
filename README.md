# 源码分析

## 注释规范

```javascript
const ReactDOM = {
    //...
    /**
     * React 提供的顶层 DOM 渲染 API，用于将 element 渲染到 container 中
     * 传入的 callback 会在渲染完成后调用  <---- 这一段是对方法做了什么进行了描述
     **/
    render(
        element: React$Element<any>,
        container: DOMContainer,
        callback: ?Function,
    ) {
        invariant(
        isValidContainer(container),
        'Target container is not a DOM element.',
        );
        if (__DEV__) {
        warningWithoutStack(
            !container._reactHasBeenPassedToCreateRootDEV,
            'You are calling ReactDOM.render() on a container that was previously ' +
            'passed to ReactDOM.%s(). This is not supported. ' +
            'Did you mean to call root.render(element)?',
            enableStableConcurrentModeAPIs ? 'createRoot' : 'unstable_createRoot',
        );
        }
        // 直接调用 legacyRenderSubtreeIntoContainer 方法
        // 传入两个固定的参数  <---- 这一段是对语句进行的描述
        return legacyRenderSubtreeIntoContainer(
        null,
        element,
        container,
        false,
        callback,
        );
    },
    //...
}
```
