export type Car = {
	id: string;
	name: string;
	year: number;
	priceEstimate: number;
	mileage: number;
	location: string;
	fuel: 'Gasoline' | 'Hybrid' | 'Electric';
	transmission: 'Automatic' | 'Manual';
	image: string;
	status: 'Live' | 'Upcoming' | 'Closed';
	rating: number;
	bids: number;
	endTime: string;
};

export const cars: Car[] = [
	{
		id: 'ol-gt500',
		name: '2022 Ford Mustang Shelby GT500',
		year: 2022,
		priceEstimate: 102000,
		mileage: 4200,
		location: 'Munich, DE',
		fuel: 'Gasoline',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
		status: 'Live',
		rating: 4.9,
		bids: 18,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString()
	},
	{
		id: 'ol-911-gt3',
		name: '2021 Porsche 911 GT3',
		year: 2021,
		priceEstimate: 174000,
		mileage: 7600,
		location: 'Hamburg, DE',
		fuel: 'Gasoline',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
		status: 'Live',
		rating: 4.8,
		bids: 24,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString()
	},
	{
		id: 'ol-model-s',
		name: '2023 Tesla Model S Plaid',
		year: 2023,
		priceEstimate: 128000,
		mileage: 3100,
		location: 'Berlin, DE',
		fuel: 'Electric',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80',
		status: 'Upcoming',
		rating: 4.7,
		bids: 9,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString()
	},
	{
		id: 'ol-r8',
		name: '2020 Audi R8 V10 Performance',
		year: 2020,
		priceEstimate: 156000,
		mileage: 9800,
		location: 'Cologne, DE',
		fuel: 'Gasoline',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1400&q=80',
		status: 'Live',
		rating: 4.6,
		bids: 16,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 7).toISOString()
	},
	{
		id: 'ol-supra',
		name: '2019 Toyota Supra GR',
		year: 2019,
		priceEstimate: 65000,
		mileage: 15400,
		location: 'Stuttgart, DE',
		fuel: 'Gasoline',
		transmission: 'Manual',
		image:
			'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80',
		status: 'Closed',
		rating: 4.5,
		bids: 22,
		endTime: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString()
	},
	{
		id: 'ol-rs6',
		name: '2022 Audi RS6 Avant',
		year: 2022,
		priceEstimate: 142000,
		mileage: 5200,
		location: 'Frankfurt, DE',
		fuel: 'Hybrid',
		transmission: 'Automatic',
		image:
			'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
		status: 'Upcoming',
		rating: 4.8,
		bids: 11,
		endTime: new Date(Date.now() + 1000 * 60 * 60 * 40).toISOString()
	}
];

export const bidHistory = [
	{ bidder: 'DriveMax Capital', amount: 98500, time: '2m ago' },
	{ bidder: 'Apex Auto Fund', amount: 97250, time: '6m ago' },
	{ bidder: 'Velocity Collective', amount: 96000, time: '12m ago' },
	{ bidder: 'Nordic Motors', amount: 94500, time: '18m ago' }
];
