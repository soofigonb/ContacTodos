document.addEventListener('DOMContentLoaded',function() {
    
    const form = document.getElementById('form');
    const guardarBoton = document.getElementById('guardar');

    form.addEventListener('submit',function(event) {
        event.preventDefault(); //Prevenir el envío del formulario

        const nombre = document.getElementById('input-nombre').value;
        const apellido = document.getElementById('input-apellido').value;
        const telefono = document.getElementById('input-telefono').value;
        const correo = document.getElementById('input-correo').value;
        const notas = document.getElementById('input-notas').value;

        //Creando un objeto de contacto utilizando Spread Operator
        const contactoBase = { notas};
        const nuevoContacto = {
            nombreCompleto: `${nombre} ${apellido}`,
            telefono,
            correo,
            ...contactoBase 
        };

        //Utilizando destructuring para extraer los datos importantes
        const {nombreCompleto , telefono: tefonoContacto, correo: correoContacto} = nuevoContacto;

        //Colocar los datos en el modal
        const contactoInfo = document.getElementById('contactoInfo');
        contactoInfo.textContent = `Nombre: ${nombreCompleto} Email: ${correoContacto} Teléfono: ${tefonoContacto} `;

        //Abril el modal usando Bootstrap
        const modal = new bootstrap.Modal(document.getElementById('contactoModal'));
        modal.show();

        // Configurar los botones del modal
        document.getElementById('llamarBtn').onclick = function() {
            window.open(`tel: ${tefonoContacto}`);
        };

        document.getElementById('correoBtn').onclick = function() {
            window.open(`mailto:${correoContacto}`);
        };

    });

    //Borrar los datos del formulario cuando se cierra el modal
    const contactoModal = document.getElementById('contactoModal');
    contactoModal.addEventListener('hidden.bs.modal',function () {
     form.reset(); //Resetear el formulario   
    });

});