import { Command, emoji } from '../../helpers/discord'
import { oneLine } from 'common-tags'
import { ChatInputCommandInteraction } from 'discord.js'
import { validateInputAndModifyEntryList } from '../db/functions'
import { notificationCommand } from '../../helpers/discord/slash'

export const cameos: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Notifs',
    description: oneLine`
    他の配信者のライブチャットに出演した配信者の中継を開始または停止する。 配信者のライブチャットを中継する。
    `,
  },
  slash: notificationCommand({ name: 'cameos', subject: 'cameos' }),
  callback: (intr: ChatInputCommandInteraction): void => {
    const streamer = intr.options.getString('channel')!
    validateInputAndModifyEntryList({
      intr,
      verb: intr.options.getSubcommand(true) as 'add' | 'remove' | 'clear' | 'viewcurrent',
      streamer,
      role: intr.options.getRole('role')?.id,
      feature: 'cameos',
      add: {
        success: `${emoji.holo}他のチャットでのカメオ出演を中継する`,
        failure: oneLine`
          :warning: ${streamer}'s このチャンネルでは、すでに他のチャットにカメオ出演しています。
          このチャンネルで中継しています。
        `,
      },
      remove: {
        success: `${emoji.holo} チャットカメオの中継を停止`,
        failure: oneLine`
          :warning: ${streamer}'s カメオのリレーはまだでした。 <#${intr.channel!.id}>. あなたは正しいチャンネルにいますか？
        `,
      },
    })
  },
}
