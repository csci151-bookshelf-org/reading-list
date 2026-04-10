import type { Dispatch, SetStateAction } from 'react'
import type { FilterState } from '../../types'
import { filterOptions } from './filterUtils'

interface FilterProps {
	value: FilterState
	onChange: Dispatch<SetStateAction<FilterState>>
}

export default function Filter({ value, onChange }: FilterProps) {
	return (
		<section className="card filter-panel" aria-label="Book filters">
			<input
				className="text-input"
				type="search"
				value={value.query}
				placeholder="Search by title or author"
				onChange={(event) =>
					onChange({
						...value,
						query: event.target.value,
					})
				}
			/>

			<div className="filter-chips" role="group" aria-label="Reading status filters">
				{filterOptions.map((option) => {
					const isActive = value.status === option.value

					return (
						<button
							key={option.value}
							type="button"
							className={isActive ? 'chip chip-active' : 'chip'}
							aria-pressed={isActive}
							onClick={() =>
								onChange({
									...value,
									status: option.value,
								})
							}
						>
							{option.label}
						</button>
					)
				})}
			</div>
		</section>
	)
}
