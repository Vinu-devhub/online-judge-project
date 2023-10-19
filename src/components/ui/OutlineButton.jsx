// eslint-disable-next-line react/prop-types
const OutlineButton = ({ title }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-100 font-semibold text-white hover:text-black hover:bg-white hover:border-white  transition-all text-base"
    >
      {title}
    </button>
  );
};

export default OutlineButton;

// return (
//   <button className=" flex justify-center items-center bg-transparent px-5 py-2 outline-[3] outline outline-white border-none rounded-md -outline-offset-2 cursor-pointer transition duration-200 text-white hover:bg-white hover:text-black">
//     <div className="text-base font-bold ">{title}</div>
//   </button>
// );
