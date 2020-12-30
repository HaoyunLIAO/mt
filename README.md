# 美图秀秀拼接图片插件

## 导入：
在html中直接导入js文档
```
    <script type="text/javascript" src="js/Switch.js"></script>
```

## 接口：
> config:传入参数用来控制插件  

>> **可传入参数(options)** 
>>> **json:** 传入整个json文件
>>> **height:** 控制整个插件界面的宽度。字符串，且需要带单位如 20px / 100%
>>> **width:** 控制整个插件界面的高度。字符串，且需要带单位如 20px / 100%
>>> **left:** 拼图界面距离左边按钮栏右边界的距离。字符串，且需要带单位如 20px / 100%
>>> **top:** 拼图界面距离浏览器上边界的距离。字符串，且需要带单位如 20px / 100%
>>> **scale:** 拼图界面整体放大或缩小，默认为1
>>> **leftWidth:** 左边按钮栏的宽度。字符串，且需要带单位如 20px / 100%
>>> **imgSrc:** 外界传入图片数据。字符串  

>> 例如
```
 Switch.config({
    json: jData,
    height: '100%',
    width: '100%',
    left: '20px',
    top: '20px',
    scale: 1,
    leftWidth: '13%',
    imgSrc: '',//外界传入图片
})
```



init   传入dom或者dom的ID来初始化插件
destroy  传入dom或者dom的ID来摧毁插件
img64    返回当前拼图的base64
reload
