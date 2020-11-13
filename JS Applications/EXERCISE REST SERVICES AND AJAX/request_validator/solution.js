function validateHttpRequest(request) {

    const headers = ['method', 'uri', 'version', 'message'];

    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const regexMessage = /^[^<>\\\&\'"]+$/;
    const regexUri = /^([A-Za-z0-9.]+)$|\*/;

    let index = 0;
    
    let isValid = true;

    for (let header in request) {
        
        if (request[header] == undefined || header != headers[index]) isValid = false;
        switch (header) {
            case 'method':
                if (!methods.includes(request[header])) isValid = false;
                break;
            case 'uri':
                if (!request[header].match(regexUri)) isValid = false;
                break;
            case 'version':
                if (!versions.includes(request[header])) isValid = false;
                break;
            case 'message':
                if (request[header] == '') break;
                if (!request[header].match(regexMessage)) isValid = false;
                break;
        }


        if (!isValid) {
            throw new Error(`Invalid request header: Invalid ${headers[index].charAt(0).toUpperCase() + headers[index].slice(1)}`);
        }
        index++;
    }

    return request

}

console.log(validateHttpRequest(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }   
));