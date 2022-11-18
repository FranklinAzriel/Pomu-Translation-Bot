import { toggleSetting } from '../db/functions'
import { CommandInteraction } from 'discord.js'
import { Command } from '../../helpers/discord'
import { SlashCommandBuilder } from '@discordjs/builders'

const description = 'サーバー全体のMODメッセージのリレーをトグルします。'

export const mods: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Relay',
    description,
  },
  slash: new SlashCommandBuilder().setName('mods').setDescription(description),
  callback: (intr: CommandInteraction): void => {
    toggleSetting({
      intr,
      setting: 'modMessages',
      enable: `:tools: これより、MODメッセージのリレーを行います。`,
      disable: `
       :tools: 今後、MODメッセージの中継は行いません。
       (チャンネルオーナーや他のホロライブメンバーは中継されます）。
      `,
    })
  },
}
