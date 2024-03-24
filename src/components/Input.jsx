function Input({ htmlFor, label, ...props }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 text-[0.5rem] uppercase font-roboto_condensed block"
      >
        {label}
      </label>
      <input
        className="p-2 bg-transparent border border-white rounded outline-none"
        name={htmlFor}
        id={htmlFor}
        type="number"
        {...props}
      />
    </div>
  )
}

export default Input
