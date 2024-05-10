enum COMPANY_INFORMATION {
	NAME = 'Recipe Sharer',
	ID = 1,
	DESCRIPTION = 'Recipe Web to share meals'
}
enum LEVELS {
	ADMIN = 1,
	USER = 2
}
enum PASSWORD_RESET_STATUS {
	ACTIVE = 1,
	INACTIVE = 0
}

export default {
	COMPANY_INFORMATION,
	LEVELS,
	PASSWORD_RESET_STATUS,
	USER: {
		USER_VERIFIED: {
			VERIFIED: 1,
			NO_VERIFIED: 0
		}
	},
	NOTIFICATIONS: {
		STATUS: {
			READED: 1,
			UNREADED: 0
		}
	},
	PER_PAGE: 30,
	PER_PAGE_WEB: 10,
	ACTIONS: {
		MAIN: 1,
		NO_MAIN: 0
	},
	MODULES: {
		PROFILE: '/dashboard/profile',
		RECIPES: '/recipes'
	},
	COOKING_TYPE_TIME: {
		MINUTES: 0,
		HOURS: 1,
		DAYS: 2
	},
	DIFFICULTY: {
		EASY: 0,
		MEDIUM: 1,
		HARD: 2
	}
}