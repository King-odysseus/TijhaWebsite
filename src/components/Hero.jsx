function Hero() {
  return (
    <div className="w-full h-[200px] flex">
      {/* Text Side */}
      <div className="w-1/2 h-full bg-indigo flex flex-col justify-center px-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Find Your Dream<br />Property Today
        </h1>
        <p className="text-white/70 mt-2 text-sm md:text-base max-w-md">
          Discover premium real estate tailored to your lifestyle
        </p>
      </div>

      {/* Image Side */}
      <div className="w-1/2 h-full bg-gradient-to-br from-[#262262]/90 to-[#C49A6C]/60 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg">Tijha</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
