import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    // Increase the count on first load
    fetch('/api/visit', { method: 'POST' })
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.count))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span className="blink">[</span> Welcome to my Personal Homepage <span className="blink">]</span>
      </div>
      
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="profile-img"
        width={160}
        height={160}
        priority
      />

      <h1>
        <span className="blink">&gt;</span> Hey, I'm ternera - nice to meet you!
      </h1>

      <div>
        <p>
          I'm just a dude who is interested in IT, coding, community management, and technology in general. Feel free to reach out to me if you want to chat!
        </p>
        
        <ul>
          <li>I am always working to become more like Jesus in thought and deed.</li>
          <li>I manage some communities on Reddit and Discord.</li>
          <li>I enjoy beautiful things, like the outdoors and viewing artwork.</li>
          <li>I enjoy learning new skills and getting better at existing ones. Currently, I'm interested in learning more about Linux, programming, troubleshooting, and problem solving.</li>
        </ul>
        
        <p>
          Since a young age, I have been interested in computers and how they work. This has helped me become familiar with Windows, Linux, and MacOS ecosystems as well as basic helpdesk/troubleshooting techniques.
        </p>
        
        <p>
          In some of my free time, I help as a global system operator at Wikipedia. This involves performing maintenance tasks various Wikipedia projects and occasional spam cleanup. At the time of writing, I also lead a few Reddit communities with a total of 23 million members and a Discord server with 17 thousand members!
          I've been able to automate some routine moderation tasks by writing filters and bots. It's also taught me a lot about customer service and conflict resolution! I'm open to doing freelance community management work!
        </p>
        
        <p>
          Occasionally, I'll play games like Counter-Strike: Global Offensive or Minecraft. I'm not a competitive or experienced gamer by any means, but it's fun to sit back and enjoy a gaming session with friends sometimes!
        </p>
        
        <p>
          I'm a firm believer in <a href="https://en.wiktionary.org/wiki/touch_grass">touching grass</a> and highly recommend it. Get outside and do things! 😀 Oh, and if you haven't received Jesus Christ's <a href="https://www.biblegateway.com/">free gift of salvation</a>, you should look into that!
        </p>
      </div>

      <div className="hit-counter">
        Visitors: {visitorCount !== null ? visitorCount.toString().padStart(6, '0') : 'Loading...'}
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://github.com/ternera" className="button-88">GITHUB</a>
        <a href="https://reddit.com/u/ternera" className="button-88">REDDIT</a>
        <a href="https://youtube.com/@ternera" className="button-88">YOUTUBE</a>
        <a href="https://medium.com/@ternera" className="button-88">MEDIUM</a>
        <a href="https://bsky.app/profile/ternera.bsky.social" className="button-88">BLUESKY</a>
        <a href="https://discord.gg/ternera" className="button-88">DISCORD</a>
        <a href="https://open.spotify.com/user/31uyi4f227ggbuf6shvi5e7wkjai" className="button-88">SPOTIFY</a>
        <a href="mailto:contact@example.com" className="button-88">EMAIL</a>
        <a href="https://www.ternera.org/rss.xml" className="button-88">RSS</a>
      </div>
    </div>
  );
}