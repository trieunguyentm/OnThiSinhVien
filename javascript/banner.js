document.getElementById('main-banner').style.height = window.innerWidth * 0.45;
window.addEventListener('resize', function () {
    var windowWidth = window.innerWidth;
    var divHeight = windowWidth * 0.45;
    var myDiv = document.getElementById('main-banner');
    myDiv.style.height = divHeight + 'px';
});

var buttonBannerHeight = document.getElementById("button-change-banner").offsetHeight;
var arrSlideBtn = document.getElementsByClassName('slide-btn');
for (var i = 0; i < arrSlideBtn.length; i++) {
    arrSlideBtn[i].style.width = buttonBannerHeight * 0.6;
    arrSlideBtn[i].style.height = buttonBannerHeight * 0.6;
    arrSlideBtn[i].style.marginTop = buttonBannerHeight * 0.2;
    arrSlideBtn[i].style.marginBottom = buttonBannerHeight * 0.2;
    arrSlideBtn[i].style.marginRight = buttonBannerHeight * 0.1;
    arrSlideBtn[i].style.marginLeft = buttonBannerHeight * 0.1;
}
window.addEventListener('resize', function () {
    var buttonBannerHeight = document.getElementById("button-change-banner").offsetHeight;
    var arrSlideBtn = document.getElementsByClassName('slide-btn');
    for (var i = 0; i < arrSlideBtn.length; i++) {
        arrSlideBtn[i].style.width = buttonBannerHeight * 0.6;
        arrSlideBtn[i].style.height = buttonBannerHeight * 0.6;
        arrSlideBtn[i].style.marginTop = buttonBannerHeight * 0.2;
        arrSlideBtn[i].style.marginBottom = buttonBannerHeight * 0.2;
        arrSlideBtn[i].style.marginRight = buttonBannerHeight * 0.1;
        arrSlideBtn[i].style.marginLeft = buttonBannerHeight * 0.1;
    }
})

document.addEventListener("DOMContentLoaded", function () {
    // Lấy ra slider, sliderContent và các mảng slides
    var slider = document.querySelector('.banners');
    var sliderContent = document.querySelector('.banner-content');
    var slides = document.querySelectorAll('.item');
    // Khởi tạo khi load trang thì slideIndex = 0
    var slideIndex = 0;
    // Lấy mảng các button
    var slideButtons = document.querySelectorAll('.slide-btn');
    // Khi thay đổi kích thước màn hình thì kích thước của một slide cũng thay đổi theo thẻ <div class="banners">
    // Do đó, ta điều chỉnh lại kích thước của các slide trong mảng slides , đồng thời trượt lại đúng vị trí hiện tại
    function setSlideWidth() {
        // Lấy kích thước mới
        var slideWidth = slider.offsetWidth;
        // Điều chỉnh độ rộng của mỗi slide
        Array.from(slides).forEach(function (slide) {
            slide.style.width = slideWidth + 'px';
        });
        // Lấy độ trượt mới
        var displacement = -slideWidth * slideIndex;
        sliderContent.style.transform = 'translateX(' + displacement + 'px)';
    }
    // Mỗi lần changeSlide cần xác định chỉ số và từ đó tính được độ trượt cần thiết, đồng thời xóa bỏ class active của các btn khác, thêm class active cho btn được chọn
    function changeSlide(index) {
        slideIndex = index;
        var slideWidth = slider.offsetWidth;
        var displacement = -slideWidth * slideIndex;
        sliderContent.style.transform = 'translateX(' + displacement + 'px)';

        // Xóa active class khỏi tất cả các nút
        Array.from(slideButtons).forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Thêm active class vào nút được chọn
        slideButtons[slideIndex].classList.add('active');
    }

    function autoChangeSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        changeSlide(slideIndex);
    }

    var intervalId = setInterval(autoChangeSlide, 5000);

    // Thay đổi kích thước slide khi cửa sổ được thu nhỏ
    window.addEventListener('resize', function () {
        setSlideWidth();
    });
    // Thêm sự kiện cho mỗi click, nó sẽ dừng setInterval đi và thực hiện changeSlide rồi mới thêm lại setInterval
    Array.from(slideButtons).forEach(function (button, index) {
        button.addEventListener('click', function () {
            clearInterval(intervalId);
            changeSlide(index);
            intervalId = setInterval(autoChangeSlide, 5000);
        });
    });

    // Thiết lập kích thước slide ban đầu
    setSlideWidth();
});
