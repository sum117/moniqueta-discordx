import { On, Discord, ArgsOf, Guard, GuardFunction } from 'discordx';
import { CardEmbed } from '../../components';

const testCard = {
  name: 'Teste',
  personality: 'Teste',
  gender: 'masculino',
  appearance: 'Teste',
  avatar: 'https://i.imgur.com/mLXc7NB.jpeg',
  sum: 'austera',
  phantom: 'azul',
  inCombat: false,
  kills: 0,
  exp: 0,
  level: 1,
  expCache: 0,
  attributePoints: 0,
  skills: {},
  mochila: {},
  equipamentos: {},
  armas: {},
};

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
  createPost([message]: ArgsOf<'messageCreate'>) {
    const embed = new CardEmbed(message, testCard).profile();

    return message.reply({ embeds: [embed] });
  }
}
