import type { FilterState } from '../../types'

type FilterOption = {
	value: FilterState['status']
	label: string
}

export const defaultFilterState: FilterState = {
	query: '',
	status: 'all',
}

export const filterOptions: FilterOption[] = [
	{ value: 'all', label: 'All' },
	{ value: 'to-read', label: 'Want to Read' },
	{ value: 'reading', label: 'Reading' },
	{ value: 'finished', label: 'Finished' },
]
