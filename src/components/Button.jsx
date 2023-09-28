const variants = {
  default:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
  alternative:
    "text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
};

const Button = ({ variant = "default", children }) => {
  return (
    <button
      className={`text-sm px-5 py-2.5 mb-2 font-medium rounded-lg mr-2' ${variants[variant]}`}
    ></button>
  );
};

export default Button;
