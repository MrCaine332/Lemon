export type Difficulties  = 'EASY' | 'MEDIUM' | 'HARD' | null

export type RecipesParams = {
	search: string | null
	topicId: number | null
	difficulty: Difficulties
	userId: number | null
	_page: number
	_limit: number
}