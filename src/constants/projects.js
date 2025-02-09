const projects = [
	{
		id: 1,
		title: 'Autoscaling System with Dynamic Queue Management',
		description:
			'The face recognition system built with AWS Lambda and Docker processes images from S3 buckets using a two-step approach. First it splits videos into frames and then running facial recognition in a containerized environment. The project features automated processing with S3 triggers and secure permissions management, showcasing a scalable, cloud-based solution for efficient and robust image analysis.',
		tags: [
			'AWS',
			'Docker',
			'Python',
			'FFmpeg',
			'Machine Learning'
		],
		code: 'https://github.com/rajvi-patel-22/IdentiScan',
		// image: '/Users/rajvipatel/Documents/Projects/2025/portfolio/src/assets/images/face-recog.jpg',
		// demo: 'https://ecommerce-admin.computerbyte.in',
		present: true,
	},
	{
		id: 2,
		title: 'Internet Radio Multicasting',
		description:
			'Internet Radio Multicasting is a system designed to stream multimedia content (audio, video, etc.) over IP networks using multicast technology. It efficiently delivers data to multiple clients simultaneously, reducing bandwidth usage and enhancing scalability. Built with C and leveraging UDP and multicast protocols, the project focuses on IP-based multimedia transmission, client management, and error handling for seamless streaming. It supports audio codecs like MP3 and integrates libraries such as socket, pyaudio, and ffmpeg for network communication and audio playback.',
		tags: [
			'C',
			'Socket Programming',
			'FFmpeg',
		],
		code: 'https://github.com/rameskum/ecommerce-store',
		demo: 'https://ecommerce-store.computerbyte.in',
		image:
			'https://raw.githubusercontent.com/rameskum/ecommerce-store/main/Store.jpeg',
		present: true,
	},
	{
		id: 3,
		title: 'Mood Classification of Songs Based on Lyrics',
		description:
			'This project utilizes natural language processing (NLP) and machine learning techniques to classify songs into mood categories such as happy, sad, energetic, and calm based on their lyrics. Implemented in Python using libraries like NLTK, Scikit-learn, and TensorFlow, it includes steps for text preprocessing, feature extraction (TF-IDF, word embeddings), and model training with classifiers like SVM and Neural Networks. The project achieved high accuracy and provides interactive visualizations for performance evaluation, with potential for future enhancements like multilingual lyric support and transformer-based models.',
		tags: ['Python', 'NLTK', 'Scikit-learn', 'TensorFlow', 'Pandas', 'Machine Learning'],
		code: 'https://github.com/rameskum/hello-dog',
		demo: 'https://rameskum.github.io/hello-dog/',
		image:
			'https://raw.githubusercontent.com/rameskum/hello-dog/master/src/res/hello-dog.png',
		present: true,
	},
	{
		id: 11,
		title: 'Predicting Thalassemia Transmission Using Markov Processes',
		description:
			'This project focuses on modeling how thalassemia traits are passed down through generations using Markov processes. By simulating different parental genotypes, it predicts the likelihood of children being unaffected, carriers, or affected by the disorder. Developed in MATLAB, it provides clear visualizations and insights into how severe traits can diminish over time with strategic parental genotype combinations.',
		tags: ['Java', 'Probability', 'MATLAB', 'HTML', 'CSS'],
		code: 'https://github.com/rameskum/breaking-bad',
		demo: 'https://rameskum.github.io/breaking-bad/',
		image:
			'https://raw.githubusercontent.com/rameskum/breaking-bad/main/breaking-bad-app-ss.png',
	},
	{
		id: 12,
		title: 'Estimating the Effect of Climate Change on Sea Level Using Machine Learning',
		description: 'This project uses machine learning to predict sea level rise globally and in specific regions like San Francisco by analyzing environmental factors such as temperature, precipitation, and greenhouse gas levels. Models like neural networks, random forests, and SVMs are implemented, with PCA used for dimensionality reduction. The results demonstrate the effectiveness of neural networks for global predictions and random forests for localized predictions, showcasing the potential of data-driven approaches to address the impacts of climate change.',
		tags: ['Python', 'Machine Learning', 'PCA', 'Matplotlib', 'Neural Networks', 'Random Forests', 'Support Vector Machines'],
		code: 'https://github.com/rameskum/dog-facts',
		demo: 'https://rameskum.github.io/dog-facts/',
	},
	{
		id: 13,
		title: 'Linear Discriminant Analysis of a 32x32 Grayscale Image for Image Compression',
		description: 'This project applies Linear Discriminant Analysis (LDA) to transform 32x32 grayscale images into a lower-dimensional space, maximizing class separability while minimizing loss. Implemented in MATLAB and translated to Verilog, the design was optimized to reduce FPGA processing time by 25%. Simulated using Xilinx ISE, the system achieved 99% classification accuracy, demonstrating efficient hardware execution and effective dimensionality reduction.',
		tags: [ 'MATLAB', 'Verilog', 'FPGA', 'Xilinx ISE'],
		code: 'https://github.com/rameskum/dog-facts',
		demo: 'https://rameskum.github.io/dog-facts/',
	}
];

export default projects;
