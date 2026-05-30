import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import Navigator from "./components/Navigator";

// Scene Components import
import HeroScene from "./components/scenes/HeroScene";
import ServicesUniverse from "./components/scenes/ServicesUniverse";
import CareerScene from "./components/scenes/CareerScene";
import AcademicScene from "./components/scenes/AcademicScene";
import DesignScene from "./components/scenes/DesignScene";
import TechnicalScene from "./components/scenes/TechnicalScene";
import WhyAtherScene from "./components/scenes/WhyAtherScene";
import ContactScene from "./components/scenes/ContactScene";

import { Sparkles, ArrowLeft, Layers3 } from "lucide-react";

export default function App() {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 = down/next, -1 = up/prev
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Touch tracking references
  const touchStartY = useRef<number | null>(null);

  // Cinematic initial brand loader loop
  useEffect(() => {
    const handle = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(handle);
  }, []);

  const totalScenes = 8;

  // Navigate to a specific scene index safely with directional calculation
  const handleNavigate = (targetIndex: number) => {
    if (targetIndex === currentScene) return;
    if (isTransitioning) return;

    setDirection(targetIndex > currentScene ? 1 : -1);
    setIsTransitioning(true);
    setCurrentScene(targetIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 850); // Match transit timing
  };

  // Move to next scene index
  const nextScene = () => {
    if (currentScene < totalScenes - 1) {
      handleNavigate(currentScene + 1);
    }
  };

  // Move to previous scene index
  const prevScene = () => {
    if (currentScene > 0) {
      handleNavigate(currentScene - 1);
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)) {
        return; // ignore when typing
      }
      if (e.key === "ArrowDown" || e.key === "Space" || e.key === "PageDown") {
        e.preventDefault();
        nextScene();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevScene();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentScene, isTransitioning]);

  // Touch swiping gestures support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        nextScene(); // swipe up
      } else {
        prevScene(); // swipe down
      }
    }
    touchStartY.current = null;
  };

  // Mouse wheel scroll controller
  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;

    // Detect trackpad scrolling overlay vs normal scrolling
    if (Math.abs(e.deltaY) > 15) {
      if (e.deltaY > 0) {
        nextScene();
      } else {
        prevScene();
      }
    }
  };

  // Map indexes to corresponding slide modules
  const renderActiveScene = () => {
    switch (currentScene) {
      case 0:
        return <HeroScene onNavigate={handleNavigate} />;
      case 1:
        return <ServicesUniverse onNavigate={handleNavigate} />;
      case 2:
        return <CareerScene onNavigate={handleNavigate} />;
      case 3:
        return <AcademicScene onNavigate={handleNavigate} />;
      case 4:
        return <DesignScene onNavigate={handleNavigate} />;
      case 5:
        return <TechnicalScene onNavigate={handleNavigate} />;
      case 6:
        return <WhyAtherScene onNavigate={handleNavigate} />;
      case 7:
        return <ContactScene />;
      default:
        return <HeroScene onNavigate={handleNavigate} />;
    }
  };

  // Variants for direction-aware vertical slide transition
  const pageTransitionVariants = {
    initial: (dir: number) => ({
      y: dir > 0 ? "100vh" : "-100vh",
      opacity: 0,
      filter: "blur(8px)",
    }),
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1], // Custom cinematic bezier curve
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-100vh" : "100vh",
      opacity: 0,
      filter: "blur(8px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        /* Cinematic Brand intro loader */
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-[#050008] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle particle loop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,53,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="text-center space-y-6 max-w-sm px-4">
            {/* Spinning Golden laurel indicator */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4AF37]/50 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: "6s" }} />
              
              {/* Gold core 'A' branding */}
              <span className="text-5xl font-serif font-bold text-[#D4AF37] filter drop-shadow-[0_0_12px_rgba(212,175,85,0.6)]">
                A
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold bg-gradient-to-l from-[#F7F2FF] to-[#D4AF37] bg-clip-text text-transparent font-sans">
                أثير | Ather
              </h2>
              <div className="flex gap-1.5 justify-center items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-sans tracking-widest text-[#D58CFF] uppercase font-mono">
                  جاري تهيئة العرض السينمائي الخاص
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Primary cinematic presentation layout */
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-screen h-screen overflow-hidden bg-[#050008] text-[#F7F2FF] font-sans selection:bg-[#9B35FF]/35"
        >
          {/* 1. Global Atmospheric Canvas */}
          <ParticleBackground />

          {/* 2. Top-line Navigation Area */}
          <Header onNavigate={handleNavigate} currentSceneIndex={currentScene} />

          {/* 3. Floating side controller nodes */}
          <Navigator currentSceneIndex={currentScene} onNavigate={handleNavigate} />

          {/* 4. Scene Presentation Stage */}
          <main className="w-full h-full relative z-10 select-none">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentScene}
                custom={direction}
                variants={pageTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full absolute inset-0 overflow-y-auto no-scrollbar"
              >
                {renderActiveScene()}
              </motion.div>
            </AnimatePresence>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
