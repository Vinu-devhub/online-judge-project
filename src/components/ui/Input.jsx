/* eslint-disable react/prop-types */
const Input = ({ type, label, name, placeholder, error }) => {
  return (
    <div>
      <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          required
          aria-describedby="email-error"
          placeholder={placeholder}
        />
        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
          <svg
            className="h-5 w-5 text-red-500"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
      <p className="hidden text-xs text-red-600 mt-2" id="email-error">
        {error}
      </p>
    </div>
  );
};

export default Input;
