interface StoryTabBtnProps {
  content: string;
  isClicked: boolean;
  handler: () => void;
}

export default function StoryTabBtn({
  isClicked,
  content,
  handler,
}: StoryTabBtnProps) {
  return (
    <button
      className={isClicked ? 'storyBtnClicked' : 'storyBtnUnClicked'}
      onClick={handler}>
      <span>{content}</span>
    </button>
  );
}
