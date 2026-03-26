// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.releaseloop.com',
	integrations: [
		starlight({
			title: 'ReleaseLoop Docs',
			logo: {
				src: './src/assets/logo.png',
			},
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'x.com', label: 'X', href: 'https://x.com/releaseloop' },
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'og:image',
						content: '/og-image.png',
					},
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome to ReleaseLoop', slug: 'getting-started/welcome' },
						{ label: 'Quick Start Guide', slug: 'getting-started/quick-start' },
						{ label: 'Onboarding Walkthrough', slug: 'getting-started/onboarding' },
					],
				},
				{
					label: 'Releases',
					items: [
						{ label: 'Managing Releases', slug: 'releases/managing-releases' },
						{ label: 'Tracks', slug: 'releases/tracks' },
						{ label: 'Tasks & Checklists', slug: 'releases/tasks' },
						{ label: 'Marketing Planner', slug: 'releases/marketing' },
						{ label: 'Assets & Files', slug: 'releases/assets' },
						{ label: 'Comments & Activity', slug: 'releases/comments' },
					],
				},
				{
					label: 'Financials',
					items: [
						{ label: 'Budgets & Revenue', slug: 'financials/budgets' },
						{ label: 'Royalty Splits', slug: 'financials/royalty-splits' },
						{ label: 'Royalty Imports', slug: 'financials/royalty-imports' },
						{ label: 'Artist Statements', slug: 'financials/artist-statements' },
						{ label: 'Payout Statements', slug: 'financials/payouts' },
					],
				},
				{
					label: 'Artists',
					items: [
						{ label: 'Managing Artists', slug: 'artists/managing-artists' },
						{ label: 'Spotify Integration', slug: 'artists/spotify' },
						{ label: 'Electronic Press Kits (EPKs)', slug: 'artists/epks' },
					],
				},
				{
					label: 'Contacts',
					items: [
						{ label: 'Managing Contacts', slug: 'contacts/managing-contacts' },
						{ label: 'Tracking Interactions', slug: 'contacts/interactions' },
					],
				},
				{
					label: 'Templates & Calendar',
					items: [
						{ label: 'Release Templates', slug: 'templates/release-templates' },
						{ label: 'Calendar View', slug: 'templates/calendar' },
					],
				},
				{
					label: 'Team & Workspace',
					items: [
						{ label: 'Workspaces', slug: 'team/workspaces' },
						{ label: 'Team Members & Roles', slug: 'team/members' },
						{ label: 'Notifications', slug: 'team/notifications' },
					],
				},
				{
					label: 'Billing & Plans',
					items: [
						{ label: 'Plans & Pricing', slug: 'billing/plans' },
						{ label: 'Managing Your Subscription', slug: 'billing/subscription' },
					],
				},
				{
					label: 'Integrations',
					items: [
						{ label: 'Google Drive', slug: 'integrations/google-drive' },
						{ label: 'Spotify', slug: 'integrations/spotify' },
					],
				},
			],
		}),
	],
});
