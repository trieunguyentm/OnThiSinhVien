document.addEventListener("DOMContentLoaded", function () {
    // Xác định thẻ content-mobile sau đó ẩn đi
    var contentMobile = document.getElementById("content-mobile");
    contentMobile.style.display = "none";
    // Kích thước chiều rộng thẻ conntent-mobile = chiều rộng banner - 30px
    var banner = document.getElementById("first-slide-banner");
    var widthContentMobile = banner.offsetWidth;
    contentMobile.style.width = (widthContentMobile - 30) + 'px';
    // Mỗi khi người dùng click vào menu-content-mobile sẽ ẩn/ hiện contentMobile
    document.getElementById("menu-content-mobile").addEventListener("click", function () {
        contentMobile.style.display = (contentMobile.style.display === "none") ? "block" : "none";
    });
    window.addEventListener('resize', function () {
        var banner = document.getElementById("first-slide-banner");
        var widthContentMobile = banner.offsetWidth;
        contentMobile.style.width = (widthContentMobile - 30) + 'px';
    })

});



