export const Sym = ({ name, className }: { name: string; className?: string }) => (
  <span className={`msym${className ? ` ${className}` : ''}`}>{name}</span>
)
