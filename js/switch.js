(function () {
    document.write("<script type='text/javascript' src='js/dnd.js'></script>");
    document.write("<script type='text/javascript' src='js/html2canvas.js'></script>");

    //默认参数
    var options = {
        width: '1440px',
        height: '766px',
        //模板 距离左上角的距离
        left: '400px',
        top: '50px',
        widthPic: 0,
        heightPic: 0,
        json: [],
        upload: 0,//0是多个上传（下方） 1是双击图片单个上传
        //图片交换方法的数据
        fromDom: null,
        toDom: null,
        lastDom: null,
        scale:1,
        leftWidth:'15%',//左边模版按钮的宽度
        imgSrc :'',
    }

    var generate = function (data) {
        //初始化插件
        var Drag = dnd.Drag
        var Drop = dnd.Drop
        //根据json记录
        this.number = data.number
        this.direction = data.direction//最外层的direction 
        this.children = data.children
        this.index = 0;
        if (data.type === '2') {//海报时插入背景图
            var imgDom = document.createElement('img')
            imgDom.src = data.src
            imgDom.style.width = data.width + "px"
            imgDom.style.height = data.height + "px"
            imgDom.style.position = 'absolute'
            // imgDom.setAttribute("crossorigin",'anonymous')
            document.getElementById('root').appendChild(imgDom)
        } else if (data.type === '1') {
            document.getElementById('root').style.backgroundImage = null
            document.getElementById('root').style.width = null
            document.getElementById('root').style.height = null
        }
        //初始化 移动方向及个数
        this.init = function () {
            //目前模板只允许添加4个板块拼图
            var move1 = new move;
            var move2 = new move;
            var move3 = new move;
            var move4 = new move;
            var root = document.getElementById('root')
            root.style.display = 'flex'
            root.style.position = 'relative'
            root.style.left = options.left
            root.style.top = options.top
            let upload = options.upload
            switch (this.number) {
                case 1:
                    var box1 = document.createElement("div")
                    var fa1 = document.createElement("div")
                    box1.className = 'box'
                    fa1.className = 'droppable-box drop1 father'
                    fa1.style.backgroundColor = 'cornflowerblue'
                    fa1.appendChild(box1)
                    document.getElementById('root').appendChild(fa1)
                    fa1.style.left = this.children[0].left + 'px'
                    fa1.style.top = this.children[0].top + 'px'
                    fa1.style.width = this.children[0].width + 'px'
                    fa1.style.height = this.children[0].height + 'px'
                    if (this.direction === 'upDown') {
                        move1.move(fa1, box1);
                        root.style.flexDirection = 'column'
                    } else {
                        move1.move(fa1, box1);
                        root.style.flexDirection = 'row'
                    }
                    new Drop('.drop1', this.dropGenerate())
                    //双击事件
                    $(".drop1").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        upload = 1
                    });
                    var div = this.generateChange(0)
                    fa1.appendChild(div)
                    break;
                case 2:
                    var box1 = document.createElement("div")
                    var fa1 = document.createElement("div")
                    var box2 = document.createElement("div")
                    var fa2 = document.createElement("div")
                    box1.className = 'box'
                    box2.className = 'box'
                    fa1.className = 'droppable-box drop1 father'
                    fa2.className = 'droppable-box drop2 father'
                    fa1.style.backgroundColor = 'cornflowerblue'
                    fa2.style.backgroundColor = 'wheat'
                    fa1.appendChild(box1)
                    fa2.appendChild(box2)
                    document.getElementById('root').appendChild(fa1)
                    document.getElementById('root').appendChild(fa2)
                    fa1.style.left = this.children[0].left + 'px'
                    fa1.style.top = this.children[0].top + 'px'
                    fa1.style.width = this.children[0].width + 'px'
                    fa1.style.height = this.children[0].height + 'px'
                    fa2.style.left = this.children[1].left + 'px'
                    fa2.style.top = this.children[1].top + 'px'
                    fa2.style.width = this.children[1].width + 'px'
                    fa2.style.height = this.children[1].height + 'px'
                    if (this.direction === 'upDown') {
                        move1.move(fa1, box1);
                        move2.move(fa2, box2);
                        root.style.flexDirection = 'column'
                    } else {
                        move1.move(fa1, box1);
                        move2.move(fa2, box2);
                        root.style.flexDirection = 'row'
                    }
                    new Drop('.drop1', this.dropGenerate())
                    new Drop('.drop2', this.dropGenerate())
                    //双击事件
                    $(".drop1").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 1
                    });
                    $(".drop2").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 2
                    });
                    var div = this.generateChange(0)
                    var div1 = this.generateChange(1)
                    fa1.appendChild(div)
                    fa2.appendChild(div1)
                    break;
                case 3:
                    var box1 = document.createElement("div")
                    var fa1 = document.createElement("div")
                    var box2 = document.createElement("div")
                    var fa2 = document.createElement("div")
                    var box3 = document.createElement("div")
                    var fa3 = document.createElement("div")
                    box1.className = 'box'
                    box2.className = 'box'
                    box3.className = 'box'
                    fa1.className = 'droppable-box drop1 father'
                    fa2.className = 'droppable-box drop2 father'
                    fa3.className = 'droppable-box drop3 father'
                    fa1.style.backgroundColor = 'cornflowerblue'
                    fa2.style.backgroundColor = 'wheat'
                    fa3.style.backgroundColor = 'honeydew'
                    fa1.appendChild(box1)
                    fa2.appendChild(box2)
                    fa3.appendChild(box3)
                    document.getElementById('root').appendChild(fa1)
                    document.getElementById('root').appendChild(fa2)
                    document.getElementById('root').appendChild(fa3)
                    fa1.style.left = this.children[0].left + 'px'
                    fa1.style.top = this.children[0].top + 'px'
                    fa1.style.width = this.children[0].width + 'px'
                    fa1.style.height = this.children[0].height + 'px'
                    fa2.style.left = this.children[1].left + 'px'
                    fa2.style.top = this.children[1].top + 'px'
                    fa2.style.width = this.children[1].width + 'px'
                    fa2.style.height = this.children[1].height + 'px'
                    fa3.style.left = this.children[2].left + 'px'
                    fa3.style.top = this.children[2].top + 'px'
                    fa3.style.width = this.children[2].width + 'px'
                    fa3.style.height = this.children[2].height + 'px'
                    if (this.direction === 'upDown') {
                        move1.move(fa1, box1);
                        move2.move(fa2, box2);
                        move3.move(fa3, box3);
                        root.style.flexDirection = 'column'
                    } else {
                        move1.move(fa1, box1);
                        move2.move(fa2, box2);
                        move3.move(fa3, box3);
                        root.style.flexDirection = 'row'
                    }
                    new Drop('.drop1', this.dropGenerate())
                    new Drop('.drop2', this.dropGenerate())
                    new Drop('.drop3', this.dropGenerate())
                    //双击事件
                    $(".drop1").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 1
                    });
                    $(".drop2").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 2
                    });
                    $(".drop3").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 3
                    });
                    var div = this.generateChange(0)
                    var div1 = this.generateChange(1)
                    var div2 = this.generateChange(2)
                    fa1.appendChild(div)
                    fa2.appendChild(div1)
                    fa3.appendChild(div2)
                    break;
                case 4:
                    var box1 = document.createElement("div")
                    var fa1 = document.createElement("div")
                    var box2 = document.createElement("div")
                    var fa2 = document.createElement("div")
                    var box3 = document.createElement("div")
                    var fa3 = document.createElement("div")
                    var box4 = document.createElement("div")
                    var fa4 = document.createElement("div")
                    box1.className = 'box'
                    box2.className = 'box'
                    box3.className = 'box'
                    box4.className = 'box'
                    fa1.className = 'droppable-box drop1 father'
                    fa2.className = 'droppable-box drop2 father'
                    fa3.className = 'droppable-box drop3 father'
                    fa4.className = 'droppable-box drop4 father'
                    fa1.appendChild(box1)
                    fa2.appendChild(box2)
                    fa3.appendChild(box3)
                    fa4.appendChild(box4)
                    document.getElementById('root').appendChild(fa1)
                    document.getElementById('root').appendChild(fa2)
                    document.getElementById('root').appendChild(fa3)
                    document.getElementById('root').appendChild(fa4)
                    fa1.style.left = this.children[0].left + 'px'
                    fa1.style.top = this.children[0].top + 'px'
                    fa1.style.width = this.children[0].width + 'px'
                    fa1.style.height = this.children[0].height + 'px'
                    fa2.style.left = this.children[1].left + 'px'
                    fa2.style.top = this.children[1].top + 'px'
                    fa2.style.width = this.children[1].width + 'px'
                    fa2.style.height = this.children[1].height + 'px'
                    fa3.style.left = this.children[2].left + 'px'
                    fa3.style.top = this.children[2].top + 'px'
                    fa3.style.width = this.children[2].width + 'px'
                    fa3.style.height = this.children[2].height + 'px'
                    fa4.style.left = this.children[3].left + 'px'
                    fa4.style.top = this.children[3].top + 'px'
                    fa4.style.width = this.children[3].width + 'px'
                    fa4.style.height = this.children[3].height + 'px'
                    if (this.direction === 'upDown') {
                        move1.move(fa1, box1);
                        move2.move(fa2, box2);
                        move3.move(fa3, box3);
                        move4.move(fa4, box4);
                        root.style.flexDirection = 'column'
                    } else {
                        move1.move(fa1, box1);
                        move2.move(fa2, box2);
                        move3.move(fa3, box3);
                        move4.move(fa4, box4);
                        root.style.flexDirection = 'row'
                    }
                    new Drop('.drop1', this.dropGenerate())
                    new Drop('.drop2', this.dropGenerate())
                    new Drop('.drop3', this.dropGenerate())
                    new Drop('.drop4', this.dropGenerate())
                    //双击事件
                    $(".drop1").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 1
                    });
                    $(".drop2").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 2
                    });
                    $(".drop3").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 3
                    });
                    $(".drop4").on('dblclick', function (e) {
                        document.getElementById('file').multiple = false
                        $("#file").trigger('click')
                        options.upload = 4
                    });
                    var div = this.generateChange(0)
                    var div1 = this.generateChange(1)
                    var div2 = this.generateChange(2)
                    var div3 = this.generateChange(3)
                    fa1.appendChild(div)
                    fa2.appendChild(div1)
                    fa3.appendChild(div2)
                    fa4.appendChild(div3)
                    break;
                default:
                    break;
            }
        }

        this.generateChange = function (index) {
            var div = document.createElement("div")
            div.setAttribute('class', 'exchangeModule' + index)
            div.setAttribute('draggable', 'true')
            div.addEventListener('dragstart', function (event) {
                dom = this
                if (dom.parentNode.children[0].children.length !== 0) {
                    dom.style.width =  100 * options.scale +'%'
                    dom.style.height = 100 * options.scale +'%'
                    dom.style.backgroundImage = "url(\"" + dom.parentNode.children[0].children[0].src + "\")"
                    dom.style.backgroundSize = "100% 100%" 
                    dom.style.visibility = 'none'
                    //dom.style.backgroundSize = 100/options.scale +'% '+100/options.scale +'%'
                    // console.log(100/options.scale +'% '+100/options.scale +'%')
                }
                options.lastDom = options.fromDom = dom;
            })
            //div.setAttribute('ondragstart', 'handleDragStart(event,this)')
            div.addEventListener('dragover', function (e) {
                //默认无法把元素放置到其他元素当中，所以需要prevent
                e.preventDefault();
                e.dataTransfer.effectAllowed = "move";
            })
            //div.setAttribute('ondragover', 'handleDragOver(event,this)')
            div.addEventListener('dragend', function (event) {
                dom = this
                if (dom.parentNode.children[0].children !== 0) {
                    dom.style.height = '50px'
                    options.lastDom.style.width = '100%'
                    dom.style.backgroundImage = null
                }

                //拖拽时松开鼠标就会会触发dragend事件
                console.log('end');
                options.toDom = null;
            })
            //div.setAttribute('ondragend', 'handleDragEnd(event,this)')
            div.addEventListener('drop', function (event) {
                dom = this
                //只有在可放置的元素上面松开鼠标才会触发drop事件
                // console.log(lastDom.parentNode)//拖动的
                // console.log(toDom.parentNode)//释放的
                if (options.fromDom == options.lastDom) {
                    //console.log('第一次调换')
                    //第一次调换
                    if (options.lastDom.parentNode.children[0].children !== 0) {
                        options.lastDom.style.height = '50px'
                        options.lastDom.style.width = '100%'
                        options.lastDom.style.backgroundImage = null
                    }
                    swapDom(options.lastDom, options.toDom);
                    options.lastDom = options.toDom;
                } else {
                    //   console.log('第N+1次调换')
                    //第N+1次调换，要先把上一个div的东西还原回去，再跟第三个div互换
                    //这个防止enter多次触发
                    if (options.lastDom == options.toDom) { return; }
                    swapDom(options.fromDom, options.lastDom);
                    swapDom(options.fromDom, options.toDom);
                    options.lastDom = options.toDom;
                }
                options.fromDom = null;
                options.toDom = null;
            })
            //div.setAttribute('ondrop', 'handleDrop(event,this)')
            div.addEventListener('dragenter', function (event) {
                dom = this
                //此时的dom 是被进入的dom
                options.toDom = dom;
            })
            //div.setAttribute('ondragenter', 'handleDragEnter(event,this)')
            div.addEventListener('mouseover', function (event) {
                dom = this
                dom.style.opacity = 1
                dom.style.transition = 'opacity .6s'
            })
            //div.setAttribute('onmouseover', 'handleMouseOver(event,this)')
            div.addEventListener('mouseout', function (event) {
                dom = this
                dom.style.opacity = 0
            })
            //div.setAttribute('onmouseout', 'handleMouseOut(event,this)')
            return div
        }



        this.dropGenerate = function () {
            return {
                onDragEnter: function (params) {
                    params.methods.showStateIcon('add')
                },
                onDragLeave: function (params) {
                    params.methods.hideStateIcon()
                },
                onDrop: function (params) {
                    if (params.enter === true) {
                        let attributeImg = params.sourceNode.attributes.attribute.value
                        let attributeBox = (params.el.offsetWidth / params.el.offsetHeight).toFixed(2)
                        var img = document.createElement("img")
                        img.src = params.sourceNode.imgUrl
                        img.setAttribute('draggable', 'flase')
                        img.setAttribute('class', 'exchange')
                        img.setAttribute('attribute', attributeImg)
                        if (attributeBox > attributeImg) {
                            img.style.width = '100%'
                            params.el.children[0].style.width = '100%'
                            let height = ((params.el.offsetWidth / attributeImg) / 2).toFixed(0) - (params.el.offsetHeight / 2).toFixed(0)
                            params.el.children[0].style.top = -height + 'px'
                        } else {
                            img.style.height = '100%'
                            params.el.children[0].style.height = '100%'
                            let width = ((attributeImg * params.el.offsetHeight) / 2).toFixed(0) - (params.el.offsetWidth / 2).toFixed(0)
                            params.el.children[0].style.left = -width + 'px'
                        }
                        if (params.el.children[0].children.length === 1) {
                            params.el.children[0].removeChild(params.el.children[0].children[0])
                        }
                        params.el.children[0].appendChild(img)
                    }
                }
            }
        }
    }

    var move = function () {
        this.move = function (fa, box) {
            box.onmousedown = function (ev) {
                var oEvent = ev;
                oEvent.preventDefault();
                var disY = oEvent.clientY - box.offsetTop;//鼠标点击时 对于浏览器屏幕的y位置
                var disX = oEvent.clientX - box.offsetLeft;//鼠标点击时 对于浏览器屏幕的y位置
                fa.onmousemove = function (ev) {
                    oEvent = ev;
                    oEvent.preventDefault();
                    var x = oEvent.clientX - disX;//相对于鼠标落下的点 鼠标在横轴移动的距离 向左为负 向右为正
                    x = x <= 0 ? x - 2 : 0;
                    x = x >= fa.offsetWidth - box.offsetWidth ? x : fa.offsetWidth - box.offsetWidth - 2;//左边界 减去边界的px
                    var y = oEvent.clientY - disY;//相对于鼠标落下的点 鼠标在横轴移动的距离 向上为负 向下为正
                    if (fa.offsetHeight - box.offsetHeight != 2) {
                        if (y <= -4) {
                            y = y
                        } else {
                            y = 0
                        }
                        if (y >= fa.offsetHeight - box.offsetHeight + 4) {
                            y = y
                        } else {
                            y = fa.offsetHeight - box.offsetHeight + 4
                        }
                    } else {
                        y = 0
                    }

                    // y = y <= 0 ? y+4  : 0;
                    // y = y >= fa.offsetHeight - box.offsetHeight ? y : fa.offsetHeight - box.offsetHeight - 2 ;//下边界 减去边界的px
                    box.style.left = x + 'px';
                    box.style.top = y + 'px';
                }
                fa.onmouseleave = function () {
                    fa.onmousemove = null;
                    fa.onmouseup = null;
                }
                fa.onmouseup = function () {
                    fa.onmousemove = null;
                    fa.onmouseup = null;
                }

            }
        }
    }


    //上传图片时运行的方法
    var changepic = function (params) {
        var Drag = dnd.Drag
        var Drop = dnd.Drop
        // let index = this.index
        
        if (options.upload === 0) {
            var files = document.getElementById('file').files;
            function readAndPreview(file) {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    // index = index + 1;
                    var div = document.createElement("div")
                    div.setAttribute('class', "draggable-node uploadDiv")
                    // div.setAttribute('index', index)
                    div.style.backgroundImage = "url(\"" + this.result + "\")"
                    div.style.backgroundSize = '100% 100%'
                    div.imgUrl = this.result
                    //获得上传的图片尺寸来判断宽高哪一个更大
                    //用于获得上传图片的尺寸
                    var i = new Image();
                    i.src = this.result
                    i.onload = function (e) {
                        div.setAttribute('attribute', (i.width / i.height).toFixed(2))
                    }
                    document.getElementById('footer').appendChild(div)
                    var span = document.createElement('span')
                    span.setAttribute('class', 'divX')
                    span.onclick = function (e) {
                        let deleteSrc = e.target.parentNode.style.backgroundImage;
                        let arrIndex = [];
                        let t = 0;
                        [].forEach.call(document.getElementsByClassName('exchange'), function (item) {
                            let temp = "url(\"" + item.src + "\")"
                            if (temp === deleteSrc) {
                                arrIndex.push(t)
                            }
                            t = t + 1
                        })
                        for (let i = arrIndex.length - 1; i >= 0; i--) {
                            document.getElementsByClassName('exchange')[arrIndex[i]].parentNode.removeChild(document.getElementsByClassName('exchange')[arrIndex[i]])
                        }
                        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
                    }
                    div.onmouseenter = function () {
                        span.style.display = 'block'
                    }
                    // div.onmousedown = function () {
                    //     span.style.display = 'none'
                    // }
                    div.onmouseleave = function () {
                        span.style.display = 'none'
                    }
                    div.appendChild(span)
                    new Drag(div, {
                        data: 1,
                        onDragEnd: function (params) {
                            !params.target && params.methods.removeDragedNode('back')
                        }
                    })

                }, false);
                reader.readAsDataURL(file);
            }

            if (files) {
                [].forEach.call(files, readAndPreview);
            }
        } else {//双击上传
            var files = document.getElementById('file').files;
            let uploadTemp = options.upload
            function readAndPreview(file) {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    // index = index + 1;
                    let attributeImg;
                    var div = document.createElement("div")
                    div.setAttribute('class', "draggable-node uploadDiv")
                    div.style.backgroundImage = "url(\"" + this.result + "\")"
                    div.style.backgroundSize = '100% 100%'
                    div.imgUrl = this.result
                    //获得上传的图片尺寸来判断宽高哪一个更大
                    //用于获得上传图片的尺寸
                    var i = new Image();
                    i.src = this.result
                    i.onload = function (e) {
                        attributeImg = (i.width / i.height).toFixed(2)
                        div.setAttribute('attribute', attributeImg)
                    }
                    document.getElementById('footer').appendChild(div)
                    new Drag(div, {
                        data: 1,
                        onDragEnd: function (params) {
                            !params.target && params.methods.removeDragedNode('back')
                        }
                    })
                    var span = document.createElement('span')
                    span.setAttribute('class', 'divX')
                    span.onclick = function (e) {
                        let deleteSrc = e.target.parentNode.style.backgroundImage;
                        let arrIndex = [];
                        let t = 0;
                        [].forEach.call(document.getElementsByClassName('exchange'), function (item) {
                            let temp = "url(\"" + item.src + "\")"
                            if (temp === deleteSrc) {
                                arrIndex.push(t)
                            }
                            t = t + 1
                        })
                        for (let i = arrIndex.length - 1; i >= 0; i--) {
                            document.getElementsByClassName('exchange')[arrIndex[i]].parentNode.removeChild(document.getElementsByClassName('exchange')[arrIndex[i]])
                        }
                        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
                    }
                    div.onmouseenter = function () {
                        span.style.display = 'block'
                    }
                    // div.onmousedown = function () {
                    //     span.style.display = 'none'
                    // }
                    div.onmouseleave = function () {
                        span.style.display = 'none'
                    }
                    div.appendChild(span)
                    if (document.getElementsByClassName('drop' + uploadTemp)[0].children[0].children.length === 0) {//空白区域双击上传图片
                        let attributeBox = (document.getElementsByClassName('drop' + uploadTemp)[0].offsetWidth / document.getElementsByClassName('drop' + uploadTemp)[0].offsetHeight).toFixed(2)
                        var img = document.createElement("img")
                        img.src = this.result
                        img.setAttribute('draggable', 'false')
                        img.setAttribute('class', 'exchange')
                        var i = new Image();
                        i.src = this.result
                        i.onload = function (e) {
                            attributeImg = (i.width / i.height).toFixed(2)
                            div.setAttribute('attribute', attributeImg)
                            img.setAttribute('attribute', attributeImg)
                            if (attributeBox > attributeImg) {
                                img.style.width = '100%'
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.width = '100%'
                                let height = ((document.getElementsByClassName('drop' + uploadTemp)[0].offsetWidth / attributeImg) / 2).toFixed(0) - (document.getElementsByClassName('drop' + uploadTemp)[0].offsetHeight / 2).toFixed(0)
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.top = -height + 'px'
                            } else {
                                img.style.height = '100%'
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.height = '100%'
                                let width = ((attributeImg * document.getElementsByClassName('drop' + uploadTemp)[0].offsetHeight) / 2).toFixed(0) - (document.getElementsByClassName('drop' + uploadTemp)[0].offsetWidth / 2).toFixed(0)
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.left = -width + 'px'
                            }
                        }
                        document.getElementsByClassName('drop' + uploadTemp)[0].children[0].appendChild(img)
                    } else {//非空白区域双击上传图片
                        let attributeBox = (document.getElementsByClassName('drop' + uploadTemp)[0].offsetWidth / document.getElementsByClassName('drop' + uploadTemp)[0].offsetHeight).toFixed(2)
                        var img = document.createElement("img")
                        img.src = this.result
                        img.setAttribute('draggable', 'false')
                        img.setAttribute('class', 'exchange')
                        var i = new Image();
                        i.src = this.result
                        i.onload = function (e) {
                            attributeImg = (i.width / i.height).toFixed(2)
                            div.setAttribute('attribute', attributeImg)
                            img.setAttribute('attribute', attributeImg)
                            if (attributeBox > attributeImg) {
                                img.style.width = '100%'
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.width = '100%'
                                let height = ((document.getElementsByClassName('drop' + uploadTemp)[0].offsetWidth / attributeImg) / 2).toFixed(0) - (document.getElementsByClassName('drop' + uploadTemp)[0].offsetHeight / 2).toFixed(0)
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.top = -height + 'px'
                            } else {
                                img.style.height = '100%'
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.height = '100%'
                                let width = ((attributeImg * document.getElementsByClassName('drop' + uploadTemp)[0].offsetHeight) / 2).toFixed(0) - (document.getElementsByClassName('drop' + uploadTemp)[0].offsetWidth / 2).toFixed(0)
                                document.getElementsByClassName('drop' + uploadTemp)[0].children[0].style.left = -width + 'px'
                            }
                        }
                        document.getElementsByClassName('drop' + uploadTemp)[0].children[0].removeChild(document.getElementsByClassName('drop' + uploadTemp)[0].children[0].children[0])
                        document.getElementsByClassName('drop' + uploadTemp)[0].children[0].appendChild(img)
                    }

                }, false);
                reader.readAsDataURL(file);
            }
            if (files) {
                [].forEach.call(files, readAndPreview);
            }
        }

        document.getElementById('file').multiple = true
        options.upload = 0
    }

    var swapDom = function (a, b) {//b有可能无图
        //拖动的是a 释放需要交换的是b
        var move1 = new move;
        var move2 = new move;
        var aParent = a.parentNode;
        var bParent = b.parentNode;
        var abox = aParent.children[0]
        var bbox = bParent.children[0]
        if (abox && bbox) {
            var aNode2 = abox.cloneNode(true);//aNode 没有父节点
            bParent.replaceChild(aNode2, bbox);
            aParent.replaceChild(bbox, abox);
            let attributeAImg
            let attributeABox
            if (bbox.children.length !== 0) {//为0时 表示图片与空白区域交换
                attributeAImg = bbox.children[0].attributes.attribute.value
                attributeABox = (aParent.offsetWidth / aParent.offsetHeight).toFixed(2)
                if (attributeABox > attributeAImg) {
                    bbox.children[0].style.width = '100%'
                    bbox.children[0].style.height = null
                    bbox.style.width = '100%'
                    bbox.style.height = null
                    let height = ((bbox.parentNode.offsetWidth / attributeAImg) / 2).toFixed(0) - (bbox.parentNode.offsetHeight / 2).toFixed(0)
                    bbox.style.top = -height + 'px'
                    bbox.style.left = '0px'
                } else {
                    bbox.children[0].style.height = '100%'
                    bbox.children[0].style.width = null
                    bbox.style.height = '100%'
                    bbox.style.width = null
                    let width = ((attributeAImg * bbox.parentNode.offsetHeight) / 2).toFixed(0) - (bbox.parentNode.offsetWidth / 2).toFixed(0)
                    bbox.style.top = '0px'
                    bbox.style.left = -width + 'px'
                }
            }
            if (aNode2.children.length !== 0) {
                let attributeBImg = aNode2.children[0].attributes.attribute.value
                let attributeBBox = (bParent.offsetWidth / bParent.offsetHeight).toFixed(2)
                if (attributeBBox > attributeBImg) {
                    aNode2.children[0].style.width = '100%'
                    aNode2.children[0].style.height = null
                    aNode2.style.width = '100%'
                    aNode2.style.height = null
                    let height = ((aNode2.parentNode.offsetWidth / attributeBImg) / 2).toFixed(0) - (aNode2.parentNode.offsetHeight / 2).toFixed(0)
                    aNode2.style.top = -height + 'px'
                    aNode2.style.left = '0px'
                } else {
                    aNode2.children[0].style.height = '100%'
                    aNode2.children[0].style.width = null
                    aNode2.style.height = '100%'
                    aNode2.style.width = null
                    let width = ((attributeBImg * aNode2.parentNode.offsetHeight) / 2).toFixed(0) - (aNode2.parentNode.offsetWidth / 2).toFixed(0)
                    aNode2.style.left = -width + 'px'
                    aNode2.style.top = '0px'
                }
            }

            move1.move(aParent, bbox)
            move2.move(bParent, aNode2)
        }
    }

    //动态生成模版按钮
    var generateButton = function (key, index) {
        var button = document.createElement('button')
        button.className = "moduleButton"
        button.style.backgroundImage =  "url(\"" + key.src + "\")"
        button.style.backgroundSize = '100% 100%'
        //button.innerText = "模板"
        button.onclick = function () {
            var root = document.getElementById('root')
            var rootChild = root.childNodes
            for (var i = rootChild.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
                root.removeChild(rootChild[i]);
            }
            var init = new generate(key)
            options.heightPic = key.height
            options.widthPic = key.width
            init.init()
            // init.changepic()
        }
        //初始化页面 初始模版为第一个
        if (index == 0) {
            var root = document.getElementById('root')
            var rootChild = root.childNodes
            for (var i = rootChild.length - 1; i >= 0; i--) { // 一定要倒序，正序是删不干净的，可自行尝试
                root.removeChild(rootChild[i]);
            }
            var init = new generate(key)
            options.heightPic = key.height
            options.widthPic = key.width
            init.init()
            // init.changepic()
        }
        return button
    }

    var download = function () {//点击按钮直接下载
        new html2canvas(document.getElementById("root"), {
            allowTaint: false,
            useCORS: true,
            scale: 2,
            dpi: 300,
            width: options.widthPic * options.scale,
            height: options.heightPic * options.scale,
        }).then(function (canvas) {
            var imgUrl = canvas.toDataURL();
            var dom = document.createElement('a');
            dom.setAttribute("href", imgUrl);
            dom.setAttribute("download", "截图");
            dom.click();
        });
    }

    //暴露在外面的接口
    var api = {
        config: function (opts) {
            if (!opts) return options;
            for (var key in opts) {
                options[key] = opts[key];
            }
            return this;
        },
        //load 清除
        // listen: function listen(elem) {
        //     if (typeof elem === 'string') {
        //         var elems = document.querySelectorAll(elem),
        //             i = elems.length;
        //         while (i--) {
        //             listen(elems[i]);
        //         }
        //         return
        //     }
        //     return this;
        // },
        //先生成dom 再绑定事件
        init: function init(elem) {
            if (typeof elem === 'string') {
                var elems = document.querySelectorAll(elem),
                    i = elems.length;
                while (i--) {
                    return init(elems[i])
                }
            }
            //根元素 可以设置divAll的宽高来控制整个组件的宽高
            var divAll = document.createElement('div')
            divAll.style = "width:" + options.width + ";height:" + options.height + ";position: relative;"
            var divLeft = document.createElement('div')
            divLeft.style = "width: "+options.leftWidth+"; height: 100%; float:left;z-index: 100;background-color:#fff;overflow:auto;"
            var divCenter = document.createElement('div')
            divCenter.id = 'root'
            divCenter.style = 'transform:scale('+options.scale+');transform-origin:0px 0px'//以左上角为原点进行缩放
            var divFooter = document.createElement('div')
            divFooter.id = 'footer'
            divFooter.style.marginLeft = options.leftWidth
            var updateStr = "<a href=\"javascript:;\" class=\"file\">点击上传文件" +
                "<input type=\"file\" id=\"file\" class=\"filepath\" multiple=\'true\' " +
                "accept=\"image/jpg,image/jpeg,image/png,image/PNG\">" +
                "</a>";
            divFooter.innerHTML = updateStr
            divAll.appendChild(divLeft)
            divAll.appendChild(divCenter)
            divAll.appendChild(divFooter)
            elem.appendChild(divAll)
            document.getElementById('file').addEventListener('change', changepic)
            for (let key in options.json) {
                var button = generateButton(options.json[key], key)
                divLeft.appendChild(button)
            }
            var downloadButton = document.createElement('button')
            downloadButton.innerText = "下载"
            downloadButton.className = "moduleButton"
            downloadButton.onclick = download
            divLeft.appendChild(downloadButton)
            if(options.imgSrc.length!=0){
                console.log(options.imgSrc)//需要在这里初始化传入的图片，同时置空，后面会再次判断一次吗？
            }
            return
        }
    }
    this.Switch = api;
})();