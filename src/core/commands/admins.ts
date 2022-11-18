import { Command } from '../../helpers/discord'
import { ChatInputCommandInteraction } from 'discord.js'
import { modifyRoleList } from '../db/functions/roles'
import { roleListCommand } from '../../helpers/discord/slash'

const description =
  'ボット管理者リストへのロールの追加・削除。(キック権限を持っている人はボット管理者です。)'

export const admins: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'General',
    description,
  },
  slash: roleListCommand({
    name: 'admins',
    description,
    roleListName: 'the bot admin list',
  }),
  callback: (intr: ChatInputCommandInteraction): void => {
    modifyRoleList({
      type: 'admins',
      intr,
      verb: intr.options.getSubcommand(true),
      role: intr.options.getRole('role')!.id,
    })
  },
}
