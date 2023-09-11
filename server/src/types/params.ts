export type Difficulties  = 'EASY' | 'MEDIUM' | 'HARD' | null

export type RecipesParams = {
	search: string | null
	topicId: number | null
	difficulty: Difficulties
	_page: number
	_limit: number
}