import { On, Discord, ArgsOf, Guard, GuardFunction } from 'discordx';
import { CharEmbed } from '../../components';
const isOwner: GuardFunction<ArgsOf<'messageCreate'>> = async (
  [message],
  _client,
  next,
) => {
  if (message.author.id === '969062359442280548') {
    await next();
  }
};
@Discord()
export class PlayCard {
  @On({ event: 'messageCreate' })
  @Guard(isOwner)
  async createPost([message]: ArgsOf<'messageCreate'>) {
    const embed = await new CharEmbed(message).profile();

    return message.reply({ embeds: [embed] });
  }
}
