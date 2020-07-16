const execute = (msg, argstring) => {
  msg.reply('pong');
};

module.exports = {
  name: "ping",
  execute: execute
}
