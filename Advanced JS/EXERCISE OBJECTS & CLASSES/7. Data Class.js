// function solve() {
//
//     let myData = new CustomRequest('GET', 'http://google.com', 'HTTP/1.1', '')
//     console.log(myData)
// }

class CustomRequest {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// solve()