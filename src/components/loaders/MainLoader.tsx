export default function MainLoader({
  additionalStyles,
  insideStyles,
}: {
  additionalStyles: string;
  insideStyles: string;
}) {
  return (
    <div
      className={`animate-spin-slow flex items-center justify-center rounded-full ${additionalStyles} bg-gradient-to-tr from-white-900 to-white-500`}
    >
      <div className={` rounded-full ${insideStyles}`}></div>
    </div>
  );
}
