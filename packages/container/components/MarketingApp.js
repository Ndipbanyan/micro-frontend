import React, { useEffect, useRef } from 'react'

import { mount } from 'marketing/MarketingApp'

export default () => {
	const rootRef = useRef(null)

	useEffect(() => {
		mount(rootRef.current)
	}, [])

	return <div ref={rootRef} />
}
