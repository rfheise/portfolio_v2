'use client'

interface Props {
  options: string[]
  value: string
  onChange: (value: string) => void
  id?: string
  className?: string
  ariaLabel?: string
  disabled?: boolean
  placeholder?: string
}

export default function DropDown(props:Props) {
  return (
    <select
      id={props.id}
      value={props.value}
      className={props.className}
      aria-label={props.ariaLabel}
      disabled={props.disabled}
      onChange={(event) => props.onChange(event.target.value)}
    >
      {props.placeholder ? (
        <option value="" disabled hidden>
          {props.placeholder}
        </option>
      ) : null}
      {props.options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )
}
