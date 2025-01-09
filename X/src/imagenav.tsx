export default function Imgnav() {
  return (
    <div className="absolute left-[1600px] top-8 flex space-x-4">
      <img
        src="/discord.png"
        alt="discord"
        className="delay-50 h-[35px] w-[35px] bg-black transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black"
      />
      <a href="https://github.com/Dude6561" target="_blank">
        <img
          src="/Github.png"
          alt="github"
          className="delay-50 h-[35px] w-[35px] bg-black transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black"
        />
      </a>
      <img
        src="/instagram.png"
        alt="insta"
        className="delay-50 h-[35px] w-[35px] bg-black transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black"
      />
      <img
        src="/facebook.png"
        alt="fb"
        className="delay-50 h-[35px] w-[35px] bg-black transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black"
      />
    </div>
  );
}
