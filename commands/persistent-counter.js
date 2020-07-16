const fs = require('fs');

// working directory is commands in this scope
// note that working directory is project root in updateCounter
let { counter } = require('../counter_state.json');

const execute = (msg, argstring) => {
  counter++;
  const obj = JSON.stringify({ counter: counter });
  try {
    fs.writeFileSync('./counter_state.json', obj);
  } catch (error) {
    console.log(error);
    msg.reply("there was an error updating the counter");
  }
  msg.reply(`the counter is now at ${counter}`);
};

module.exports = {
  name: 'pcounter',
  execute: execute
}
