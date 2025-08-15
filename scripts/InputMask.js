const rootSelector = '[data-js-input-mask]';

class InputMask {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.init()
    }

    init() {
        const isLibReady = typeof window.IMask !== 'undefined';

        if(isLibReady) {
            window.IMask(this.rootElement, {
                mask: this.rootElement.dataset.jsInputMask // это типа датасет это объект джава скрипта, и он читает в camelcase нотации.Он убирает data-. И получается data-js-input-mask, а это атрибут с HTML тега.
            }) 
        } else {
            console.error('Lib is not ready');
        }
    }
}

class InputMaskCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new InputMask(element);
        })
    }
}

export default InputMaskCollection

// Я ПОНЯЛ КЛАССЫ. В ОБЩЕМ ВСЕ НАЧИНАЕТСЯ С КОЛЛЕКЦИИ КЛАССА.НАПРИМЕР ВЫЗЫВАЕМ FOREACH У ЭЛЕМЕНТА КОТОРОМУ ЗАДАВАЛИ ДАТА АТРИБУТ ПО ДЖАВА СКРИПТУ. И ПРИ ПЕРВОЙ ИТЕРАЦИИ В ЭЛЕМЕНТ ПЕРЕДАЕТСЯ ROOTSELECTOR.ЭТОТ ROOTSELECTOR ПЕРЕДАЕТСЯ КАК NEW INPUTMASK(INPUT) (этот инпут просто пример, там может быть любой элемент) И ЭТОТ INPUT ЗАПИСЫВАЕТСЯ В this.rootELement = input.ТТТТААААК!!!!