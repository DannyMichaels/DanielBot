module.exports = {
  name: 'ping',
  description: 'this is a ping command',
  execute(message, args) {
    const ADMIN_ROLE = '1020118124810477579';
    if (message.member.roles.cache.has(ADMIN_ROLE)) {
      message.channel.send('pong!');
    } else {
      message.channel.send(`You don't have the permissions for this command!`);
    }
  },
};
