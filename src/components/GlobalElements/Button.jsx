function buttonElement({ btnClick, message }) {
  return (
    <>
      <button
        type="submit"
        className="rounded-md bg-orange-500"
        onClick={btnClick}
      >
        {message}
      </button>
    </>
  );
}

export default buttonElement;
