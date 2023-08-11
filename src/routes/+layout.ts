import type { LayoutLoad } from './$types';
import { env } from '$env/dynamic/public';
// import { dev } from '$app/environment';

// Disable SSR when running the dev server
// This is a fix to vite dev server freezing on mac :(
// https://github.com/vitejs/vite/issues/11468
// export const ssr = !dev;
export const ssr = false;

export type MissingEnvironmentVariables = {
	PUBLIC_RADARR_API_KEY: boolean;
	PUBLIC_RADARR_BASE_URL: boolean;
	PUBLIC_SONARR_API_KEY: boolean;
	PUBLIC_SONARR_BASE_URL: boolean;
	PUBLIC_JELLYFIN_API_KEY: boolean;
	PUBLIC_JELLYFIN_URL: boolean;
};

export const load = (async () => {
	const isApplicationSetUp =
		!!env.PUBLIC_RADARR_API_KEY &&
		!!env.PUBLIC_RADARR_BASE_URL &&
		!!env.PUBLIC_SONARR_API_KEY &&
		!!env.PUBLIC_SONARR_BASE_URL &&
		!!env.PUBLIC_JELLYFIN_API_KEY &&
		!!env.PUBLIC_JELLYFIN_URL;

	return {
		isApplicationSetUp,
		missingEnvironmentVariables: {
			PUBLIC_RADARR_API_KEY: !env.PUBLIC_RADARR_API_KEY,
			PUBLIC_RADARR_BASE_URL: !env.PUBLIC_RADARR_BASE_URL,
			PUBLIC_SONARR_API_KEY: !env.PUBLIC_SONARR_API_KEY,
			PUBLIC_SONARR_BASE_URL: !env.PUBLIC_SONARR_BASE_URL,
			PUBLIC_JELLYFIN_API_KEY: !env.PUBLIC_JELLYFIN_API_KEY,
			PUBLIC_JELLYFIN_URL: !env.PUBLIC_JELLYFIN_URL
		}
	};
}) satisfies LayoutLoad;