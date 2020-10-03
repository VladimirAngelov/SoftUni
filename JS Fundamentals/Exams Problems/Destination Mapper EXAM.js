function destination(string) {

    let pattern = /([=\/])(?<destination>[A-Z][A-z]{2,})\1/g;
    let total = 0;
    let places = [];
    let result = pattern.exec(string)

    while (result !== null) {
        total += result.groups.destination.length;
        places.push(result.groups.destination)
        result = pattern.exec(string)
    }
    console.log(`Destinations: ${places.join(', ')}`)
    console.log(`Travel Points: ${total}`)
}

destination('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')