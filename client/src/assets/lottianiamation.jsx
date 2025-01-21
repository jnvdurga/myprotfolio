import React, { useEffect } from 'react';

const LottieAnimation = () => {
  useEffect(() => {
    // Importing the player component to ensure it works in React if not added in index.html
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="sm:w-[45vh]">
      <dotlottie-player
        src="https://lottie.host/c4877231-164d-48b3-940b-2c8308f02d11/ODde34u6jb.json"
        background="transparent"
        speed="1"
        style={{ width: 'full', height: "full" }}
        
      ></dotlottie-player>
    </div>
  );
};

export default LottieAnimation;
