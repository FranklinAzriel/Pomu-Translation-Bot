import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'
import { Command, createEmbed, reply } from '../../helpers/discord'
import { getStreamerList } from '../db/streamers/'

const description = '対応するYTチャンネルを一覧表示'

export const list: Command = {
  config: {
    permLevel: 0,
  },
  help: {
    category: 'General',
    description: '対応するYTチャンネルを一覧表示',
  },
  slash: new SlashCommandBuilder().setName('list').setDescription(description),
  callback: (intr: CommandInteraction): void => {
    reply(
      intr,
      createEmbed({
        title: 'Supported channels',
        description: getStreamerList(),
      }),
    )
  },
}
