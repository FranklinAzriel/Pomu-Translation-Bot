import { Command, emoji } from '../../helpers/discord'
import { oneLine } from 'common-tags'
import { ChatInputCommandInteraction } from 'discord.js'
import { validateInputAndModifyEntryList } from '../db/functions'
import { notificationCommand } from '../../helpers/discord/slash'

export const youtube: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Notifs',
    description: `現在のチャンネルでYoutubeライブ配信の通知送信を開始または停止します。`,
  },
  slash: notificationCommand({ name: 'youtube', subject: 'YouTube lives' }),
  callback: async (intr: ChatInputCommandInteraction): Promise<void> => {
    const streamer = intr.options.getString('channel')!
    validateInputAndModifyEntryList({
      intr,
      verb: intr.options.getSubcommand(true) as 'add' | 'remove' | 'clear' | 'viewcurrent',
      streamer,
      role: intr.options.getRole('role')?.id,
      feature: 'youtube',
      add: {
        success: `${emoji.yt} YouTubeのライブを通知する`,
        failure: oneLine`
          :warning: ${streamer}'s YouTubeライフはすでに
          をこのチャンネルでリレーしています。
        `,
      },
      remove: {
        success: `${emoji.yt} によるYouTubeライブの通知を停止しました。`,
        failure: oneLine`
          :warning: ${streamer}'s YouTubeのライブは、すでに通知されていなかった
          でお知らせしています。 <#${intr.channel!.id}>. あなたは正しいチャンネルにいますか？
        `,
      },
    })
  },
}
