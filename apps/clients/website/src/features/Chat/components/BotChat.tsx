import Logo from '@assets/images/quoc_huy.svg';

export default function BotChat() {
  return (
    <div className="flex justify-center m-5">
      <div className=" w-[70rem] h-auto bg-blue-400 border rounded-lg ">
        <div className="flex px-3 py-3">
          <img src={Logo} alt="logo" className="w-[32px] mr-3" />
          <span className="text-base font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
      </div>
    </div>
  );
}
