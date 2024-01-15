import { motion } from 'framer-motion';

export default function StoryTeamplay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-y-10">
      <div>
        <h2 className="font-semibold text-3xl mb-2 max-sm:text-2xl">
          #4 팀플레이의 정석
        </h2>
        <span className="text-[#999999]">
          교수님, 저 여기서만 팀플하고 싶어요...(감동의 눈물)
        </span>
      </div>

      <div className="flex flex-col gap-y-5">
        <h3 className="text-lg font-medium">
          Q: 공모전 팀원들과 시너지를 느꼈던 순간이 있다면 언제였나요?
        </h3>
        <span className="font-normal">
          <strong className="font-medium">채은: </strong> 팀플을 하다 보면 서로
          잘하는 부분만 살려서 프로젝트를 진행하기 힘든데, 그 어려운 걸 여기서는
          할 수 있었어요.{' '}
          <strong className="font-semibold bg-defaultYellow">
            모두의 장점이 합쳐져 기획서를 작성해서 약점이 보완되는 좋은 시너지가
            나왔었어요.
          </strong>
        </span>
        <span className="font-normal">
          <strong className="font-medium">서현: </strong> 같이 밤을 새우며
          회의하고 수정하고 기획하면서 제출 마지막 주에 팀원이 시간이 안 되면{' '}
          <strong className="font-semibold bg-defaultYellow">
            서로 대신하고 더해주는 아름다운 모습
          </strong>
          을 보았을 때 울컥하며 더 열심히 하게 되었어요.
        </span>
      </div>

      <div>
        <img
          className="rounded-lg"
          src="/news/story/story-teamplay.webp"
          alt="수상을 한 팀사진"
          width={800}
          height={600}
        />
        <span className="text-sm font-normal text-center block mt-3 text-[#999999]">
          소설 같은 케미, 최고의 시너지. 밤프에선 현실이 됩니다!
        </span>
      </div>
    </motion.div>
  );
}
