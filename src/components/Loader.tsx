
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 animate-spin">
        </div>
        {/* Inner circle */}
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-primary absolute top-0 animate-spin" style={{ animationDuration: '0.6s' }}>
        </div>
      </div>
    </div>
  );
};

export default Loader;
