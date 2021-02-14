const Commando = Require('discord.js-commando')

module.export = class PlayAudioCommend extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'play dikke bak met bietn',
            group: 'misc',
            memberName: 'playaudio',
            description: 'plays some audio'
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'intro.m4a'))
        })
    }
}