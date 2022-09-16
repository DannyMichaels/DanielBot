const { MessageEmbed } = require('discord.js');

const handleError = async (message, error) => {
  return message.channel.send(
    new MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Error')
      .setDescription(error)
  );
};

module.exports = handleError;
