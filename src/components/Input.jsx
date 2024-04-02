function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 text-[0.5rem] uppercase font-roboto_condensed block">
        {label}
      </label>
      <input
        className="p-2 bg-transparent border border-white rounded outline-none"
        type="number"
        required
        {...props}
      />
    </div>
  )
}

export default Input
