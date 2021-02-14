const fs = require('fs')
const path = require('path')
const { MessageAttachment } = require('discord.js')
const Commando = require('discord.js-commando')

module.export = class ImageCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dikkebak met bietn foto',
            group: 'misc',
            memberName: 'dikkebakmetbietnF',
            description: 'Stuurd een foto',
        })
    }

    run = (massage) => {
        const attachment = new MessageAttachment(
            'https://i.ytimg.com/vi/jPRTn_10lHI/maxresdefault.jpg'
        )

        MessageAttachment.reply('Hier is de mevrouw van de dikke bak met bietn meme', attachment)
    }
}