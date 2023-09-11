export type RecipesParams = {
	search?: string
	topicId?: number | null
	difficulty?: 'EASY' | 'MEDIUM' | 'HARD' | null
	_page: number
	_limit: number
}