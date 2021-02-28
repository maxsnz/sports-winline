const share = {
  image: "https://specials.sports.ru/winlinederbyfive/share.png",
  title: "Знаете игроков «Спартака» и «Краснодара»? Сейчас проверим",
  description: "Новый тип теста на Sports.ru под Winline Derby",
  url: "https://specials.sports.ru/winlinederbyfive",
  result: [
    {
      filename: "share/spartak/1/index.html",
      image: "https://specials.sports.ru/winlinederbyfive/share-spartak-1.png",
      title: "Болеть – обязательно, матчасть – подучить!",
      description: "Ставьте на «Спартак» с Winline",
      url: "https://specials.sports.ru/winlinederbyfive/share/spartak/1",
    }, {
      filename: "share/spartak/2/index.html",
      image: "https://specials.sports.ru/winlinederbyfive/share-spartak-2.png",
      title: "Различаете Жиго с Джикией с закрытыми глазами!", 
      description: "Ставьте на «Спартак» с Winline",
      url: "https://specials.sports.ru/winlinederbyfive/share/spartak/2",
    }, {
      filename: "share/spartak/3/index.html",
      image: "https://specials.sports.ru/winlinederbyfive/share-spartak-3.png",
      title: "Настоящий знаток «Спартака»", 
      description: "Ставьте на любимую команду c Winline",
      url: "https://specials.sports.ru/winlinederbyfive/share/spartak/3",
    }, {
      filename: "share/krasnodar/1/index.html",
      image: "https://specials.sports.ru/winlinederbyfive/share-krasnodar-1.png",
      title: "Болеть – обязательно, матчасть – подучить!", 
      description: "Ставьте на «Краснодар» с Winline",
      url: "https://specials.sports.ru/winlinederbyfive/share/krasnodar/1",
    }, {
      filename: "share/krasnodar/2/index.html",
      image: "https://specials.sports.ru/winlinederbyfive/share-krasnodar-2.png",
      title: "Различаете Берга и Классона с закрытыми глазами!", 
      description: "Ставьте на «Краснодар» с Winline",
      url: "https://specials.sports.ru/winlinederbyfive/share/krasnodar/2",
    }, {
      filename: "share/krasnodar/3/index.html",
      image: "https://specials.sports.ru/winlinederbyfive/share-krasnodar-3.png",
      title: "Настоящий знаток «Краснодара»", 
      description: "Ставьте на любимую команду c Winline",
      url: "https://specials.sports.ru/winlinederbyfive/share/krasnodar/3",
    }
  ],
  makeMeta: ({ title, description, url, image }) => ({
    title,
    description,
    "og:type": "website",
    "og:url": url,
    "og:image": image,
    "vk:image": image,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:title": title,
    "og:description": description,
    "twitter:card": "summary_large_image",
    "twitter:site": "@sportsru",
  }),
};

module.exports = share;




