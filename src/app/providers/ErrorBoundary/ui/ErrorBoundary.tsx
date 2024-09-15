import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(error, info)
	}

	render() {
		const { children } = this.props
		const { hasError } = this.state

		if (hasError) {
			return <h1>Something went wrong.</h1>
		}

		return children
	}
}

export { ErrorBoundary }
