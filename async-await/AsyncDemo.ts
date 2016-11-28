namespace PromiseDemo {
    let dataOnServer = [];

    function getDataFromServer() {
        return Promise.resolve(dataOnServer);
    }

    function printData(data: number[]) {
        console.log(data);
    }

    function sendDataToServer(data: number[]) {
        return Promise.resolve(dataOnServer = data);
    }

    function test() {
        sendDataToServer([1,2,3])
        .then(_ => getDataFromServer())
        .then(data => printData(data));
    }

    test();
}
