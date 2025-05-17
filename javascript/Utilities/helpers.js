// Utility functions for DOM manipulation
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const setInnerHTML = (id, content) => {
    const element = $(`#${id}`);
    if (element) element.innerHTML = content;
};

const setTextContent = (id, text) => {
    const element = $(`#${id}`);
    if (element) element.textContent = text;
};