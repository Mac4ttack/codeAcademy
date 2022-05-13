/*
The code for sortPlayersByValueFromCity() and filterPlayersByValueFromCity() is hard to read. With currying, we can write functions that handle one task, and are therefore not only easier to read and understand, but more reusable. For example, we can create a curried function that filters an array of objects by a provided key and value.
*/

const setFilter = array => key => value => array.filter(x => x[key] === value);
const filterPlayers = setFilter(players);
const filterPlayersByCity = filterPlayers('city');
const filteredPlayersBySanFrancisco = filterPlayersByCity('San Francisco');
const filterPlayersBySport = filterPlayers('sport');
const filteredPlayersBySoccer = filterPlayersBySport('soccer');
 
console.log(filteredPlayersBySanFrancisco); // Returns an array of players from San Francisco
console.log(filteredPlayersBySoccer); // Returns an array of players that play soccer

//more modular ---------------------------------


const sortArrayByValue = sortArray => sortKey => {
    return sortArray.sort(function(a, b){
        if(a[sortKey] < b[sortKey]) { return -1; }
        if(a[sortKey] > b[sortKey]) { return 1; }
        return 0;
    });
}
 
const sortSanFrancisco = sortArrayByValue(filteredPlayersBySanFrancisco);
const sortSFByDateJoined = sortSanFrancisco("dateJoined");
console.log(sortSFByDateJoined);