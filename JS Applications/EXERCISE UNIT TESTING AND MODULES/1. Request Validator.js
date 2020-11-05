function httpRequest(request) {

    const methods = ['POST', 'GET', 'DELETE', 'CONNECT']

    if (!request.hasOwnProperty('method')|| !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    const uriPattern = /^([A-Za-z0-9.]+)$|\*/g;

    if (!request.hasOwnProperty('uri')|| !request.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    if (!request.hasOwnProperty('version')|| !versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    const messagePattern = /^([^<>\\&'"]*)$/g;

    if (!request.hasOwnProperty('message')|| !request.message.match(messagePattern)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

httpRequest({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
)