// Atmospheric chrome-blue background for the TL portfolio.
// Pure CSS animation: no heavyweight canvas or video decoding.
const AnimatedBackground = () => (
  <div className="ambient tl-atmosphere" aria-hidden="true">
    <span className="ambient-orb ambient-orb-a" />
    <span className="ambient-orb ambient-orb-b" />
    <span className="tl-atmosphere__beam" />
    <span className="tl-atmosphere__vignette" />
  </div>
);

export default AnimatedBackground;
