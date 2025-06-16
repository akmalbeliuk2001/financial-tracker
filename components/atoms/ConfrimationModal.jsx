import ButtonBase from "./ButtonBase"

export default function ConfirmationModal({confirmationMessage = "", confirm, cancel}) {
  return(
    <div className="absolute top-0 left-0 w-full h-screen bg-black/80 flex items-center justify-center">
      <div className="relative bg-white rounded w-[300px] h-[150px] text-[#333] p-4">
        <div className="text-lg">{ confirmationMessage }</div>
        <div className="absolute bottom-4 right-4 full flex justify-end items-center gap-x-4">
          <ButtonBase className="font-bold" onClick={cancel}>Cancel</ButtonBase>
          <ButtonBase className="bg-blue text-white px-2 py-1 rounded cursor-pointer font-bold" onClick={confirm}>Confirm</ButtonBase>
        </div>
      </div>
    </div>
  )
}
