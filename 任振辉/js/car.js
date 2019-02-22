var car = (function () {
    var $bg = document.querySelectorAll('.bg');
    var $ul = document.querySelector('.box_nav2');
    var $b = $bg.lastElementChild;
    return{
        init(){
            this.event();
        },
        event(){
            var _this = this;
            $ul.mouseenter = function (e) {
                e = e || window.event
                var target = e.target || e.srcElement;
                if(target.nodeName == 'LI'){
                    console.log(target);
                    move($b,bottom,74,200);
                }
            }
        }
    }
}())
car.init();