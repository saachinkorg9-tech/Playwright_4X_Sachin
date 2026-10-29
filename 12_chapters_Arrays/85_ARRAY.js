let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser);
console.log(browser.length);

browser.pop();
console.log("after pop  "+browser);

let removed = browser.shift();
console.log("removed  "+removed);

console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesn't support Automation Now!");
    }
}