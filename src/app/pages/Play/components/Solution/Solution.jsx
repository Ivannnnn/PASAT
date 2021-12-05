import { useEffect } from 'react'
import SolutionInput from './components/SolutionInput'
import { isNumeric } from '@/helpers'

export default function Solution({ value, onChange, onEnter, className }) {
  useEffect(() => {
    function keydown(e) {
      if (e.key === 'Enter') onEnter()
      else if (e.key === 'Backspace') onChange(String(value).slice(0, -1))
      else if (isNumeric(e.key)) {
        onChange(
          String(value).length >= 2 ? Number(e.key) : Number(value + e.key)
        )
      }
    }

    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [value])

  return <SolutionInput value={value} className={className} />
}
