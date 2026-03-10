export class CalculatorView {
    constructor() {
        this.previousDisplay = document.querySelector('p.text-muted.small');
        this.currentDisplay = document.querySelector('.h2.mb-0');
        this.buttons = document.querySelectorAll('.d-grid button');

        this.calcContainer = document.getElementById('calculator');
        this.standardRadio = document.getElementById('standard');
        this.programmerRadio = document.getElementById('programmer');
        this.progPanelLeft = document.getElementById('prog-panel-left');
        this.progPanelRight = document.getElementById('prog-panel-right');
        this.progBases = document.getElementById('prog-bases');

        this.hexDisplay = document.querySelector('#prog-bases div:nth-child(1) .text-white');
        this.decDisplay = document.querySelector('#prog-bases div:nth-child(2) .text-white');
        this.octDisplay = document.querySelector('#prog-bases div:nth-child(3) .text-white');
        this.binDisplay = document.querySelector('#prog-bases div:nth-child(4) .text-white');
        this.dotButton = Array.from(this.buttons).find(btn => btn.innerText.trim() === '.');

        window.addEventListener('resize', () => {
            if (this.programmerRadio.checked) {
                const isMobile = window.innerWidth < 768;

                if (isMobile) {
                    this.calcContainer.style.maxWidth = '350px';
                    this.calcContainer.style.maxHeight = '1200px';
                } else {
                    this.calcContainer.style.maxWidth = '680px';
                    this.calcContainer.style.maxHeight = '650px';
                }
            }
        });
    }

    bindModeToggle(handler) {
        this.programmerRadio.addEventListener('change', () => {
            const isMobile = window.innerWidth < 768;

            this.progPanelLeft.classList.remove('d-none');
            this.progPanelRight.classList.remove('d-none');
            this.progBases.classList.remove('d-none');

            setTimeout(() => {
                if (isMobile) {
                    this.calcContainer.style.maxWidth = '350px';
                    this.calcContainer.style.maxHeight = '1200px';
                } else {
                    this.calcContainer.style.maxWidth = '680px';
                    this.calcContainer.style.maxHeight = '650px';
                }
            }, 10);

            if (this.dotButton) this.dotButton.disabled = true;
            if (handler) handler('programmer');
        });

        this.standardRadio.addEventListener('change', () => {
            this.calcContainer.style.maxWidth = '350px';
            this.calcContainer.style.maxHeight = '550px';

            setTimeout(() => {
                if (this.standardRadio.checked) {
                    this.progPanelLeft.classList.add('d-none');
                    this.progPanelRight.classList.add('d-none');
                    this.progBases.classList.add('d-none');
                }
            }, 400);

            if (this.dotButton) this.dotButton.disabled = false;
            if (handler) handler('standard');
        });
    }

    formatNumber(number) {
        if (number === '' || number === 'Error') return number;
        const stringNum = number.toString();
        if (/[A-F]/.test(stringNum)) return stringNum;
        if (stringNum.endsWith('.')) return stringNum;
        const parts = stringNum.split('.');

        if ((parts.length === 2 && parts[1].length > 10) || stringNum.includes('e')) {
            return (parseFloat(stringNum).toPrecision(10) / 1).toString();
        }

        return stringNum;
    }

    updateDisplay(current, previous, operation) {
        const displayCurrent = this.formatNumber(current)
        this.currentDisplay.innerText = displayCurrent === '' ? '\u00A0' : displayCurrent;
        if (operation != null) {
            this.previousDisplay.innerText = `${this.formatNumber(previous)} ${operation}`;
        } else {
            this.previousDisplay.innerText = previous ? this.formatNumber(previous) : '\u00A0';
        }
    }

    updateBases(bases) {
        if (this.hexDisplay) {
            this.hexDisplay.innerText = bases.hex;
            this.decDisplay.innerText = bases.dec;
            this.octDisplay.innerText = bases.oct;
            this.binDisplay.innerText = bases.bin;
        }
    }

    bindButtonClicks(handler) {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                let value = button.innerText.trim();

                if (value === 'C' && button.classList.contains('btn-secondary')) {
                    value = 'CLEAR';
                }

                handler(value);
            });
        });
    }
}