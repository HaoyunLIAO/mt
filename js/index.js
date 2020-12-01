function move(){

    //定宽 只针对上下移动
    this.upDown = function(fa,box){
        box.onmousedown=function(ev) {
            var oEvent = ev; 
            oEvent.preventDefault();
            var disY = oEvent.clientY - box.offsetTop;//鼠标点击时 对于浏览器屏幕的y位置
            fa.onmousemove=function (ev) {
                oEvent = ev;
                oEvent.preventDefault();
                var y = oEvent.clientY -disY;//相对于鼠标落下的点 鼠标在横轴移动的距离 向上为负 向下为正
                 y = y <= 0 ? y : 0;
                y = y >= fa.offsetHeight-box.offsetHeight ? y : fa.offsetHeight-box.offsetHeight;//下边界
                // box.style.left = x + 'px';
                box.style.top = y + 'px';
            }
            fa.onmouseleave = function () {
              fa.onmousemove=null;
              fa.onmouseup=null;
            }
            fa.onmouseup=function() {
               fa.onmousemove=null;
               fa.onmouseup=null;
            } 
        }
    }
      //定高 只针对左右移动
      this.leftRight = function(fa,box){
        box.onmousedown=function(ev) {
            var oEvent = ev; 
            oEvent.preventDefault();
            var disX = oEvent.clientX - box.offsetLeft;//鼠标点击时 对于浏览器屏幕的y位置
            fa.onmousemove=function (ev) {
                oEvent = ev;
                oEvent.preventDefault();
                var x = oEvent.clientX -disX;//相对于鼠标落下的点 鼠标在横轴移动的距离 向左为负 向右为正
                console.log(x)
                x = x <= 0 ? x : 0;
                x = x >= fa.offsetWidth-box.offsetWidth ? x : fa.offsetWidth-box.offsetWidth;//下边界
                box.style.left = x + 'px';
                // console.log(box.style)
                // box.style.right = x + 'px';
            }
            fa.onmouseleave = function () {
              fa.onmousemove=null;
              fa.onmouseup=null;
            }
            fa.onmouseup=function() {
               fa.onmousemove=null;
               fa.onmouseup=null;
            } 
        }
    }
}