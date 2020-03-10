module.exports = function createDreamTeam(members) {
  let word = "";
  for (let i = 0; i<members.length; i++){
    if(typeof members[i] == "string"){
      word = word + members[i].slice(0, 1);
    }
    else return false;
  }
  
  let str = word.toUpperCase();
  let arr = str.split("");
  let sortedarr = arr.sort();
  let result = sortedarr.join('');
 

  return result;
  
};