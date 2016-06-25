/*
een handige nieuwe argument in functies is de rest parameter
Als je bv weet dat je 2 vaste parameters hebt maar weet niet hoeveel erna komen
kan je de rest parameter gebruiken
*/

function weWantThemAll(eerste,tweede,...all) {
    console.log(all);
}
weWantThemAll('eerst', 'tweede'); // []
weWantThemAll('a', 'b', 'c', 'd'); // ['c','d']