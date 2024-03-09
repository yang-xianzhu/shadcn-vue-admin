import { router } from './index'

export default function install() {
	router.beforeEach(async (to, from, next) => {
		next()
	})

	router.afterEach(() => {})
}
