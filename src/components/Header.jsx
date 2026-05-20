export default function Header({ balance, initials }) {
    return (
      <header className="flex items-center justify-end gap-2.5 px-5 h-[52px] shrink-0 bg-[#1a1a1f] border-b border-[#2a2a32]">
        <span className="text-[13px] font-medium text-[#f0f0f5] bg-[#222228] border border-[#33333d] px-2.5 py-1 rounded-md">
          {balance}
        </span>
        <div className="w-7 h-7 rounded-full bg-[#6b5ce7] flex items-center justify-center text-white text-[11px] font-bold tracking-wide shrink-0">
          {initials}
        </div>
      </header>
    )
  }
  