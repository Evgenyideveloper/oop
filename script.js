'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.selectEl = function () {
    if (this.selector.startsWith('.')) {
        let div = document.createElement('div');
        document.body.append(div);
        div.innerHTML = '.block';
        div.classList.add(this.selector.slice(1));
        div.style.cssText = `
        height : ${this.height};
        width : ${this.width};
        background : ${this.bg};
        font-size : ${this.fontSize};`;
    }

    if (this.selector.startsWith('#')) {
        let p = document.createElement('p');
        document.body.append(p);
        p.innerHTML = '#best';
        p.id = this.selector.slice(1);
        p.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};`;
    }
};

const div = new DomElement('.block', '80px', '120px', 'red', '20px');
const p = new DomElement('#best', '75px', '120px', 'blue', '20px');

div.selectEl();
p.selectEl();