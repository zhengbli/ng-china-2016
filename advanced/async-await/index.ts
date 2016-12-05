class MockServer {
    dataOnServer: number[] = [];
    
    getData() {
        return Promise.resolve(this.dataOnServer);
    }

    sendData(data: number[]) {
        this.dataOnServer = data;
        return Promise.resolve(true);
    }
}

function test() {
    let server = new MockServer();
    server.sendData([1, 2, 3])
        .then(_ => server.getData())
        .then(data => console.log(data));
}

test();