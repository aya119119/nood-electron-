export default function Logo() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#140c3b]/80 px-3 py-2 shadow-glow">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F0866] to-[#6F5CFF] shadow-md shadow-[#0F0866]/20">
        <div className="h-5 w-5 rounded-full bg-white/90" />
      </div>
      <div>
        <p className="text-base font-semibold tracking-tight text-white">NOOD</p>
        <p className="text-xs text-white/60">Public Speaking Coach</p>
      </div>
    </div>
  )
}
