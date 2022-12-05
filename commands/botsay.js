const handleError = require('../utils/handleError');

module.exports = {
  name: 'botsay',
  description: 'botsay',
  async execute(message, client, args) {
    const admin = '1020118124810477579';
    try {
      if (!message.member.roles.includes(admin)) {
        return handleError(
          message,
          `You don't have the permissions for this command!`
        );
      }

      client.channels.cache.get('1044000628084572211').send(args.join(' '));
      message.delete();
    } catch (error) {
      return handleError(message, error);
    }
  },
};
