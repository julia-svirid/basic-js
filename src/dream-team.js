module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
   const arr = members.filter(item => typeof item === 'string').map(item => item.trim());
    const array = arr.reduce((acc, item) => {
        let letter = item[0].slice(0).toUpperCase();
        acc.push(letter);
        return acc.sort();
    }, []);
    let str = array.join('');
    return str; 
};