function buttonElement({ btnClick, message }) {
  return (
    <>
      <button
        type="submit"
        className="rounded-md px-3 py-2 bg-orange-500"
        onClick={btnClick}
      >
        {message}
      </button>
    </>
  );
}

export default buttonElement;
