interface FormInputProps {
  name: string
  type: string
  placeholder: string
  className?: string
}

export const FormInput = ({ name, type, placeholder, className }: FormInputProps) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    required
    className={`w-full bg-inputColor border-2 border-lime/60 rounded-[10px] p-4 text-[15px] font-semibold text-white outline-none transition-colors duration-200 focus:border-lime placeholder:text-white/35 ${className || ''}`}
  />
)
