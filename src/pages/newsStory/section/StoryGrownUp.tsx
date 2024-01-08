import { motion } from 'framer-motion';

export default function StoryGrownUp() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-y-10">
      <div>
        <h2 className="font-semibold text-3xl mb-2 max-sm:text-2xl">
          #3 차곡차곡 쌓이는 성장일기
        </h2>
        <span className="text-[#999999]">잘하는 날보다, 자라는 나를 보다.</span>
      </div>

      <div className="flex flex-col gap-y-5">
        <h3 className="text-lg font-medium">
          Q: 밤프를 하면서 언제 성장했다고 느꼈나요?
        </h3>
        <span className="font-normal">
          <strong className="font-medium">나영: </strong> 결과보다는 과정에
          승복하게 되는 나를 발견했을 때, 스스로 대견했어요. 수상이라는 결과에만
          의존하던 제가 기획을 사랑하는 사람들끼리{' '}
          <strong className="font-semibold bg-defaultYellow">
            박터지게 고민하는 그 과정 자체를 성공과 실패로 규정짓기 싫어졌을 때,
            성장했다고 확신했어요.
          </strong>
        </span>
        <span className="font-normal">
          <strong className="font-medium">성채: </strong> 저는 광고도 마케팅도
          모르는 백지상태에서 밤프에 들어왔어요. 그래서 처음부터 어깨너머로
          배우고 혼자 책도 읽으면서 공부했었어요. 그러다보니 두 번째
          공모전에서는 생활에서 겪었던 인사이트를 잘 풀어서 수상도 할 수
          있었구요! 거기서 멈추지 않고, 세 번째 공모전 땐 팀에서 디자인을 맡아서
          디자인도 공부하다 보니,{' '}
          <strong className="font-semibold bg-defaultYellow">
            쌩초보 음대생에서 디자인까지 할 줄 아는 기획자로 바뀔 수 있었어요.{' '}
          </strong>
        </span>
      </div>

      <div>
        <img className="rounded-lg" src="/news/story/story-grownup.webp" />
        <span className="text-sm font-normal text-center block mt-3 text-[#999999]">
          몰라보게 달라진 성채님의 기획서
        </span>
      </div>
    </motion.div>
  );
}
