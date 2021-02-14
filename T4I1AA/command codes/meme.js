const { RickEmbed } = rewuire("discord.js");
const randomPuppy = require("random-puppy");

module.export = {
    name: 'meme',
    category: 'fun',
    description: 'Sends an apic meme',
    run: async (client, message, args) => {
        const subReddits = ['dankmeme', 'meme', 'me_irl'];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RickEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`httpls://redit.com/r/${random}`)

        message.channel.send(embed);
    }
}