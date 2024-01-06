import { motion } from 'framer-motion';

export default function StoryPassion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-y-10">
      <div>
        <h2 className="font-semibold text-3xl mb-2 max-sm:text-2xl">
          #1 열정을 넘어선 광기
        </h2>
        <span className="text-[#999999]">열정보다 먼~ 광기보다는 가까운~</span>
      </div>

      <div className="flex flex-col gap-y-5">
        <h3 className="text-lg font-medium">
          Q: 밤프를 하면서 언제 열정과 광기를 느끼셨나요?
        </h3>
        <span className="font-normal">
          <strong className="font-medium">현석: </strong> 밤프 활동을 할 당시
          수원에 살았는데 공모전에 참가할 영상 촬영을 하기 위해 일산에 자주
          갔어요. 촬영 후 집으로 돌아올 때 막차를 놓치는 경우가 많았습니다.
          그때, ‘내가 이걸 왜 이렇게 하고 있지?’ 생각하다가도 상받는 모습을
          생각하니 웃음이 나오더라구요.{' '}
          <strong className="font-semibold bg-defaultYellow">
            그때 생각이 들더라구요. "내가 진짜 이 일을 좋아하는 구나"
          </strong>
        </span>
        <span className="font-normal">
          <strong className="font-medium">윤진: </strong> 공모전 준비하면서
          48시간 동안 깨어있던 날이 가장 기억에 남아요. 자지도 못하고 계속
          기획서를 생각하다 보니까, 지칠만도 한데 그래도 억지로 깨어서 회의를
          해야했거든요. 그랬더니 같이 공모전 하던 친구들이랑 계속 붙어있었는데,{' '}
          <strong className="font-semibold bg-defaultYellow">
            이날 저를 보고 맑은 눈의 광인이라 하더라구요^^.
          </strong>
        </span>
      </div>

      <div>
        <img src="/news/story/story-passion.png" />
        <span className="font-normal text-sm text-center block mt-3 text-[#999999]">
          맑.눈.광은 지락실에만 있는 게 아니랍니다. 윤진님의 카톡중
        </span>
      </div>
    </motion.div>
  );
}
