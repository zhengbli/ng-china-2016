namespace PromiseDemo {
    let dataOnServer = [];

    function getDataFromServer() {
        return Promise.resolve(dataOnServer);
    }

    function printData(data: number[]) {
        console.log(data);
    }

    function sendDataToServer(data: number[]) {
        dataOnServer = data;
        return Promise.resolve(true);
    }

    function test() {
        sendDataToServer([1,2,3])
        .then(_ => getDataFromServer())
        .then(data => printData(data));
    }

    test();
}
