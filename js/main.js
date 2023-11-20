$(document).ready(function(){


    // 메인 슬라이드 
    $('.main_slider').slick({
        slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li
        infinite : true,     //무한 반복 옵션
        slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
        speed : 1800,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,            // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,        // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        dotsClass : "slick-dots",     //아래 나오는 페이지네이션(점) css class 지정
        draggable : true,     //드래그 가능 여부

    });

    // 새상품 슬라이드
    $('#new-list .contents_list_2').slick({
        slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li
        infinite : false,     //무한 반복 옵션
        slidesToShow : 5,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 4,        //스크롤 한번에 움직일 컨텐츠 개수
        speed : 1000,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : false,            // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : false,        // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        dotsClass : "slick-dots-2",     //아래 나오는 페이지네이션(점) css class 지정
        draggable : true,     //드래그 가능 여부
    });

    // 인스타그램 슬라이드
    $('.post-slide').slick({
        slide: 'div', 
        infinite : true,   
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows : true,
        dots : true,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,        // 가변적인 가로 사이즈 여부
        nextArrow:$('.post-btn-next'),
        prevArrow:$('.post-btn-prev'),
        dotsClass : "slick-dots-3",
        draggable : true, 
    });





    // 메인 슬라이드 재생,멈춤 버튼
    $("#visual .play").on("click",function(){
        $('.main_slider').slick('slickPlay');
    });
    $("#visual .pause").on("click",function(){
        $('.main_slider').slick('slickPause');
    });

    $("#visual .pause").on("click",function(){
        $(this).addClass("on");
        $('#visual .move-btn .play').addClass("on");
        
    });
    $("#visual .play").on("click",function(){
        $(this).removeClass("on");
        $('#visual .move-btn .pause').removeClass("on");
    });
    

    // 인기상품 클릭 이벤트
    $("#product-list .card1 .card1-icon > div").on("click",function(){
        $(this).toggleClass("on");
    });


    // 카테고리 on 효과 (이미지 호버 시)
    // closest = 해당 선택자의 부모들 중 하나를 선택
    $(".cate-img").hover(
        function(){ //마우스 들어갈 때
            $(this).closest($(".category-box")).addClass("on");
        },
        function(){ //마우스 나갈 때
            $(this).closest($(".category-box")).removeClass("on");
        }
    );
    // 카테고리 on 효과 (버튼 호버 시)
    // closest = 해당 선택자의 부모들 중 하나를 선택
    $(".cate-btn").hover(
        function(){ //마우스 들어갈 때
            $(this).closest($(".category-box")).addClass("on");
        },
        function(){ //마우스 나갈 때
            $(this).closest($(".category-box")).removeClass("on");
        }
    );

    
    // 플로팅 버튼 클릭 이벤트
    $('.floating').on('click', function() {
        // 스크롤 맨 위로 이동
        $('html').animate({'scroll-top' : 0}, 1000)
    })






    

});

