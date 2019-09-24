const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const makeStore = () => {
    const domString = 'hi new store';
    printToDom('store-container', domString)
};

export default { makeStore };