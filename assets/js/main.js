jQuery(document).ready(function($) {
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});


// VUE JS
const App = new Vue({
    el: '#app',
    data: {
        getUrlId: '',
        getUrlOn: false,
        items: [{
                jobTitle: 'Сайт аренды квартир посуточно',
                link: '',
                scill: 'JavaScript, PHP7, Yii2',
                img: 'https://st.weblancer.net/download/3576462_250xr.jpg',
                bigImg: 'https://st.weblancer.net/download/3576462_935xp.png',
                description: 'В настоящее время клиент не поддерживает сайт. <br> Выполнен комплекс работ по проектированию, созданию дизайн макетов, верстке и программированию сайта по подбору квартир посуточно. Также был осуществлен парсинг и наполнение базы данных, более чем 6000 квартир по городам миллионникам России. Сайт выполнен на фреймворке Yii2'
            },
            {
                jobTitle: 'Редизайн сайта RPS group',
                link: 'http://rps-expert.ru',
                scill: 'JavaScript, PHP7, Yii2',
                img: 'https://st.weblancer.net/download/3576457_250xr.jpg',
                bigImg: 'https://st.weblancer.net/download/3576457_935xp.jpg',
                description: 'Постоянные клиенты попросили освежить дизайн и сделать его более современным. Вроде получилось не плохо ;)'
            },
            {
                jobTitle: 'Сайт строительной компании',
                link: 'http://kstroytech.ru',
                scill: 'jQuery, PHP7',
                img: 'https://st.weblancer.net/download/2866732_250xr.jpg',
                bigImg: 'https://st.weblancer.net/download/2866732_935xp.jpeg',
                description: 'Сайт выполнен в строгом стиле. Содержит более 600 проектов индивидуальных жилых домов. Клиент отмечает удобство административной части сайта.'
            },
            {
                jobTitle: 'ULOOK.STORE MARKETPLACE',
                link: 'https://ulook.store/',
                scill: 'jQuery, Yii2',
                img: 'https://st.weblancer.net/download/3870374_250xr.jpg',
                bigImg: 'https://st.weblancer.net/download/3870374_935xp.png',
                description: 'Интернет-магазин женской одежды.'
            },
            {
                jobTitle: 'Интернет-магазин детской одежды archyland',
                link: 'http://archyland.ru/',
                scill: 'jQuery, Yii2',
                img: 'https://st.weblancer.net/download/3870378_250xr.jpg',
                bigImg: 'https://st.weblancer.net/download/3870378_935xp.png',
                description: 'Интернет-магазин детской одежды. Выполнен полный цикл работ(дизайн, верстка,функционал). Уникальная административная часть.'
            },
            {
                jobTitle: 'H2Doctor',
                link: 'http://h2-doctor.ru/',
                scill: 'jQuery, Yii2',
                img: 'https://st.weblancer.net/download/3870407_250xr.jpg',
                bigImg: 'https://st.weblancer.net/download/3870407_935xp.png',
                description: 'Выполнены все стадии работ по созданию мини сайта компании H2Doctor'
            },
        ],
        singleItem: [],
    },
    created: function() {
        this.getURL();
    },
    methods: {
        getURL() {
            let url = new URL(window.location.href);
            let id = url.searchParams.get("id");
            if (id) {
                this.getUrlId = id;
                this.getUrlOn = true;
                this.getItem();
            } else {
                this.getUrlOn = false;
                return false;
            }
        },
        getItem() {
            this.singleItem = this.items[this.getUrlId];
            if (!this.singleItem) {
                this.getUrlOn = false;
                return false;
            }
        }
    }
})