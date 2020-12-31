# 美图秀秀拼接图片插件

## 导入：
在html中直接导入js文档
```
    <script type="text/javascript" src="js/Switch.js"></script>
```

## 接口：
> **config:** 传入参数用来控制插件  
>    
>> **可传入参数(options)：**   
>>   
>> **json:** 传入整个json文件    
>> **height:** 控制整个插件界面的宽度。字符串，且需要带单位如 20px / 100%    
>> **width:** 控制整个插件界面的高度。字符串，且需要带单位如 20px / 100%    
>> **left:** 拼图界面距离左边按钮栏右边界的距离。字符串，且需要带单位如 20px / 100%    
>> **top:** 拼图界面距离浏览器上边界的距离。字符串，且需要带单位如 20px / 100%   
>> **scale:** 拼图界面整体放大或缩小，默认为1   
>> **leftWidth:** 左边按钮栏的宽度。字符串，且需要带单位如 20px / 100%   
>> **imgSrc:** 外界传入图片数据。字符串   
>>   
>> **例如**   
>>   
>>   ```
>>    Switch.config({
>>       json: jData,
>>       height: '100%',
>>       width: '100%',
>>       left: '20px',
>>       top: '20px',
>>       scale: 1,
>>       leftWidth: '13%',
>>       imgSrc: '',//外界传入图片
>>   })
>>   ```   
> **init:** 传入dom或者dom的ID来初始化插件   
>
>   ```
>   Switch.init('#init');
>   ```   
>    
> **destroy:** 传入dom或者dom的ID来摧毁插件  
>   
>   ```
>   Switch.destroy('#init');
>   ```   
>   
>   
> **img64:**  返回当前拼图的base64数据，是一个异步方法 
>   
>   ```
>   Switch.img64().then(res =>{ //异步方法
>               console.log(res)
>           })   
>   ```   
>   
> **reload:** 重加载界面，可传入图片链接用于初始化
>   
>   ```
>   Switch.reload('./img/cat3.jpg')
>   ```  
>   

## JSON文件的格式
已经将未用到的json数据删除，实际json文件中还存在，以下数据皆需传入。   
```
 {
    "id": "1_1",  //type_id
    "src": "./Template/Template1.png",  //模版上的图片
    "direction":"upDown", //控制拼图模块的定位方向，模块定位为相对定位。 upDown为垂直拼接，leftRight为水平拼接。
    "type": "1", //type 为1时，是普通拼图。为2时，是海报拼图。
    "number": 3,  //有多少拼接模块。与children的数据个数对应。
    "width":580, //整个拼图模块的宽度
    "height":390,//整个拼图模块的高度
    "children": [   //left,top为定位。width,height为宽度高度。
        {
            "left": 0,
            "top": 0,
            "width": 580,
            "height": 130,
        },
        {
            "left": 0,
            "top": 0,
            "width": 580,
            "height": 130,
        },
        {
            "left": 0,
            "top": 0,
            "width": 580,
            "height": 130,
        }
    ]
},

```
