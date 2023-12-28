interface StoryTabBtnProps {
  content: string;
  handler: () => void;
}

export default function StoryTabBtn({ content, handler }: StoryTabBtnProps) {
  return (
    <button
      className="bg-defaultYellow py-2 px-3 rounded-full text-base max-sm:text-xs"
      onClick={handler}>
      {content}
    </button>
  );
}
