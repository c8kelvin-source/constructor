function createStorage(initialValue) {
    let value = initialValue;

    return {
        getValue() {
            return value;
        },
        setValue(newValue) {
            value = newValue;
        }
    };
}

const store = createStorage(10);

document.getElementById("btnUpdate").onclick = function() {
    const newValue = Number(document.getElementById("inputValue").value);
    store.setValue(newValue);
};

document.getElementById("btnShow").onclick = function() {
    console.log("Giá trị hiện tại:", store.getValue());
};
