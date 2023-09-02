const presupuesto = [];

function guardar() {
  const tipoDeGasto = document.querySelector('ion-input[label="Tipo de Gasto"]').value;
  const monto = document.querySelector('ion-input[label="Monto"]').value;

const gasto= {tipoDeGasto,monto};
  
    presupuesto.push(gasto);

    document.querySelector('ion-input[label="Tipo de Gasto"]').value = '';
    document.querySelector('ion-input[label="Monto"]').value = '';

    
    console.log('Información guardada:', gasto);
  }; 

  
const botonGuardar = document.querySelector('ion-button');
botonGuardar.addEventListener('click', guardar);
