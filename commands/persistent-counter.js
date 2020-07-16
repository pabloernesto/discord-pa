const { promises: fs } = require('fs');

// working directory is commands in this scope
// note that working directory is project root in updateCounter
let { counter } = require('../counter_state.json');

const updateCounter = async () => {
  counter++;
  const obj = JSON.stringify({ counter: counter });
  return fs.writeFile('./counter_state.json', obj);
};

const execute = (msg, argstring) => {
  updateCounter()
    .then(msg.reply(`the counter is now at ${counter}`))
    .catch(error => {
      console.log(error);
      msg.reply("there was an error updating the counter");
    });
};

module.exports = {
  name: 'pcounter',
  execute: execute
}
