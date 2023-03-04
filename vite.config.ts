import { defineConfig } from "vite"

interface MyServerOptions {
	mimeTypes?: Record<string, string[]>
}

const serverConfig: MyServerOptions = {
	mimeTypes: {
		"application/javascript": ["ts", "tsx"]
	}
}

export default defineConfig({
	// Autres options de configuration
	server: {
		...serverConfig,
		port: 3000,
		open: true,
		cors: true
	}
})
