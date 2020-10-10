function encodeAndDecodeMessages() {
    let sendMessage = document.getElementsByTagName('textarea')[0]
    let receivedMessage = document.getElementsByTagName('textarea')[1]

    document.getElementsByTagName('button')[0]
        .addEventListener('click', () => {
            let codeMessage = sendMessage.value.split('')
                .map(char => char.charCodeAt(0) + 1)
                .map(n => String.fromCharCode(n))
                .join('')

            receivedMessage.value = codeMessage
            sendMessage.value = '';
        })

    document.getElementsByTagName('button')[1]
        .addEventListener('click', () => {
            let decodeMessage = receivedMessage.value.split('')
                .map(char => char.charCodeAt(0) - 1)
                .map(n => String.fromCharCode(n))
                .join('')

            receivedMessage.value = decodeMessage;
        })
}