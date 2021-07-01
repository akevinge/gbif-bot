import { Message, MessageEmbed } from "discord.js";

export const embedPagination = async (
  { channel, author }: Pick<Message, "channel" | "author">,
  pages: MessageEmbed[],
  emojiList = ["⏪", "⏩"],
  timeout = 1000 * 60 * 60 * 2
) => {
  let hasSentWarning = false;
  if (!channel) throw new Error("Channel is inaccessible.");
  if (!pages) throw new Error("Pages are not given.");
  if (emojiList.length !== 2) throw new Error("Need two emojis.");

  let page = 0;
  const currentPage = await channel
    .send(pages[page]?.setFooter(`Page ${page + 1} / ${pages.length}`))
    .catch(() => null);

  for (const emoji of emojiList) {
    await currentPage?.react(emoji);
  }
  const reactionCollector = currentPage?.createReactionCollector(
    (reaction, user) => emojiList.includes(reaction.emoji.name) && !user.bot,
    { time: timeout }
  );
  reactionCollector?.on("collect", (reaction) => {
    reaction.users.remove(author).catch(() => {
      if (!hasSentWarning) {
        channel.send("Needs permission to remove user reactions");
        hasSentWarning = true;
      }
    });

    switch (reaction.emoji.name) {
      case emojiList[0]:
        page = page > 0 ? --page : pages.length - 1;
        break;
      case emojiList[1]:
        page = page + 1 < pages.length ? ++page : 0;
        break;
      default:
        break;
    }
    currentPage
      ?.edit(pages[page]?.setFooter(`Page ${page + 1} / ${pages.length}`))
      .catch(() => null);
  });
  reactionCollector?.on("end", () => {
    if (!currentPage?.deleted) {
      currentPage?.reactions.removeAll().catch(() => {
        if (!hasSentWarning) {
          channel.send("Needs permission to remove user reactions");
          hasSentWarning = true;
        }
      });
    }
  });
  return currentPage;
};
