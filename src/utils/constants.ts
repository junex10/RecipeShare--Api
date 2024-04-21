enum COMPANY_INFORMATION {
	NAME = 'ClinicaSBV',
	ID = 1,
	DESCRIPTION = 'Sistema para consultoria y administración de la clinica'
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
		},
		LOGGED_IN: {
			IN: 1,
			OUT: 0
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
		PROFILE: '/dashboard/profile'
	},
	COOKING_TYPE_TIME: {
		MINUTES: 0,
		HOURS: 1,
		DAYS: 2
	}
}