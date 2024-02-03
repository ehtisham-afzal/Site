export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose min-w-full dark:text-accent-foreground/90 prose-indigo px-px prose-strong:text-purple-500 prose-headings:text-accent-foreground flex justify-center prose-lg md:prose-2xl w-full h-full mt-48">
      <div>{children}</div>
    </div>
  );
}
