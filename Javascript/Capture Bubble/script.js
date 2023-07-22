const outer = document.getElementById("outer");
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

outer.addEventListener('click', (e) => {
    console.log("outer capturing");
}, true);

outer.addEventListener('click', (e) => {
    console.log('outer bubbling');
}, false)

inner.addEventListener('click', (e) => {
    console.log('inner capturing')
}, true);

inner.addEventListener('click', (e) => {
    console.log('inner bubbling');
}, false);

btn.addEventListener('click', (e) => {
    console.log('button capturing');
}, true);

btn.addEventListener('click', (e) => {
    console.log('button bubbling');
}, false);