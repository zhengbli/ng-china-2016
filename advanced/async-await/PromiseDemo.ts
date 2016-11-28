namespace AsyncAwaitDemo {
    let dataOnServer = [];
    async function getDataFromServer() {
        return dataOnServer;
    }

    function printData(data: number[]) {
        console.log(data);
    }

    async function sendDataToServer(data: number[]) {
        dataOnServer = data;
        return true;
    }

    async function test() {
        await sendDataToServer([1, 2, 3]);
        const data = await getDataFromServer();
        printData(data);
    }

    test();
}