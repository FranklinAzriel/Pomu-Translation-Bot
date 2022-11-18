import { Command, emoji } from '../../helpers/discord'
import { oneLine } from 'common-tags'
import { ChatInputCommandInteraction } from 'discord.js'
import { validateInputAndModifyEntryList } from '../db/functions'
import { notificationCommand } from '../../helpers/discord/slash'

export const gossip: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Notifs',
    description: oneLine`
    ストリーマーが他のストリーマーのライブチャットで発言した内容の中継を開始または停止することができます。
    ストリーマーのライブチャット（翻訳、ストリーマーコメントを含む）。
    `,
  },
  slash: notificationCommand({ name: 'gossip', subject: 'gossip' }),
  callback: (intr: ChatInputCommandInteraction) => {
    const streamer = intr.options.getString('channel')!
    validateInputAndModifyEntryList({
      intr,
      verb: intr.options.getSubcommand(true) as 'add' | 'remove' | 'clear' | 'viewcurrent',
      streamer,
      role: intr.options.getRole('role')?.id,
      feature: 'gossip',
      add: {
        success: `${emoji.peek} 他のチャットでゴシップを中継する`,
        failure: oneLine`
        :warning: に関するゴシップ ${streamer} このチャンネルですでに行われている他のチャットで
        このチャンネルでリレーしています。
        `,
      },
      remove: {
        success: `${emoji.holo} ゴシップの中継を停止`,
        failure: oneLine`
        :warning: に関するゴシップ ${streamer} はまだ中継されていなかった
        で <#${intr.channel!.id}>. あなたは正しいチャンネルにいますか？
        `,
      },
    })
  },
}
