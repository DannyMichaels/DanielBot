module.exports = {
  name: "ping",
  description: "this is a ping command",
  execute(message, args) {
    if (message.member.roles.cache.has("767062535802716180")) {
      message.channel.send("pong!");
    } else {
      message.channel.send(`You don't have the permissions for this command!`);
    }
  },
};
