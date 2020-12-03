document.write("<script type='text/javascript' src='js/dnd.js'></script>");
function generate(direction, number, children) {
    var Drag = dnd.Drag
    var Drop = dnd.Drop
    this.number = number
    this.direction = direction
    this.children = children
    this.index = 0;

    //初始化 移动方向及个数
    this.init = function () {
        let func = this.dropGenerate(direction)
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
                root.style.left='400px'
                root.style.top='50px'
                // root.style.width='600px'
                // root.style.height='600px'
                if (this.direction === 'upDown') {
                    box1.style.width = '100%'
                    box2.style.width = '100%'
                    move1.upDown(fa1, box1);
                    move2.upDown(fa2, box2);
                    root.style.flexDirection = 'column'
                } else {
                    box1.style.height = '100%'
                    box2.style.height = '100%'
                    move1.leftRight(fa1, box1);
                    move2.leftRight(fa2, box2);
                    root.style.flexDirection = 'row'
                }
                new Drop('.drop1', func)
                new Drop('.drop2', func)
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
                root.style.left='400px'
                root.style.top='50px'
                // root.style.width='600px'
                // root.style.height='600px'

                if (this.direction === 'upDown') {
                    this.children.forEach((item,index) =>{
                        if(item.direction==='upDown'){
                            
                            switch(index){
                                case 0:
                                    box1.style.width = '100%'
                                    move1.upDown(fa1, box1);
                                    break;
                                case 1:
                                    box2.style.width = '100%'
                                    move2.upDown(fa2, box2);
                                    console.log('2')
                                    break;
                                case 2:
                                    box3.style.width = '100%'
                                    move3.upDown(fa3, box3);
                                    console.log('2')
                                    break;
                                default:
                                    break
                            }
                        }else if(item.direction==='leftRight'){
                            
                            switch(index){
                                case 0:
                                    box1.style.height = '100%'
                                    move1.leftRight(fa1, box1);
                                    console.log('1')
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
                    this.children.forEach((item,index) =>{
                        if(item.direction==='upDown'){
                            switch(index){
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
                        }else if(item.direction==='leftRight'){
                            switch(index){
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
                break;
            default:
                break;
        }
    }

    this.changepic = function () {
        let index = this.index
        var files = document.getElementById('file').files;
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

            }, false);
            reader.readAsDataURL(file);
        }
        if (files) {
            [].forEach.call(files, readAndPreview);
        }
    }

    this.dropGenerate = function (direction) {
        console.log(direction)
            return {
                onDragEnter: function (params) {
                    params.methods.showStateIcon('add')
                },
                onDragLeave: function (params) {
                    params.methods.hideStateIcon()
                },
                onDrop: function (params) {
                    if (params.enter === true) {
                        var img = document.createElement("img")
                        img.src = params.sourceNode.imgUrl
                        
                        if(direction === 'upDown')
                            img.style.width = '100%'
                        else 
                            img.style.height = '100%'
                        if (params.el.children[0].children.length === 1) {
                            params.el.children[0].removeChild(params.el.children[0].children[0])
                        }
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
            var oEvent = ev;
            oEvent.preventDefault();
            var disY = oEvent.clientY - box.offsetTop;//鼠标点击时 对于浏览器屏幕的y位置
            fa.onmousemove = function (ev) {
                oEvent = ev;
                oEvent.preventDefault();
                var y = oEvent.clientY - disY;//相对于鼠标落下的点 鼠标在横轴移动的距离 向上为负 向下为正
                y = y <= 0 ? y : 0;
                y = y >= fa.offsetHeight - box.offsetHeight ? y : fa.offsetHeight - box.offsetHeight;//下边界
                // box.style.left = x + 'px';
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
