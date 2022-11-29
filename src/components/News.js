import React from 'react';
import { render } from 'react-dom';
import NewsItem from './NewsItem';
import { Component } from 'react';

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: 'CNBC',
      },
      author: 'Holly Ellyatt',
      title:
        "Ukraine told it must prepare for new Russian attacks; 'ugly' clash erupts between Kyiv officials  CNBC",
      description:
        "Ukraine's President Volodymyr Zelenskyy said the country must prepare for new missile attacks from Russia.",
      url: 'https://www.cnbc.com/2022/11/28/russiaukraineliveupdates.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/1071574521669631427210gettyimages1243564169AFP_32KA3GW.jpeg?v=1669631553&w=1920&h=1080',
      publishedAt: '20221128T10:32:00Z',
      content:
        "Kyiv's Mayor Vitali Klitschko responded to Ukrainian President Volodymyr Zelenskyy's criticism of the council in Kyiv for not setting up enough community hubs in which members of the public can seek … [+1229 chars]",
    },
    {
      source: {
        id: null,
        name: 'KHOU.com',
      },
      author: 'KHOU 11 Staff',
      title:
        'LIST: Houston school districts closed due to citywide boil water notice  KHOU.com',
      description:
        "The state's biggest school district canceled classes on Monday due to a citywide boil water notice that went into effect on Sunday.",
      url: 'https://www.khou.com/article/news/education/hisdclancelsclassboilwaternotice/28525804468cee045fd8acced8f4c39640c',
      urlToImage:
        'https://media.khou.com/assets/KHOU/images/ea8a7445416f4f8f8fba951e404a95d3/ea8a7445416f4f8f8fba951e404a95d3_1140x641.jpg',
      publishedAt: '20221128T10:29:16Z',
      content:
        "HOUSTON The Houston Independent School District canceled classes on Monday, due to a citywide boil water notice.\r\nAll HISD schools, offices and facilities will be closed for the day. But HISD isn't t… [+2798 chars]",
    },
    {
      source: {
        id: null,
        name: 'CNET',
      },
      author: 'Jared DiPane',
      title:
        '81+ Cyber Monday Deals Under $25 at Amazon, Best Buy, Target and More  CNET',
      description:
        "This Cyber Monday, you'll find big discounts on everything from wireless earbuds to an HBO Max subscription.",
      url: 'https://www.cnet.com/deals/81cybermondaydealsunder25amazonbestbuytargetmore/',
      urlToImage:
        'https://www.cnet.com/a/img/resize/34b79e0e37c4bd896621e2cd25f286c287659423/hub/2022/11/27/11bf0620e6554ac790a9247f70c895c7/cybermondayunder25.png?auto=webp&fit=crop&height=630&width=1200',
      publishedAt: '20221128T10:25:00Z',
      content:
        "It's Cyber Monday and that can only mean one thing: more deals! With huge sales ate Amazon, Best Buy, Target and many other stores, there are major discounts to be found. And if you're wanting to mak… [+3265 chars]",
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Emma Tucker, Rashard Rose, Pete Muntean',
      title:
        'A pilot and passenger have been rescued after a small plane crashed into power lines in Maryland  CNN',
      description:
        'A pilot and passenger who were stuck in a small plane for nearly seven hours after it crashed Sunday into power lines in Montgomery County, Maryland, have been rescued, Montgomery County Fire and Rescue Service Chief Scott Goldstein said early Monday morning.',
      url: 'https://www.cnn.com/2022/11/27/us/marylandsmallplanecrashpowerlines/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/22112808513901powerlinescrash.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '20221128T09:56:00Z',
      content:
        'A pilot and passenger who were stuck in a small plane for nearly seven hours after it crashed Sunday into power lines in Montgomery County, Maryland, have been rescued, Montgomery County Fire and Res… [+3843 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Guardian',
      },
      author: 'Helen Davidson, Verna Yu',
      title:
        'Clashes in Shanghai as protests over zeroCovid policy grip China  The Guardian',
      description:
        'Beijing, Chengdu and Wuhan see demonstrations as anger over Xi Jinping’s strict Covid policies builds, in a test for the Communist party',
      url: 'https://www.theguardian.com/world/2022/nov/28/clashesinshanghaiasprotestsoverzerocovidpolicygripchina',
      urlToImage:
        'https://i.guim.co.uk/img/media/e9e2450eeb359ca9ad33ee3ca3192436961bb2f8/0_0_6048_3628/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7cdfc23063b5083abc93bdef019f039e',
      publishedAt: '20221128T08:57:00Z',
      content:
        'Hundreds of demonstrators and police have clashed in Shanghai as protests over Chinas stringent Covid restrictions flared for a third day and spread to several cities, in the biggest test for preside… [+5572 chars]',
    },
    {
      source: {
        id: 'associatedpress',
        name: 'Associated Press',
      },
      author: 'Mark Kennedy',
      title:
        "'Fame' and 'Flashdance' singeractor Irene Cara dies at 63  The Associated Press",
      description:
        'NEW YORK (AP) — Oscar, Golden Globe and twotime Grammy winning singeractress Irene Cara, who starred and sang the title cut from the 1980 hit movie “Fame” and then belted out the eradefining hit “Flashdance ...',
      url: 'https://apnews.com/article/entertainmentmusicmoviesgoldenglobeawards06f667b584f3fe69ecac8a8914899514',
      urlToImage:
        'https://storage.googleapis.com/afsprod/media/67febcb55f1e4f0698628cd5347d191f/3000.jpeg',
      publishedAt: '20221128T08:22:50Z',
      content:
        'NEW YORK (AP) Oscar, Golden Globe and twotime Grammy winning singeractress Irene Cara, who starred and sang the title cut from the 1980 hit movie Fame and then belted out the eradefining hit Flash… [+3840 chars]',
    },
    {
      source: {
        id: 'associatedpress',
        name: 'Associated Press',
      },
      author: null,
      title:
        'NFL free agent Odell Beckham Jr. taken off plane in Miami  The Associated Press  en Español',
      description:
        'MIAMI (AP) — NFL free agent Odell Beckham Jr. was removed by police from an aircraft before takeoff at Miami International Airport after officials said he failed to respond to requests to buckle his seatbelt and appeared to be unconscious, police and airline …',
      url: 'https://apnews.com/article/losangelesramsnflsportsfootballmiamifdd3e691087e0f7f7baa239cd66a9f43',
      urlToImage:
        'https://storage.googleapis.com/afsprod/media/1cb1d669e5a94414974fe885dad147e5/3000.jpeg',
      publishedAt: '20221128T07:28:28Z',
      content:
        'MIAMI (AP) NFL free agent Odell Beckham Jr. was removed by police from an aircraft before takeoff at Miami International Airport after officials said he failed to respond to requests to buckle his se… [+2647 chars]',
    },
    {
      source: {
        id: 'ign',
        name: 'IGN',
      },
      author: 'Eric Song',
      title:
        'Score an Apple Watch for Only $149 With This Cyber Monday Deal  IGN',
      description: null,
      url: 'https://www.ign.com/articles/cybermondaydealapplewatch',
      urlToImage:
        'https://assetsprd.ignimgs.com/2022/11/28/cmapplewatch1669609586260.jpg?width=1280',
      publishedAt: '20221128T06:39:24Z',
      content:
        'You might not normally think of the Apple Watche as the smartwatch of choice for the budget conscious, but these Cyber Monday deals make that possible. Right now Walmart is offering the 1st gen Apple… [+2907 chars]',
    },
    {
      source: {
        id: 'ign',
        name: 'IGN',
      },
      author: 'Eric Song',
      title:
        'Cyber Monday Deal: $900 Off the 49" Samsung Odyssey Neo G9 Gaming Monitor  IGN',
      description: 'Plus an Extra 10% Cashback with Amazon Prime Card',
      url: 'https://www.ign.com/articles/cybermondaydealsamsungodysseyneog9gamingmonitor',
      urlToImage:
        'https://assetsprd.ignimgs.com/2022/11/28/cmmonitor1669607868513.jpg?width=1280',
      publishedAt: '20221128T06:32:36Z',
      content:
        "Amazon is offering the best prices on the 49\" Samsung Odyssey Neo G9 and G9 gaming monitors for Cyber Monday. If they seem familiar to you, that's because they've been carried over from Black Friday.… [+5598 chars]",
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        'Green Bay Packers vs. Philadelphia Eagles | 2022 Week 12 Game Highlights  NFL',
      description:
        'Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...',
      url: 'https://www.youtube.com/watch?v=JbKhPDQH5hA',
      urlToImage: 'https://i.ytimg.com/vi/JbKhPDQH5hA/maxresdefault.jpg',
      publishedAt: '20221128T04:45:50Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'MarketWatch',
      },
      author: 'Mike Murphy',
      title:
        'U.S. stock futures fall as Chinese protests rattle markets, oil hits 2022 low  MarketWatch',
      description:
        'U.S. stockindex futures sank Sunday night, as Asian markets fell following widespread public demonstrations in China and as oil hit a 2022 low.',
      url: 'https://www.marketwatch.com/story/usstockfuturesfallaschineseprotestsrattlemarketsoilhits2022low11669602798',
      urlToImage: 'https://images.mktw.net/im674366/social',
      publishedAt: '20221128T04:39:00Z',
      content:
        'U.S. stockindex futures sank Sunday night, indicating possible losses on Wall Street on Monday, as Asian markets fell following widespread public demonstrations in China and as oil prices hit a 2022… [+1887 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Cincinnati Enquirer',
      },
      author: null,
      title:
        "Cincinnati football looking for Luke Fickell's replacement ∣ Column  The Cincinnati Enquirer",
      description: null,
      url: 'https://www.cincinnati.com/restricted/?return=https:%2F%2Fwww.cincinnati.com%2Fstory%2Fsports%2Fcolumnists%2Fjasonwilliams%2F2022%2F11%2F28%2Fcincinnatiathleticdirectorjohncunninghamshouldconsidertomhermanaslukefickellsreplacement%2F69666067007%2F',
      urlToImage: null,
      publishedAt: '20221128T04:07:30Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Post Magazine',
      },
      author: null,
      title:
        'As China hits record 40,052 daily cases, can zeroCovid policy continue?  South China Morning Post',
      description:
        'If stringent measures are not sustainable, the case numbers will increase, Hong Kong epidemiologist says, warning of winter surge.',
      url: 'https://www.scmp.com/news/china/politics/article/3201188/coronaviruschinahitsrecord40052dailycasescanzerocovidcontinue',
      urlToImage:
        'https://cdn.iscmp.com/sites/default/files/styles/og_image_scmp_coronavirus_generic/public/d8/images/canvas/2022/11/28/45f7bf9fa4f84037bafe208337fcd63a_cd9479b8.jpg?itok=xWyTwNcg&v=1669610078',
      publishedAt: '20221128T04:01:19Z',
      content:
        'Published: 12:01pm, 28 Nov, 2022\r\nUpdated: 3:49pm, 28 Nov, 2022',
    },
    {
      source: {
        id: null,
        name: 'Eonline.com',
      },
      author: 'Daniel Trainor',
      title:
        'Tom Hollander and Leo Woodall React to That Shocking White Lotus Scene  E! NEWS',
      description:
        'In an exclusive interview with E! News, The White Lotus stars Tom Hollander and Leo Woodall revealed their reactions to the scandalous final scene from the Nov. 27 episode.',
      url: 'https://www.eonline.com/news/1355797/tomhollanderandleowoodallreacttothatshockingwhitelotusscene',
      urlToImage:
        'https://aknsimages.eonline.com/eol_images/Entire_Site/20221023/rs_1200x12002211231129421200TomHollanderandLeoWoodallonTheWhiteLotus.jpg?fit=around%7C1080:1080&outputquality=90&crop=1080:1080;center,top',
      publishedAt: '20221128T03:05:00Z',
      content:
        "This article contains spoilers from the Nov. 27 episode of The White Lotus\r\nExcuse us, we just need to pick our jaws up off the floor.\r\nWhile we've come to expect the unexpected from The White Lotus,… [+791 chars]",
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        '12yearold boy shot, killed near Atlantic Station identified  11Alive',
      description:
        'A 12yearold boy who was shot and killed during a chaotic scene near Atlantic Station Saturday night has been identified by his family.',
      url: 'https://www.youtube.com/watch?v=4BHAObwdOy8',
      urlToImage: 'https://i.ytimg.com/vi/4BHAObwdOy8/hqdefault.jpg',
      publishedAt: '20221128T02:27:37Z',
      content: null,
    },
    {
      source: {
        id: 'axios',
        name: 'Axios',
      },
      author: 'Erin Doherty',
      title:
        'U.S. Soccer briefly alters Iranian flag in show of support for protesters  Axios',
      description:
        '"We wanted to show our support for the women in Iran with our graphic for 24 hours."',
      url: 'https://www.axios.com/2022/11/27/ussocceriranprotestsworldcup',
      urlToImage:
        'https://images.axios.com/Lno8bxKSLZrTQMgxhzxFJojmcs=/0x818:7857x5238/1366x768/2022/11/27/1669579020884.jpg',
      publishedAt: '20221128T02:05:52Z',
      content:
        'A screenshot of the graphic posted by U.S. Soccer, that has since been changed back to show the official Iranian flag. \r\nThe U.S. Soccer Federation in a post on social media over the weekend temporar… [+1327 chars]',
    },
    {
      source: {
        id: 'googlenews',
        name: 'Google News',
      },
      author: null,
      title:
        'ProIsrael group that honored Trump blasts his meeting with Ye and Fuentes  The Hill',
      description: null,
      url: 'https://news.google.com/__i/rss/rd/articles/CBMifGh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3Mvc3RhdGUtd2F0Y2gvMzc1MjEzNS1wcm8taXNyYWVsLWdyb3VwLXRoYXQtaG9ub3JlZC10cnVtcC1ibGFzdHMtaGlzLW1lZXRpbmctd2l0aC15ZS1hbmQtZnVlbnRlcy_SAQA?oc=5',
      urlToImage: null,
      publishedAt: '20221128T02:01:00Z',
      content: null,
    },
    {
      source: {
        id: null,
        name: 'Chrome Unboxed',
      },
      author: 'Gabriel Brangers',
      title:
        'The powerful Acer Chromebook Spin 714 just hit an alltime low price  Chrome Unboxed',
      description:
        "Well, we had Black Friday and then, Small Business Saturday. Tomorrow, more deals will arrive as Cyber Monday kicks off but what about today? Yeah, I have no idea what today is called but that hasn't stopped Best Buy from dropping some hot new Chromebook deal…",
      url: 'https://chromeunboxed.com/thepowerfulacerchromebookspin714justhitanalltimelowprice/',
      urlToImage:
        'https://chromeunboxed.com/wpcontent/uploads/2022/11/acerchromebookspin714dealbb.jpg',
      publishedAt: '20221128T01:28:27Z',
      content:
        'Well, we had Black Friday and then, Small Business Saturday. Tomorrow, more deals will arrive as Cyber Monday kicks off but what about today? Yeah, I have no idea what today is called but that hasnt … [+2111 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Sonya Hamasaki',
      title:
        'Jay Leno performing at California comedy club, two weeks after burn accident  CNN',
      description:
        'Jay Leno is returning to the comedy stage Sunday night, two weeks after sustaining significant burn injuries in a gasoline fire.',
      url: 'https://www.cnn.com/2022/11/27/entertainment/jaylenocomedystage/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/221127194038jayleno112722.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '20221128T01:18:00Z',
      content:
        'Jay Leno is returning to the comedy stage Sunday night, two weeks after sustaining significant burn injuries in a gasoline fire.\r\nThe former Tonight Show host will perform in front of a soldout crow… [+1252 chars]',
    },
    {
      source: {
        id: 'bloomberg',
        name: 'Bloomberg',
      },
      author: null,
      title:
        'Oil Plunges to Lowest Since 2021 as China Unrest Rattles Market  Bloomberg',
      description: null,
      url: 'https://www.bloomberg.com/tosv2.html?vid=&uuid=72dce23f6f0b11ed8f1d73414c754859&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0xMS0yNy9vaWwtZHJvcHMtYXMtY2hpbmEtdW5yZXN0LXNlbmRzLXJpcHBsZXMtdGhyb3VnaC13b3JsZC1tYXJrZXRz',
      urlToImage: null,
      publishedAt: '20221127T23:05:50Z',
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div class="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
