export const PATH_NAME = {
  career: '커리어',
  credit: '크레딧',
  award: '수상실적',
  history: '밤프 히스토리',
  sponsor: '후원문의',
  bamsaneung: '밤사능',
} as const;

export const PATH = {
  career: [
    {
      name: PATH_NAME.award,
      path: '/career/award',
    },
    {
      name: PATH_NAME.history,
      path: '/career/history',
    },
  ],
  credit: [
    {
      name: PATH_NAME.sponsor,
      path: '/credit/sponsor',
    },
    {
      name: PATH_NAME.bamsaneung,
      path: '/credit/bamsaneung',
    },
  ],
} as const;

export type PATH_PROP = (typeof PATH)[keyof typeof PATH];
