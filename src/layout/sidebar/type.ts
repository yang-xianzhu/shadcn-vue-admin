export interface TplayItem {
	label: string
	key: string
	icon?: string
	children: { label: string; key: string | number; icon?: string }[]
}
