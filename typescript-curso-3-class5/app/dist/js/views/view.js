export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    update(model) {
        const t1 = performance.now();
        let template = this.template(model);
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execucao do metodo update: ${(t2 - t1) / 1000} segundos`);
    }
}
