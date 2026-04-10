import type { Dispatch, SetStateAction } from 'react'
import type { FilterState } from '../../types'
import { filterOptions } from './filterUtils'

interface FilterProps {
	value: FilterState
	onChange: Dispatch<SetStateAction<FilterState>>
	resultCount: number
	totalCount: number
}

export default function Filter({
	value,
	onChange,
	resultCount,
	totalCount,
}: FilterProps) {
	return (
		<section className="card filter-panel" aria-label="Book filters">
			<div className="filter-head">
				<p className="eyebrow">Filters</p>
				<p className="filter-count" aria-live="polite">
					{resultCount} of {totalCount} books
				</p>
			</div>

			<input
				className="text-input filter-input"
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
