import { toggleSetting } from '../db/functions'
import { CommandInteraction } from 'discord.js'
import { Command, emoji } from '../../helpers/discord'
import { oneLine } from 'common-tags'
import { SlashCommandBuilder } from '@discordjs/builders'

const description =
  "ホロライブメンバーのチャットメッセージのDeepL自動翻訳をトグルします。(/cameosにも影響します)"

export const deepl: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Relay',
    description,
  },
  slash: new SlashCommandBuilder().setName('deepl').setDescription(description),
  callback: (intr: CommandInteraction): void => {
    toggleSetting({
      intr,
      setting: 'deepl',
      enable: `
        ${emoji.deepl} これからDeepLでVtuberのメッセージを翻訳していきます。
      `,
      disable: oneLine`
        ${emoji.deepl} もうVtuberのメッセージを翻訳することはありません。
        をDeepLで翻訳することはありません。
      `,
    })
  },
}
