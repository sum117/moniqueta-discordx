import { On, Discord, Guard, GuardFunction } from 'discordx';
import type { ArgsOf } from 'discordx';
import { CharEmbed } from '../../components/index.js';
const isOwner: GuardFunction<ArgsOf<'messageCreate'>> = async (
  [message],
  _client,
  next,
) => {
  if (
    ['969062359442280548', '423574776036982784'].includes(message.author.id)
  ) {
    await next();
  }
};
@Discord()
export class PlayCard {
  @On({ event: 'messageCreate' })
  @Guard(isOwner)
  async createPost([message]: ArgsOf<'messageCreate'>) {
    const embed = await new CharEmbed(message).post();

    return message.reply({ embeds: [embed] });
  }
}
