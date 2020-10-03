function solve(arr, sortBy) {

    let data = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    arr.reduce((acc, val) => {
        let [destination, price, status] = val.split('|');
        data.push(new Ticket(destination, price, status));

        return acc;
    }, {})

    let sort = {
        'destination': arr => arr.sort((a, b) => (a.destination).localeCompare(b.destination)),
        'price': arr => arr.sort((a, b) => a - b),
        'status': arr => arr.sort((a, b) => (a.status).localeCompare(b.status))
    }
    let sortedArr = sort[sortBy](data)

    return sortedArr;
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination')