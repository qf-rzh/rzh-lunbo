var swiper = (function () {
    var $tipBox = document.querySelector('ol');
    var $tipAll = $tipBox.children;
    var $imgAll = document.querySelectorAll('.nav li');
    var $showImageBox = document.querySelector('.nav');
    var $left = document.querySelector('.left');
    var $right = document.querySelector('.right');
    var $
    console.log($imgAll);
    // var width = document.querySelector('.wrapper').clientWidth;
    var timer = null;
    // 当前展示图片的索引
    var index = 0;
    for (let i = 0; i < $tipAll.length; i++) {
        // $tipAll[i].setAttribute('index', i);
        $tipAll[i].index = i;
    }
    return {
        init() {
            this.event();
            this.autoPlay();
        },
        event() {
            const self = this;
            $tipBox.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    index = target.index;
                    self.showImage();
                    self.autoPlay();
                }
            }
            $left.onclick = function () {
                index--;
                self.showImage();
            }
            $right.onclick = function () {
                index++;
                self.showImage();
            }
        },
        showImage() {
            // 判断传进来的index 是否合理
            if (index < 0) {
                // 显示最后一张
                index = $tipAll.length - 1;
            } else if (index > $tipAll.length - 1) {
                index = 0
            }
            // 当前显示的索引
            for (let i = 0; i < $tipAll.length; i++) {
                // 所有小圆点处于未选中状态
                $tipAll[i].classList.remove('bg_color');
                // 所有图片隐藏
                $imgAll[i].style.display = 'none';
            }
            console.log(index);
            $tipAll[index].classList.add('bg_color');
            $imgAll[index].style.display = 'block';
            // move($imgAl, 'left', index * -390, 500);

        },
        autoPlay() {
            // var self = this;
            // clearInterval(timer);
            // timer = setInterval(function () {
            //     index++;
            //     self.showImage();
            // }, 2000)
        }
    }
}())
swiper.init();