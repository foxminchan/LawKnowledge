import Logo from '@assets/images/quoc_huy.svg';

export default function StartScreen() {
  return (
    <div className="lg:w-[70rem] w-full h-full flex justify-center items-center ">
      <div className="flex flex-col h-[30%] px-3 py-3 justify-center items-center">
        <img src={Logo} alt="logo" className="w-[63px] mr-3 mb-3" />
        <span className="text-lg font-semibold leading-4 text-dark-moderate-blue-800 w-[100%]">
          Chào mừng đến với Government Chatbot.
        </span>
      </div>
    </div>
  );
}
