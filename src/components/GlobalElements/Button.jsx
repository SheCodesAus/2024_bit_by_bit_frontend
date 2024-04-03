function buttonElement({ btnClick, message }) {
  return (
    <>
      <button
        type="submit"
        className="inline-flex w-full justify-center rounded-md px-3 py-2 bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
        onClick={btnClick}
      >
        {message}
      </button>
    </>
  );
}

export default buttonElement;
