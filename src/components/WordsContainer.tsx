export default function WordsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative max-w-xl mt-3 text-2xl leading-relaxed break-all">
      {children}
    </div>
  );
}
