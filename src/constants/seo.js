const page_meta = {
	titlePrefix: '',
	titleSuffix: ' - Rajvi Patel',
	twitterUser: 'rameskum',
	pages: [
		{
			id: 'home',
			title: 'Home',
			description:
				"I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
			paths: ['/', ''],
			url: 'https://rameskum.com',
			image: 'home.png',
			type: 'website',
		},
		{
			id: 'about',
			title: 'About Me',
			description: 'Learn more about Rajvi',
			paths: ['/about', '/about/'],
			type: 'website',
		},
		{
			id: 'projects',
			title: 'Projects',
			description: 'Projects developed by Rajvi.',
			paths: ['/projects', '/projects/'],
			type: 'website',
		},
		{
			id: 'contact',
			title: 'Contact',
			description: 'Contact details of Rajvi.',
			paths: ['/contact', '/contact/'],
			type: 'website',
		},
	],
};

export default page_meta;
