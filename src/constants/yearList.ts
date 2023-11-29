const NOW = new Date();
const YEAR = NOW.getFullYear();
const RECENT = 5;
const LAST = 2006;

// 아래는 로직을 수정하지 않아도 매년에 맞춰 계산됩니다.

// 최근 5년을 담은 배열 [2023, 2022, 2021...]
export const RECENT_YEARS: string[] = Array.from({ length: RECENT }, (_, i) =>
  (YEAR - i).toString(),
);

// 최근 5년 이후 부터 2006년까지를 담은 배열 [2018, 2017... 2006]
export const PAST_YEARS: string[] = Array.from(
  { length: YEAR - LAST - RECENT + 1 },
  (_, i) => (YEAR - (i + RECENT)).toString(),
);
