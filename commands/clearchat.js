module.exports = {
  name: 'clearchat',
  description: 'clearchat',
  async execute(message, client) {
    // const person = await client.users.cache.get(message.author.id);
    // console.log({ person });
    // const adminRole = '1020118124810477579';
    // if (person.cache.roles.has(adminRole)) {
    clear(message);
    // } else {
    //   message.channel.send(`You don't have the permissions for this command!`);
    // }
  },
};

const clear = async (msg) => {
  msg.delete();
  // const fetched = await msg.channel.fetchMessages({ limit: 99 });
  msg.channel.bulkDelete(100);
};
