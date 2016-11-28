Object.defineProperty(window, "HelloTypeScript", { value: "v1.0.0", writable: true });
function deliveryMethod() {
    var deliveryElement = document.querySelectorAll('#deliveryMethod');
    if (deliveryElement) {
        return deliveryElement[0].textContent;
    }
    else {
        return undefined;
    }
}
function shipWeight() {
    return parseInt(document.getElementById('weight').textContent);
}
/*
 * @param {(string | string[])} emailAddr - 一个邮件地址，或者是一个邮件地址数组
 */
function sendUpdates(emailAddr: string | string[]) {
    function sendEmail(addr) {
        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }
    // I如果是个数组，循环测试其中每一个元素
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val, idx) => {
            if (val === "test@test.com" || val === "test@test2.com") {
                sendEmail(val.trim());
            }
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
