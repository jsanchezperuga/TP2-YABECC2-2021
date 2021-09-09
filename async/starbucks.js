// simular la linea de pedidos de startbuks, de forma asincrona

function pedidoStartbucks(pedido, callbackCliente){
    switch (pedido.tipo) {
        case 'Late':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 4000);    
            break;
        case 'Lemon':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);
            break;
        default:
            break;
    }
}

const pedido1 = {tipo: 'Late', cliente: 'Juan'};
const pedido2 = {tipo: 'Lemon', cliente: 'Pedro'};

pedidoStartbucks(pedido1, cliente => {
    console.log(`Pedido listo llamar a: ${cliente}`);
});

pedidoStartbucks(pedido2, cliente => {
    console.log(`Pedido listo llamar a: ${cliente}`);
});
