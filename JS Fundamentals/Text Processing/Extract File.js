function solve(input) {

    let lastIndexOfDashes = input.lastIndexOf('\\');

    let fileInfo = input.substring(lastIndexOfDashes + 1);

    let lastIndexOfDot = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.substring(0, lastIndexOfDot);
    let fileExtension = fileInfo.substring(lastIndexOfDot);

    console.log(`File name: ${fileName} \nFile extension: ${fileExtension.slice(1)}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')