(() => {
    const form = document.getElementById('form');
    const input = document.getElementById('str');
    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        const nombre = input.value;
        console.log('Se ha dado click en el formulario...' + nombre);
    };
    form.addEventListener('submit', onFormSubmitHandler);
})();