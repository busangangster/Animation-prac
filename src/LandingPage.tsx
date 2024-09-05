// LandingPage.tsx
import React, { useEffect, useRef } from "react";
import { Application, Sprite, Container, Graphics, Assets } from "pixi.js";
import gsap from "gsap";

const LandingPage = () => {
  const pixiContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const app = new Application();

    const initializeApp = async () => {
      await app.init({
        autoStart: true,
        resizeTo: window,
        backgroundColor: 0x1e1e1e,
        sharedTicker: true,
        autoDensity: true,
        resolution: window.devicePixelRatio || 1,
      });

      if (pixiContainerRef.current) {
        pixiContainerRef.current.appendChild(app.view);
      }

      const mainContainer = new Container();
      app.stage.addChild(mainContainer);

      const background = new Graphics();
      background.beginFill(0x0c0c0c);
      background.drawRect(0, 0, app.screen.width, app.screen.height);
      background.endFill();
      mainContainer.addChild(background);

      const images = [
        "/src/assets/monster.jpg",
        "/src/assets/avengers1.jpg",
        "/src/assets/fastand.jpg",
        "/src/assets/firstandF.jpg",
        "/src/assets/lordof.jpg",
        "/src/assets/monster.jpg",
        "/src/assets/fastand.jpg",
        "/src/assets/firstandF.jpg",
        "/src/assets/avengers1.jpg",
      ];

      const textures = await Promise.all(
        images.map((path) => Assets.load(path))
      );

      textures.forEach((texture, index) => {
        const sprite = new Sprite(texture);
        sprite.anchor.set(0.5);
        sprite.x = app.screen.width / 2;
        sprite.y = -sprite.height; // Start above the screen
        sprite.width = 600;
        sprite.height = 350;
        mainContainer.addChild(sprite);

        // GSAP Animation: Drop down sequentially
        gsap.to(sprite, {
          y:
            index < textures.length - 1
              ? app.screen.height + sprite.height
              : app.screen.height / 2,
          duration: 1,
          delay: index * 0.5, // Stagger effect with 0.5 seconds between animations
          ease: "power2.out",
          onComplete: () => {
            if (index < textures.length - 1) {
              mainContainer.removeChild(sprite);
            }
          },
        });
      });
    };

    initializeApp();

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return (
    <div
      ref={pixiContainerRef}
      className="relative w-full h-screen overflow-hidden"
    ></div>
  );
};

export default LandingPage;
