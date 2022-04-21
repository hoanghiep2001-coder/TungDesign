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
                    <div class="col-3">
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
      
    }

    AsiaDevice.init()
});
