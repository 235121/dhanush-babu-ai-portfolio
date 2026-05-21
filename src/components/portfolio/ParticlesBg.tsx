import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

export function ParticlesBg() {
  return (
    <ParticlesProvider init={init}>
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.8 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: ["#00F5FF", "#7B61FF"] },
          links: {
            color: "#00F5FF",
            distance: 140,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            outModes: { default: "out" },
          },
          number: { density: { enable: true, width: 800 }, value: 70 },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
    </ParticlesProvider>
  );
}
