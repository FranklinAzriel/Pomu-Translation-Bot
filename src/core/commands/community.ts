import { Command } from '../../helpers/discord'
import { oneLine } from 'common-tags'
import { ChatInputCommandInteraction } from 'discord.js'
import { validateInputAndModifyEntryList } from '../db/functions'
import { notificationCommand } from '../../helpers/discord/slash'

export const community: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Notifs',
    description: `現在のチャンネルでコミュニティ投稿通知の送信を開始または停止します。`,
  },
  slash: notificationCommand({ name: 'community', subject: 'community posts' }),
  callback: (intr: ChatInputCommandInteraction): void => {
    const streamer = intr.options.getString('channel')!
    validateInputAndModifyEntryList({
      intr,
      verb: intr.options.getSubcommand(true) as 'add' | 'remove' | 'clear',
      streamer,
      role: intr.options.getRole('role')?.id,
      feature: 'community',
      add: {
        success: `:family_mmbb: コミュニティへの投稿を通知する`,
        failure: oneLine`
          :warning: ${streamer}'s コミュニティへの投稿は、すでにこのチャンネルで
          このチャンネルで中継されています。
        `,
      },
      remove: {
        success: `:family_mmbb: によるコミュニティ投稿の通知を停止しました。`,
        failure: oneLine`
          :warning: ${streamer}'s コミュニティ投稿がすでに通知されていなかった
          で <#${intr.channel!.id}>. あなたは正しいチャンネルにいますか？
        `,
      },
    })
  },
}
