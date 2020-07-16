let counter = 0;

const execute = (msg, argstring) => {
  msg.reply(`the counter is now at ${++counter}`);
};

module.exports = {
  name: 'counter',
  execute: execute
}
