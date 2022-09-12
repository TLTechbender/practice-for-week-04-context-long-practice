function boundFuncTimer(obj, func, delay) {
  // Your code here
    const bound =func.bind(obj);
    return setTimeout(bound,delay);
}
/* I honestly don't know what to do here, so I'ma just make like a lion and copy*/
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
