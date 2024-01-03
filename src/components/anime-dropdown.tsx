import { AnimeRating, AnimeType } from '@tutkli/jikan-ts'

interface AnimeDropdownProps {
  options: AnimeType[] | AnimeRating[]
  placeholder: string | readonly string[] | number | undefined
  selectedOption: string | undefined
  setSelectedOption: (value: React.SetStateAction<string | undefined>) => void
}

const AnimeDropdown = ({
  options,
  placeholder,
  selectedOption,
  setSelectedOption
}: AnimeDropdownProps) => {
  return (
    <div className='dropdown'>
      <button type='button' tabIndex={0} className='btn btn-sm'>
        {selectedOption || placeholder}
      </button>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-10 mt-2 w-52 rounded bg-base-200 p-2 shadow'>
        {options.map((option) => (
          <li key={option} onClick={() => setSelectedOption(option)}>
            <p>{option}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimeDropdown
