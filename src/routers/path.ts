export const PATH_NAME = {
  career: '커리어',
  credit: '크레딧',
  award: '수상실적',
  history: '밤프 히스토리',
  sponsor: '후원문의',
  bamsaneung: '밤사능',
  news: '밤프 소식',
  story: '밤프인 스토리',
  video: '홍보영상',
} as const;

export const PATH = {
  home: '/',
  careerAward: '/career/award',
  careerHistory: '/career/history',
  creditSponsor: '/credit/sponsor',
  creditBamsaneung: '/credit/bamsaneung',
  newsStory: '/news/story',
  newsVideo: '/news/video',
} as const;

export const PATH_LIST = {
  career: [
    {
      name: PATH_NAME.history,
      path: PATH.careerHistory,
    },
    {
      name: PATH_NAME.award,
      path: PATH.careerAward,
    },
  ],
  news: [
    {
      name: PATH_NAME.story,
      path: PATH.newsStory,
    },
    {
      name: PATH_NAME.video,
      path: PATH.newsVideo,
    },
  ],
  credit: [
    {
      name: PATH_NAME.bamsaneung,
      path: PATH.creditBamsaneung,
    },
    {
      name: PATH_NAME.sponsor,
      path: PATH.creditSponsor,
    },
  ],
} as const;

export type PATH_PROP = (typeof PATH_LIST)[keyof typeof PATH_LIST];
