export default function MainButton({
  title,
  handleClick,
  value,
  additionalStyles,
}: {
  title: string | React.ReactNode;
  handleClick: (value: string) => void;
  value: string;
  additionalStyles: string;
}) {
  return (
    <button
      onClick={() => handleClick(value)}
      className={`rounded-lg ${
        additionalStyles && additionalStyles
      } px-5 py-3 text-lg font-medium w-full`}
    >
      {title}
    </button>
  );
}
