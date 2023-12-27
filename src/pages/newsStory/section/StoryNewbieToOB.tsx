export default function StoryNewbieToOB() {
  return (
    <div className="flex flex-col gap-y-10">
      <div>
        <h2 className="font-semibold text-3xl mb-2 max-sm:text-2xl">
          #2 공모전 뉴비부터 고인물까지
        </h2>
        <span className="text-[#999999]">
          모르면 모를수록 좋다! 일단 들어오시죠.
        </span>
      </div>

      <div className="flex flex-col gap-y-5">
        <h3 className="text-lg font-medium">
          Q: 공모전을 준비하면서 밤프가 어떤 도움이 되었나요?
        </h3>
        <span className="font-normal">
          <strong className="font-medium">치형: </strong>저는 공모전에 1%도 알지
          못했어요. 그런데 밤프에 와서 걷기 시작했고, 어느새 마라톤에 참여할 수
          있을 정도의 저를 발견했어요.{' '}
          <strong className="font-semibold bg-defaultYellow">
            공모전의 1부터 10을 밤프에서 배울 수 있었어요.
          </strong>
        </span>
        <span className="font-normal">
          <strong className="font-medium">노을: </strong> 공모전 관련해서는,
          공모전에 대해 아무것도 모르던 저도 이해할 만큼 기획서에 대한 구성,
          꿀팁 등을 알 수 있다는 게 좋았어요. 밤프 친구들과 운영진에게 매번
          피드백 받을 수 있었던 점도 좋았어요!{' '}
          <strong className="font-semibold bg-defaultYellow">
            무엇보다 몸으로 직접 부딪치기 때문에 자신이 열심히 한 만큼 실력을
            성장시킬 수 있다는 점이 가장 큰 장점인 것 같아요.
          </strong>{' '}
          공모전 이외에는 진로 선택과 좋은 인연들을 많이 만날 수 있었던 것
          같습니다.
        </span>
      </div>

      <div>
        <img className="rounded-lg" src="/news/story/story-newbie.png" />
        <span className="font-normal text-sm text-center block mt-3 text-[#999999]">
          뉴비에서 광고인물까지, 모든 순간 밤프와 함께했다
        </span>
      </div>
    </div>
  );
}
