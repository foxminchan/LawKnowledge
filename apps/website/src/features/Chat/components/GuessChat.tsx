import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function GuessChat() {
  return (
    <div className="flex justify-center m-5">
      <div className="w-[70rem] h-auto border rounded-lg  bg-neutral-100">
        <div className="flex px-3 py-3">
          <AccountCircleOutlinedIcon className="w-[32px] mr-3" />
          <span className="text-base font-normal text-dark-moderate-blue-800">
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
