const rootSelector = '[data-js-expandable-content]';

class ExpandableContent {
    selectors = {
        root: rootSelector,
        button: '[data-js-expandable-content-button]',
        icon: '[data-js-expandable-content-button-icon]',
        textContentButton: '.icon__textContent'
    }
    stateClasses = {
        isExpanded: 'is-expanded'
    }
    animationParams = {
        duration: 500,
        easing: 'ease',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.iconButtonElement = this.rootElement.querySelector(this.selectors.icon)
        this.iconTextContent = this.rootElement.querySelector(this.selectors.textContentButton)
        this.bindEvents()
    }

    expand() {
        const {offsetHeight, scrollHeight} = this.rootElement
        
        this.rootElement.animate([
            {
                maxHeight: `${offsetHeight}px`,
            },
            {
                maxHeight: `${scrollHeight}px`,
            },
        ], this.animationParams)
    }

    collapse() {
        const {offsetHeight, scrollHeight} = this.rootElement
        const computed = getComputedStyle(this.rootElement)
        const initialMaxHeight = computed.getPropertyValue('--initialMaxHeight').trim()

        this.rootElement.animate([
            {
                maxHeight: `${scrollHeight}px`
            },
            {
                maxHeight: `${initialMaxHeight}`
            }
        ], this.animationParams)
    }

    onButtonClick = () => {
        const isExpanded = this.rootElement.classList.contains(this.stateClasses.isExpanded)
        if(isExpanded) {
            this.collapse()
            this.rootElement.classList.remove(this.stateClasses.isExpanded)
            this.iconTextContent.textContent = 'Read All Blogs';
            this.iconButtonElement.classList.remove(this.stateClasses.isExpanded)
        }
        else {
            this.expand()
            this.rootElement.classList.add(this.stateClasses.isExpanded)
            this.iconTextContent.textContent = 'Roll up';
            this.iconButtonElement.classList.add(this.stateClasses.isExpanded)
        }
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onButtonClick)
    }
}

class ExpandableContentCollection {
    constructor() {
        this.init()
    }
    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ExpandableContent(element)
        })
    }
}
export default ExpandableContentCollection;