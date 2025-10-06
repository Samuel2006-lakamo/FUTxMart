function AuthBackground({ children }) {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero3.jpg')" }}
    >
      {/* Overlay on top of background image */}
      <div className="absolute inset-0 bg-purple-800/40"></div>
      <div className="absolute inset-0 bg-black/50 "></div>
      {children}
    </div>
  );
}

export default AuthBackground;
