function add(a, b) {
    return a + b;
}
function sub(x, y) {
    return x - y;
}


export default add; // default export can be only one
export { sub }; // named export