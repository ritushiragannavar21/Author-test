class PredictiveSearch extends HTMLElement {
    constructor() {
        super();
        this.cachedResults = {};
        this.input = this.querySelector('input[type="search"]');
        this.predictiveSearchResults = this.querySelector(
            '[data-predictive-search]'
        );
        this.isOpen = false;
        this.inputClearButton = this.querySelector('[input-clear-button]');
        document.addEventListener(_EVENT_HELPER.hideDrawer, (e) => {
            if (e.detail.drawerType == 'search-drawer') {
                this.close(true);
            }
        });
        this.setupEventListeners();
    }
    // overlayClick(){
    //   this.close(true);
    // }
    setupEventListeners() {
        const form = this.querySelector('form.search');
        form.addEventListener('submit', this.onFormSubmit.bind(this));
  
        this.input.addEventListener(
            'input',
            HELPER_UTIL.debounce((event) => {
                this.onChange(event);
            }, 300).bind(this)
        );
        this.input.addEventListener('focus', this.onFocus.bind(this));
        this.addEventListener('keyup', this.onKeyup.bind(this));
        this.addEventListener('keydown', this.onKeydown.bind(this));
        this.inputClearButton && this.inputClearButton.addEventListener(
            'click',
            this.inputClear.bind(this)
        );
    }
  
    getQuery() {
        return this.input.value.trim();
    }
  
    onChange() {
        const searchTerm = this.getQuery();
  
        if (!searchTerm.length) {
            this.close(true);
            return;
        }
  
        this.getSearchResults(searchTerm);
    }
  
    onFormSubmit(event) {
        if (
            !this.getQuery().length ||
            this.querySelector('[aria-selected="true"] a')
        )
            event.preventDefault();
    }
  
    onFocus() {
        const searchTerm = this.getQuery();
  
        if (!searchTerm.length) return;
  
        if (this.getAttribute('results') === 'true') {
            this.open();
        } else {
            this.getSearchResults(searchTerm);
        }
    }
  
  
  
    onKeyup(event) {
        if (!this.getQuery().length) this.close(true);
        event.preventDefault();
  
        switch (event.code) {
            case 'ArrowUp':
                this.switchOption('up');
                break;
            case 'ArrowDown':
                this.switchOption('down');
                break;
            case 'Enter':
                this.selectOption();
                break;
        }
    }
    onKeydown(event) {
        // Prevent the cursor from moving in the input when using the up and down arrow keys
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
            event.preventDefault();
        }
    }
  
    switchOption(direction) {
        if (!this.getAttribute('open')) return;
  
        const moveUp = direction === 'up';
        const selectedElement = this.querySelector('[aria-selected="true"]');
        const allElements = this.querySelectorAll(
            '.predictive-search__list.active .predictive-search__list-item'
        );
        let activeElement = this.querySelector(
            '.predictive-search__list.active .predictive-search__list-item'
        );
        if (moveUp && !selectedElement) return;
  
        // this.statusElement.textContent = '';
  
        if (!moveUp && selectedElement) {
            activeElement =
                selectedElement.nextElementSibling || allElements[0];
        } else if (moveUp) {
            activeElement =
                selectedElement.previousElementSibling ||
                allElements[allElements.length - 1];
        }
  
        if (activeElement === selectedElement) return;
  
        activeElement.setAttribute('aria-selected', true);
        if (selectedElement)
            selectedElement.setAttribute('aria-selected', false);
  
        // this.setLiveRegionText(activeElement.textContent);
        this.input.setAttribute('aria-activedescendant', activeElement.id);
    }
  
    selectOption() {
        const selectedProduct = this.querySelector(
            '[aria-selected="true"] a, [aria-selected="true"] button'
        );
  
        if (selectedProduct) selectedProduct.click();
    }
  
    getSearchResults(searchTerm) {
        const queryKey = searchTerm.replace(' ', '-').toLowerCase();
        
  
        if (this.cachedResults[queryKey]) {
            this.renderSearchResults(this.cachedResults[queryKey]);
            return;
        }
        fetch(
            `${routes.predictive_search_url}?q=${encodeURIComponent(
                searchTerm
            )}&section_id=predictive-search&resources[limit]=10&resources[limit_scope]=each`
        )
            .then((response) => {
                if (!response.ok) {
                    var error = new Error(response.status);
                    this.close();
                    throw error;
                }
                return response.text();
            })
            .then((text) => {
                const resultsMarkup = new DOMParser()
                    .parseFromString(text, 'text/html')
                    .querySelector(
                        '#shopify-section-predictive-search'
                    ).innerHTML;
                this.cachedResults[queryKey] = resultsMarkup;
                this.renderSearchResults(resultsMarkup);
            })
            .catch((error) => {
                this.close();
                throw error;
            });
    }
    
  

  
    renderSearchResults(resultsMarkup) {
        this.predictiveSearchResults.innerHTML = resultsMarkup;
        this.setAttribute('results', true);
        this.activateTab(resultsMarkup)
        this.open();
    }

    activateTab(resultsMarkup){
    
        this.predictiveSearchResults.querySelector("[tab-head]")?.classList.add('active')  
        this.predictiveSearchResults.querySelector("[tab-body]")?.classList.add('active')  
    }

  
    open() {
        // this.predictiveSearchResults.style.maxHeight = this.resultsMaxHeight || `${this.getResultsMaxHeight()}px`;
        this.setAttribute('open', true);
        this.input.setAttribute('aria-expanded', true);
        this.isOpen = true;
    }
  
    close(clearSearchTerm = false) {
        if (clearSearchTerm) {
            this.input.value = '';
            this.removeAttribute('results');
        }
  
        const selected = this.querySelector('[aria-selected="true"]');
  
        if (selected) selected.setAttribute('aria-selected', false);
  
        this.input.setAttribute('aria-activedescendant', '');
        this.removeAttribute('open');
        this.input.setAttribute('aria-expanded', false);
        // this.resultsMaxHeight = false
        this.predictiveSearchResults.removeAttribute('style');
  
        this.isOpen = false;
    }
  
    inputClear() {
        this.close(true);
    }
  }
  
  customElements.define('predictive-search', PredictiveSearch);


  class PromptElement extends HTMLElement {
    constructor(){
        super()
        this.prompt_container =  this.querySelector("[prompt-element]")
        this.init()
    }

    init(){
        this.prompt_container.style.cssText = "--prompt-count-steps:steps("+this.prompt_container.childElementCount+");"+"--prompt-top:"+(-this.prompt_container.childElementCount*24)+"px;"+"--prompt-duration:"+(this.prompt_container.childElementCount*3)+"s"
    }
  }

  customElements.define('prompt-element', PromptElement)