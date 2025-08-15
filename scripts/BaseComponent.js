class BaseComponent {
    constructor() {
        if(this.constructor === BaseComponent) {
            throw new Error('Its impossible to create an exemplar of abstract class BaseComponent')
        }
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop]
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop]

                target[prop] = newValue

                if(newValue !== oldValue) {
                    this.updateUI()
                }
                return true
            }, 
        })
    }

    // Перерисовка UI в ответ на обновление состояния(isExpanded, etc...)

    updateUI() {
        throw new Error('Необходимо реализовать метод updateUI!')
    }
}

export default BaseComponent