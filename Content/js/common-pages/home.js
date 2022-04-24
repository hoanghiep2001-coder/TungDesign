$(function () {
    let AsiaDevice = {
        init: function () {
            this.render()
            this.onSomething()
        },
        onSomething: function() {
            this.clearFixSlickSlider()
            this.loadPage()
            this.productDropdown()
            this.loadingGif()
            this.productItem()
            this.showPagination()

            this.showNavBar()
            this.scrollToElement()
            this.mobileProductDropdown()
        },
        render: function () {
            this.renderProductItem()
        },

        // Array
        productArr: [
            {
                image: '../Content/image/home/1.jpg',
                name: 'Áp cao',
            },
            {
                image: '../Content/image/home/2.jpg',
                name: 'Áp thấp',
            },
            {
                image: '../Content/image/home/1.jpg',
                name: 'Áp cao',
            },
            {
                image: '../Content/image/home/2.jpg',
                name: 'Áp thấp',
            },
            {
                image: '../Content/image/home/1.jpg',
                name: 'Áp cao',
            },
            {
                image: '../Content/image/home/2.jpg',
                name: 'Áp thấp',
            },
            {
                image: '../Content/image/home/1.jpg',
                name: 'Áp cao',
            },
            {
                image: '../Content/image/home/2.jpg',
                name: 'Áp thấp',
            },
        ],

        // Function
        renderProductItem: function () {
            let _this = this;
            let productList = _this.productArr.map(function (item, index) {
              return `
                    <div class="col-lg-3 col-md-4 col-6 ">
                    <div class="card-item">
                        <div class="overflow-auto overflow-hidden">
                            <img src="${item.image}" alt="">
                        </div>
                        
                        <p>${item.name}</p>
                    </div>
                </div>
                `;
            });
            $(".product__container").html(productList.join(""));
        },

        clearFixSlickSlider() {
            $('.slick-track').trigger('click');
        },
        productDropdown() {
            $('.dropdown-list').slideUp();

            $('.link-item').click(function (e) { 
                e.preventDefault();
                let $this = $(this)
                let $dropdown = $this.next()
                
                $($dropdown).slideToggle();
                $('.dropdown-list').not($dropdown).slideUp();
            });

            $('.dropdown-list-item').click(function (e) { 
                e.preventDefault();
                let $this = $(this)

                $($this).addClass('active');

                $('.dropdown-list-item').not($this).removeClass('active')
            });
        },
        loadingGif() {
            $('.js-show-loading-gif').click(function (e) { 
                e.preventDefault();
                $('.js-loading-content').fadeOut()
                $('.loading-bahavior').fadeIn()

                setTimeout(function loadingOff() {
                    $('.js-loading-content').fadeIn(1000)
                    $('.loading-bahavior').fadeOut(200)
                }, 2000)

            });
        },
        productItem() {
            $('.js-show-product').click(function (e) { 
                e.preventDefault();

                $('.product__container').removeClass('d-flex');
                $('.product__container').hide();

                setTimeout(function showProductItem() {
                    $('.js-loading-content').hide();
                    $('.product__container').addClass('d-flex');
                    $('.product__container').show();
                }, 2200)
            });
        },
        loadPage() {
            $('.js-back-to-home').click(function (e) { 
                e.preventDefault();

                $('.product__container').removeClass('d-flex');
                $('.product__container').hide();
                $('.js-loading-content').fadeOut()
                $('.loading-bahavior').fadeIn()

                setTimeout(function loadingOff() {
                    $('.js-loading-content').fadeIn(1000)
                    $('.loading-bahavior').fadeOut(200)
                }, 2000)

                setTimeout(function loadPage() {
                    $('.js-loading-content').show();
                    $('.product__container').hide();
                }, 2200)
            });
        },
        showPagination() {
           $('.wrapper').click(function (e) { 
               e.preventDefault();
               let productRow = $('.product__container').hasClass('d-flex')
               
               setTimeout(function showPagination(){
                if (productRow) {
                    $('.js-pagination').addClass('d-flex');
                    $('.js-pagination').removeClass('d-none');
                } else {
                    $('.js-pagination').removeClass('d-flex');
                    $('.js-pagination').addClass('d-none');
                }
               }, 2200)
               
           });
        },

        // Mobile
        showNavBar() {
            $('.header .bar').click(function (e) { 
                e.stopPropagation();
                $('.header .bar-container').css({
                    "width": "250px",
                    "visibility": "visible",
                 });

                 $('.header .hide-bar').css({
                    "visibility": "visible",
                 });

                 $('#myModal').modal('show')
                 setTimeout(function showNav() {
                    $('.header .bar-list').css({
                        "visibility": "visible",
                       });
                 }, 200)
                
            });

            $('.header .bar-close').click(function (e) { 
                e.stopPropagation();
                $('.header .bar-container').css({
                    "visibility": "hidden",
                    "width": "0",
                 });

                 $('.header .hide-bar').css({
                    "visibility": "hidden",
                 });
                 $('.header .bar-list').css({
                    "visibility": "hidden",
                   });
            });

            $('html').click(function (e) { 
                e.preventDefault();
                $('.header .bar-container').css({
                    "visibility": "hidden",
                    "width": "0",
                 });

                 $('.header .hide-bar').css({
                    "visibility": "hidden",
                 });
                 $('.header .bar-list').css({
                    "visibility": "hidden",
                   });
            });
        },
        mobileProductDropdown() {
            $('.sub-list').slideUp();

            $('.bar-has-sublist').click(function (e) { 
                e.preventDefault();
                let $this = $(this)
                let $dropdown = $this.next()
                let $arrowIcon = $this.find('.bi-arrow-down-circle')
                
                $($dropdown).slideToggle();
                $($arrowIcon).css({
                    "transform":"rotate(180deg)"
                });

                $('.bi-arrow-down-circle').not($arrowIcon).css({
                    "transform":"rotate(360deg)"
                });
                $('.sub-list').not($dropdown).slideUp();
            });
        },
        scrollToElement: function () {
            $(document).on("click", ".js-scroll-into-views", function (e) {
              e.preventDefault();
              console.log('clicked')
              $("html, body").animate(
                {
                  scrollTop: $(".js-scroll-destination").offset().top,
                },
                1500
              );

              $('.header .bar-close').trigger('click');
              $('.header .bar-list').css({
                  "visibility": "hidden",
                });
            });
      
            // $(document).on('click', '.towards', function (e) {
            //   e.stopPropagation();
            //   let $this = $(this)
            //   let $flyway = $this.find('.fly-way')
      
            //   if($($flyway).hasClass('active')) {
            //     $("html, body").animate(
            //       {
            //         scrollTop: $("#form-list-2").offset().top,
            //       },
            //       1000
            //     );
            //   }
            // })
          },
      
    }

    AsiaDevice.init()
});
