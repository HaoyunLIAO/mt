document.write("<script type='text/javascript' src='js/dnd.js'></script>");
function generate(direction, number, children) {
    var Drag = dnd.Drag
    var Drop = dnd.Drop
    this.number = number
    this.direction = direction
    this.children = children
    this.index = 0;
    var upload = 0;//0是多个上传（下方） 1是双击图片单个上传
    //初始化 移动方向及个数
    this.init = function () {
        switch (this.number) {
            case 2:
                var box1 = document.createElement("div")
                var fa1 = document.createElement("div")
                var box2 = document.createElement("div")
                var fa2 = document.createElement("div")
                box1.className = 'box'
                box2.className = 'box'
                fa1.className = 'droppable-box drop1 father'
                fa2.className = 'droppable-box drop2 father'
                fa1.appendChild(box1)
                fa2.appendChild(box2)
                document.getElementById('root').appendChild(fa1)
                document.getElementById('root').appendChild(fa2)
                var move1 = new move;
                var move2 = new move;
                fa1.style.left = this.children[0].left + 'px'
                fa1.style.top = this.children[0].top + 'px'
                fa1.style.width = this.children[0].width + 'px'
                fa1.style.height = this.children[0].height + 'px'
                fa2.style.left = this.children[1].left + 'px'
                fa2.style.top = this.children[1].top + 'px'
                fa2.style.width = this.children[1].width + 'px'
                fa2.style.height = this.children[1].height + 'px'
                var root = document.getElementById('root')
                root.style.display = 'flex'
                root.style.position = 'relative'
                root.style.left = '400px'
                root.style.top = '50px'
                // root.style.width='600px'
                // root.style.height='600px'
                if (this.direction === 'upDown') {
                    this.children.forEach((item, index) => {
                        if (item.direction === 'upDown') {
                            switch (index) {
                                case 0:
                                    box1.style.width = '100%'
                                    move1.upDown(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.width = '100%'
                                    move2.upDown(fa2, box2);
                                    break;
                                default:
                                    break
                            }
                        } else if (item.direction === 'leftRight') {
                            switch (index) {
                                case 0:
                                    box1.style.height = '100%'
                                    move1.leftRight(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.height = '100%'
                                    move2.leftRight(fa2, box2);
                                    break;
                                default:
                                    break
                            }
                        }
                    })
                    root.style.flexDirection = 'column'
                } else {
                    this.children.forEach((item, index) => {
                        if (item.direction === 'upDown') {
                            switch (index) {
                                case 0:
                                    box1.style.width = '100%'
                                    move1.upDown(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.width = '100%'
                                    move2.upDown(fa2, box2);
                                    break;
                                default:
                                    break
                            }
                        } else if (item.direction === 'leftRight') {
                            switch (index) {
                                case 0:
                                    box1.style.height = '100%'
                                    move1.leftRight(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.height = '100%'
                                    move2.leftRight(fa2, box2);
                                    break;
                                default:
                                    break
                            }
                        }
                    })
                    root.style.flexDirection = 'row'
                }
                new Drop('.drop1', this.dropGenerate(this.children[0].direction))
                new Drop('.drop2', this.dropGenerate(this.children[1].direction))
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
                fa1.appendChild(box1)
                fa2.appendChild(box2)
                fa3.appendChild(box3)
                document.getElementById('root').appendChild(fa1)
                document.getElementById('root').appendChild(fa2)
                document.getElementById('root').appendChild(fa3)
                var move1 = new move;
                var move2 = new move;
                var move3 = new move;
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
                var root = document.getElementById('root')
                root.style.display = 'flex'
                root.style.position = 'relative'
                root.style.left = '400px'
                root.style.top = '50px'
                // root.style.width='600px'
                // root.style.height='600px'

                if (this.direction === 'upDown') {
                    this.children.forEach((item, index) => {
                        if (item.direction === 'upDown') {

                            switch (index) {
                                case 0:
                                    box1.style.width = '100%'
                                    move1.upDown(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.width = '100%'
                                    move2.upDown(fa2, box2);
                                    break;
                                case 2:
                                    box3.style.width = '100%'
                                    move3.upDown(fa3, box3);
                                    break;
                                default:
                                    break
                            }
                        } else if (item.direction === 'leftRight') {

                            switch (index) {
                                case 0:
                                    box1.style.height = '100%'
                                    move1.leftRight(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.height = '100%'
                                    move2.leftRight(fa2, box2);
                                    break;
                                case 2:
                                    box3.style.height = '100%'
                                    move3.leftRight(fa3, box3);
                                    break;
                                default:
                                    break
                            }
                        }
                    })
                    root.style.flexDirection = 'column'
                } else {
                    this.children.forEach((item, index) => {
                        if (item.direction === 'upDown') {
                            switch (index) {
                                case 0:
                                    box1.style.width = '100%'
                                    move1.upDown(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.width = '100%'
                                    move2.upDown(fa2, box2);
                                    break;
                                case 2:
                                    box3.style.width = '100%'
                                    move3.upDown(fa3, box3);
                                    break;
                                default:
                                    break
                            }
                        } else if (item.direction === 'leftRight') {
                            switch (index) {
                                case 0:
                                    box1.style.height = '100%'
                                    move1.leftRight(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.height = '100%'
                                    move2.leftRight(fa2, box2);
                                    break;
                                case 2:
                                    box3.style.height = '100%'
                                    move3.leftRight(fa3, box3);
                                    break;
                                default:
                                    break
                            }
                        }
                    })
                    root.style.flexDirection = 'row'
                }
                new Drop('.drop1', this.dropGenerate(this.children[0].direction))
                new Drop('.drop2', this.dropGenerate(this.children[1].direction))
                new Drop('.drop3', this.dropGenerate(this.children[2].direction))
                var timeoutID = null;
                // $(".drop1").on('click', function (e) {
                //   clearTimeout(timeoutID);
                //   timeoutID = window.setTimeout(function () {
                //     //写单击事件要干的事
                //   }, 300);
                // });
                //双击事件
                $(".drop1").on('dblclick', function (e) {
                    //   clearTimeout(timeoutID);
                    $("#file")[0].multiple = false
                    $("#file").trigger('click')
                    upload = 1
                });
                $(".drop2").on('dblclick', function (e) {
                    //   clearTimeout(timeoutID);
                    $("#file")[0].multiple = false
                    $("#file").trigger('click')
                    upload = 2
                });
                $(".drop3").on('dblclick', function (e) {
                    //   clearTimeout(timeoutID);
                    $("#file")[0].multiple = false
                    $("#file").trigger('click')
                    upload = 3
                });
                var div = this.generateChange(0)
                var div1 = this.generateChange(1)
                var div2 = this.generateChange(2)
                fa1.appendChild(div)
                fa2.appendChild(div1)
                fa3.appendChild(div2)
                break;
            default:
                break;
        }
    }

    this.generateChange = function(index){
        var div = document.createElement("div")
        div.setAttribute('class', 'exchangeModule'+index)
        div.setAttribute('draggable', 'true')
        div.setAttribute('ondragstart', 'handleDragStart(event,this)')
        div.setAttribute('ondragover', 'handleDragOver(event,this)')
        div.setAttribute('ondragend', 'handleDragEnd(event,this)')
        div.setAttribute('ondrop', 'handleDrop(event,this)')
        div.setAttribute('ondragenter', 'handleDragEnter(event,this)')
        return div
    }

    this.changepic = function (params) {
        let index = this.index
        if (upload === 0) {
            var files = document.getElementById('file').files;
            function readAndPreview(file) {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    index = index + 1;
                    var div = document.createElement("div")
                    div.setAttribute('class', "draggable-node uploadDiv")
                    div.setAttribute('index', index)
                    div.style.backgroundImage = "url(\"" + this.result + "\")"
                    div.style.backgroundSize = '100% 100%'
                    div.imgUrl = this.result
                    document.getElementById('footer').appendChild(div)
                    var span = document.createElement('span')
                    span.setAttribute('class', 'divX')
                    span.onclick = function (e) {
                        $('.exchange').map((index, item) => {
                            let temp = "url(\"" + item.src + "\")"
                            if (temp === e.path[1].style.backgroundImage) {
                                item.parentNode.removeChild(item)
                            }
                        })
                        e.path[1].parentNode.removeChild(e.path[1])
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
                        data: index,
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
        } else {
            var files = document.getElementById('file').files;
            // console.log(files)
            let uploadTemp = upload
            function readAndPreview(file) {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    index = index + 1;
                    var div = document.createElement("div")
                    div.setAttribute('class', "draggable-node uploadDiv")
                    div.style.backgroundImage = "url(\"" + this.result + "\")"
                    div.style.backgroundSize = '100% 100%'
                    div.imgUrl = this.result
                    document.getElementById('footer').appendChild(div)
                    new Drag(div, {
                        data: index,
                        onDragEnd: function (params) {
                            !params.target && params.methods.removeDragedNode('back')
                        }
                    })
                    var span = document.createElement('span')
                    span.setAttribute('class', 'divX')
                    span.onclick = function (e) {
                        $('.exchange').map((index, item) => {
                            let temp = "url(\"" + item.src + "\")"
                            if (temp === e.path[1].style.backgroundImage) {
                                item.parentNode.removeChild(item)
                            }
                        })
                        e.path[1].parentNode.removeChild(e.path[1])
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
                    //TODO 需要把drop1改为变量
                    //图片交换功能 蒙版
                    //上传图片的删除功能
                    if ($('.drop' + uploadTemp)[0].children[0].children.length === 0) {
                        var img = document.createElement("img")
                        img.src = this.result
                        img.setAttribute('draggable', 'false')
                        img.setAttribute('class', 'exchange')
                        if (direction === 'upDown')
                            img.style.width = '100%'
                        else
                            img.style.height = '100%'
                        $('.drop' + uploadTemp)[0].children[0].appendChild(img)
                    } else {
                        var img = document.createElement("img")
                        img.src = this.result
                        img.setAttribute('draggable', 'false')
                        img.setAttribute('class', 'exchange')
                        if (direction === 'upDown')
                            img.style.width = '100%'
                        else
                            img.style.height = '100%'
                        $('.drop' + uploadTemp)[0].children[0].removeChild($('.drop' + uploadTemp)[0].children[0].children[0])
                        $('.drop' + uploadTemp)[0].children[0].appendChild(img)
                    }

                }, false);
                reader.readAsDataURL(file);
            }
            if (files) {
                [].forEach.call(files, readAndPreview);
            }

        }
        $("#file")[0].multiple = true
        upload = 0
    }

    this.dropGenerate = function (direction) {
        return {
            onDragEnter: function (params) {
                params.methods.showStateIcon('add')
            },
            onDragLeave: function (params) {
                params.methods.hideStateIcon()
            },
            onDrop: function (params) {
                if (params.enter === true) {
                    // var div = document.createElement("div")
                    // div.setAttribute('class','exchangeModule')
                    // div.setAttribute('draggable','true')
                    // div.setAttribute('ondrag','handleDrag(event,this)')
                    // div.ondragstart = function handleDragStart(event){
                    //     console.log('1')
                    // }
                    // div.click = function (){
                    //     console.log('okk')
                    // }
                    var img = document.createElement("img")
                    img.src = params.sourceNode.imgUrl
                    img.setAttribute('draggable', 'flase')
                    img.setAttribute('class', 'exchange')
                    if (direction === 'upDown')
                        img.style.width = '100%'
                    else
                        img.style.height = '100%'
                    if (params.el.children[0].children.length === 1) {
                        params.el.children[0].removeChild(params.el.children[0].children[0])
                    }
                    // params.el.children[0].appendChild(div)
                    params.el.children[0].appendChild(img)
                }
            }
        }
    }
}
function move() {
    //定宽 只针对上下移动
    this.upDown = function (fa, box) {
        box.onmousedown = function (ev) {
            // let div = document.getElementsByClassName('box')
            // console.log(div)
            let container = null
            var oEvent = ev;
            oEvent.preventDefault();
            var disY = oEvent.clientY - box.offsetTop;//鼠标点击时 对于浏览器屏幕的y位置
            var disX = oEvent.clientX - box.offsetLeft;//鼠标点击时 对于浏览器屏幕的y位置
            fa.onmousemove = function (ev) {
                oEvent = ev;
                oEvent.preventDefault();
                container = this
                // console.log(container)
                var y = oEvent.clientY - disY;//相对于鼠标落下的点 鼠标在横轴移动的距离 向上为负 向下为正
                var x = oEvent.clientX - disX;//相对于鼠标落下的点 鼠标在横轴移动的距离 向左为负 向右为正
                // console.log('=========================')
                // console.log(y)
                // console.log('-------------------------')
                x = x <= 0 ? x : 0;
                x = x >= fa.offsetWidth - box.offsetWidth ? x : 0;//左边界
                y = y <= 0 ? y : 0;
                y = y >= fa.offsetHeight - box.offsetHeight ? y : fa.offsetHeight - box.offsetHeight;//下边界
                // console.log(y)
                // console.log('=========================')
                // box.style.transform = translateY(y) 不会触发mouseenter  mouseover事件
                box.style.left = x + 'px';
                box.style.top = y + 'px';
            }
            fa.onmouseleave = function () {
                // console.log('?')
                fa.onmousemove = null;
                fa.onmouseup = null;
            }
            fa.onmouseup = function () {
                // console.log(container)
                // console.log(this)
                // if (container != null && container != this) {
                //     console.log("now this:", this)
                //     console.log("now container:", container)
                //     let temp = document.createElement("img")
                //     document.body.replaceChild(temp, this)
                //     document.body.replaceChild(this, container)
                //     document.body.replaceChild(container, temp)
                // }
                // console.log('??')
                fa.onmousemove = null;
                fa.onmouseup = null;
            }

        }
    }

    //定高 只针对左右移动
    this.leftRight = function (fa, box) {
        box.onmousedown = function (ev) {
            var oEvent = ev;
            oEvent.preventDefault();
            var disX = oEvent.clientX - box.offsetLeft;//鼠标点击时 对于浏览器屏幕的y位置
            fa.onmousemove = function (ev) {
                oEvent = ev;
                oEvent.preventDefault();
                var x = oEvent.clientX - disX;//相对于鼠标落下的点 鼠标在横轴移动的距离 向左为负 向右为正
                x = x <= 0 ? x : 0;
                x = x >= fa.offsetWidth - box.offsetWidth ? x : fa.offsetWidth - box.offsetWidth;//下边界
                box.style.left = x + 'px';
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
