function callOnTarget(func, obj1, obj2) {
  // Your code here
const answer = func.call(obj1,obj2);
    return answer;
}
/*Omo the syntax be confusing me right now*/

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
