var $lunbo = (function () {
    var $ul = document.querySelector('.nav');
    var $liAll = document.querySelectorAll('ol li');
    var index = 0;
    for(let i = 0; i<$liAll.length; i++){
        $liAll[i].index = i;
    }
    console.log($liAll);
    return{
        init(){
            this.event();
        },
        event(){
            var _this = this;

        }
    }
}())
$lunbo.init();