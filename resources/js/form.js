(function () {
    const PRECIO_TICKET = 200;
    const element_total = document.querySelector('#total');
    
    const element_cantidad = document.querySelector('#cantidad');
    element_cantidad.value = 1;
    const element_categoria = document.querySelector('#categoria');
    const element_form = document.querySelector('#form_ticket') 
    element_form.addEventListener('submit', calcular_total)
    function show_total(total) {
        element_total.value = `Total a Pagar: $ ${total.toFixed(2)}`;
    }

    function calcular_total(e){
        e.preventDefault();
        const cantidad = +element_cantidad.value > 0 ? +element_cantidad.value : 1;
        const categoria = element_categoria.value
        
        const factor_descuento = categoria == 'estudiante' 
                                    ? 0.1 
                                    : categoria == 'trainee'
                                    ? 0.5
                                    : categoria == 'junior'
                                    ? 0.85
                                    : 1;
        console.info('factor', factor_descuento)
        console.info('cantidad', cantidad)
        const total = (cantidad * PRECIO_TICKET) * factor_descuento;
        show_total(total)
    }
})()