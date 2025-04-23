//Voy a decirle a JavaScript  qu se ejecute de una vez que el documento o DOM se haya cargado complete
$(document).ready(function () {
    //Recorre todos los enlaces o los elementos que se encuentraben la clase menu
    $('.menu a').each(function (index, elemento) {
        //Le voy a desaparecer al menu con un nueva posicion vertical
        $(this).css({
            'top': '-200px'
        })

        //voy a implementar un a función para que cada uno de los elemetod del men0u aparezca con un efecto de deplazamiento
        $(this).animate({
            top: '0'
        }, 3000 + (index * 500))//El primer elemento se va a demorar 2000ms, el segundo 2500ms y asi sucesivamente cada uno de los elementos


        //Condición para aplicar animaciones solo si el ancho de la pantalla es mayor a 800px
        if ($(window).width() > 800) {
            //Establezco estilos iniciales del texto dentro del header
            // -Opacidad 0 (invisible)
            //-Margen superior en 0 (posición que va a tener antes de la animación)
            $('header .texto').css({
                opacity: 0,
                marginTop: 0
            })



            //aplico una animación para que el texto aparezca con un efecto de desplazamiento
            $('header .texto').animate({
                //Se haga visble
                opacity: 1,
                //se desplace hacia arriba-52px
                marginTop: '-100px'
            }, 4300)//El tiempo qeu se va a demorar en aparece el texto es de 1500ms
        }


        //Scroll de los elementos del menú
        //creo una variable para cada uno de los elementos y obtengo su posición vertical
        var inicio = $('#inicio').offset().top,
            Nosotros = $('#nosotros').offset().top,
            cita = $('#Agenda tu cita').offset().top,
            servicios = $('#servicios').offset().top;
        contactanos = $('#contactanos').offset().top;
        $('#btn-inicio').on('click', function (e) {
            e.preventDefault()//Evito el comportamiento por defecto del enlace
            $('html, body').animate({
                scrollTop: inicio - 100 //Desplaza la posición vertical de la página a la sección scercaDe
            }, 500)//El tiempo que e demora en el desplzamiento

        })

        var inicio = $('#inicio').offset().top,
            nosotros = $('#nosotros').offset().top,
            cita = $('#Agenda tu cita').offset().top,
            servicios = $('#servicios').offset().top;
        contactanos = $('#contactanos').offset().top;
        $('#btn-nosotros').on('click', function (e) {
            e.preventDefault()//Evito el comportamiento por defecto del enlace
            $('html, body').animate({
                scrollTop: nosotros - 100 //Desplaza la posición vertical de la página a la sección scercaDe
            }, 500)//El tiempo que e demora en el desplzamiento

        })

        var inicio = $('#inicio').offset().top,
            Nosotros = $('#nosotros').offset().top,
            cita = $('#Agenda tu cita').offset().top,
            servicios = $('#servicios').offset().top;
        contactanos = $('#contactanos').offset().top;
        $('#btn-cita').on('click', function (e) {
            e.preventDefault()//Evito el comportamiento por defecto del enlace
            $('html, body').animate({
                scrollTop: cita - 100 //Desplaza la posición vertical de la página a la sección scercaDe
            }, 500)//El tiempo que e demora en el desplzamiento

        })


        var inicio = $('#inicio').offset().top,
            Nosotros = $('#nosotros').offset().top,
            cita = $('#Agenda tu cita').offset().top,
            servicios = $('#servicios').offset().top;
        contactanos = $('#contactanos').offset().top;
        $('#btn-servicios').on('click', function (e) {
            e.preventDefault()//Evito el comportamiento por defecto del enlace
            $('html, body').animate({
                scrollTop: servicios - 100 //Desplaza la posición vertical de la página a la sección scercaDe
            }, 500)//El tiempo que e demora en el desplzamiento

        })

        var inicio = $('#inicio').offset().top,
            Nosotros = $('#nosotros').offset().top,
            cita = $('#Agenda tu cita').offset().top,
            servicios = $('#servicios').offset().top;
        contactanos = $('#contactanos').offset().top;
        $('#btn-contactanos').on('click', function (e) {
            e.preventDefault()//Evito el comportamiento por defecto del enlace
            $('html, body').animate({
                scrollTop: contactanos - 100 //Desplaza la posición vertical de la página a la sección scercaDe
            }, 500)//El tiempo que e demora en el desplzamiento

        })











    })



})

